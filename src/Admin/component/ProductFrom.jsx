import React, { useEffect, useState } from "react";
import { Package, RotateCcw, ShieldCheck, Save, ChevronRight } from "lucide-react";
import PersonalDetail from "./ProductForm/PersonalDetail";
import AddressDetails from "./ProductForm/AddressDetails";
import ProductDetail from "./ProductForm/ProductDetail";
import "/src/App.css";
import { postGatePass } from "./ProductForm/GatePassApi/PostApi.js";
import { getGatePass } from "./ProductForm/GatePassApi/GetApi.js";
import { useLocation, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_url

const ProductForm = () => {
    const [type, setType] = useState("RGP");
    const [photo, setPhoto] = useState(null);
    const [note, setNote] = useState("");

    const [productData, setProductData] = useState([])

    const navigate = useNavigate()

    // const [passNumber, setPassNumber] = useState("")

    // getting data
    const getGatePass = async (type) => {
        try {
            const response = await fetch(`${BASE_URL}/gate/getgate`);
            const result = await response.json();

            setProductData(result.data);
            console.log(result)

            const prefix = type?.toLowerCase() === "rgp" ? "RGP" : "NRGP";

            const previousNumbers = result.data
                .filter(item => item.type?.toLowerCase() === type?.toLowerCase())
                .map(item => Number(item.pass_number) || 0);

            const nextNumber = Math.max(0, ...previousNumbers) + 1;
            return `${nextNumber}`;

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getGatePass()
    }, [])

    console.log(productData)
    const location = useLocation();  // to get data came from navigation state

    const editId = location?.state?.editId;

    const [productForm, setProductForm] = useState(
        location.state?.productData ||
        {
            type: "",
            product: "",
            pass_number:"",
            quantity: "",
            est_price: "",
            serial_number: "",
            organization: "",
            person_name: "",
            email: "",
            contact: "",
            expt_return: "",
            address: "",
            additional_note: ""
        })

    // console.log(location);

    const handleChange = (e) => {
        setProductForm({
            ...productForm,
            [e.target.name]: e.target.value
        })
    }

    // submit table data 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await postGatePass(productForm);
            console.log(result);

            // Clear form fields here if required
            setProductForm({
                type: "",
                product: "",
                pass_number:"",
                quantity: "",
                est_price: "",
                serial_number: "",
                organization: "",
                person_name: "",
                email: "",
                contact: "",
                expt_return: "",
                address: "",
                additional_note: ""
            })

            navigate('/report')

        } catch (error) {
            console.log(error.message);
            toast.error(error.result.message || "Something went wrong")
        }
    };


    const handleReset = () => {
        document.getElementById("gate-pass-form").reset();
        setType("RGP");
        setPhoto(null);
        setNote("");
    };

    // handle update
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/gate/updategate/${editId}`,
                {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(productForm)
                }
            )
            const result =await response.json()
            console.log(result)

            setProductForm({
                type: "",
                product: "",
                pass_number:"",
                quantity: "",
                est_price: "",
                serial_number: "",
                organization: "",
                person_name: "",
                email: "",
                contact: "",
                expt_return: "",
                address: "",
                additional_note: ""
            })

            navigate('/report')

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="product-form">

            {/* Main Form Card */}
            <div className="product-main-card">

                {/* Header */}
                <div className="product-header">

                    {/* Decorative Circles */}
                    <div className="circle-one" />
                    <div className="circle-two" />

                    <div className="header-main">
                        <div className="header-logo">
                            <Package size={28} />
                        </div>

                        <div>
                            <h1>
                                Product Details
                            </h1>
                            <p>
                                Fill in the product information and gate pass details.
                            </p>
                        </div>
                    </div>

                    <div className="header-info">
                        <ShieldCheck size={15} />
                        <span>Secure Gate Pass Request</span>
                        <span className="mx-1">•</span>
                        <span>All fields marked * are required</span>
                    </div>
                </div>

                <form
                    id="gate-pass-form"
                    onSubmit={editId ? handleUpdate : handleSubmit}
                    className="p-6">

                    {/* Section 1: Product Details */}
                    <ProductDetail handleChange={handleChange} productForm={productForm}
                        setProductForm={setProductForm} getGatePass={getGatePass} />

                    {/* Divider */}
                    <div className="border-t border-gray-100" />

                    {/* Section 3: Personal Details */}
                    <PersonalDetail handleChange={handleChange} productForm={productForm}
                        setProductForm={setProductForm} />

                    {/* Section 4: Address and Notes */}
                    <AddressDetails handleChange={handleChange} productForm={productForm}
                        setProductForm={setProductForm} />

                    {/* Footer Actions */}
                    <div className="product-form-footer">

                        <button
                            type="button"
                            onClick={handleReset}
                            className="reset-btn">
                            <RotateCcw size={17} />
                            Reset Form
                        </button>

                        <button
                            type="submit"
                            className="submit-btn">
                            <Save size={17} />
                            {editId ? "Update" : "Save"}
                            <ChevronRight
                                size={17}
                                className="submit-icon"
                            />
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProductForm;

