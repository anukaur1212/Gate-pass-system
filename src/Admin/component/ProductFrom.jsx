import React, { useState } from "react";
import { Package, RotateCcw, ShieldCheck, Save, ChevronRight } from "lucide-react";
import PersonalDetail from "./ProductForm/PersonalDetail";
import AddressDetails from "./ProductForm/AddressDetails";
import ProductDetail from "./ProductForm/ProductDetail";
import "/src/App.css";



const ProductForm = () => {
    const [type, setType] = useState("RGP");
    const [photo, setPhoto] = useState(null);
    const [note, setNote] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your API submission logic here.
        // alert("Gate pass request submitted successfully!");
    };

    const handleReset = () => {
        document.getElementById("gate-pass-form").reset();
        setType("RGP");
        setPhoto(null);
        setNote("");
    };

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
                    onSubmit={handleSubmit}
                    className="p-6">

                    {/* Section 1: Product Details */}
                    <ProductDetail />

                    {/* Divider */}
                    <div className="border-t border-gray-100" />

                    {/* Section 3: Personal Details */}
                    <PersonalDetail />

                    {/* Section 4: Address and Notes */}
                    <AddressDetails />

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
                            Submit Request
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