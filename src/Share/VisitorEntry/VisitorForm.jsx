import { ChevronRight, Package, RotateCcw, Save, ShieldCheck } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import VisitorDetails from './VisitorDetails';
import { postVisitor } from './VisitorApi/PostVisitor';
import { useLocation } from 'react-router-dom';
import { handleUpdate } from './VisitorApi/UpdateVisitor';
import { toast, Slide } from "react-toastify";



const VisitorForm = () => {

    const BASE_URL = import.meta.env.VITE_BACKEND_url

    // form states
    const location = useLocation();  // to get data came from navigation state

    const [formData, setFormData] = useState(
        location.state?.visitorData || {
            name: "",
            phone: "",
            visitPurpose: "",
            inTime: "",
            outTime: "",
            meetingTo: ""
        }
    );

    const editId = location.state?.editId;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const notify = () => {
        return toast.success('Visitor Added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            newestOnTop: true,
            rtl: false,
            closeButton: true,
            icon: "✅",
            limit: 3,
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await postVisitor(formData);
            console.log(result);

            // Clear form fields here if required
            setFormData({
                name: "",
                phone: "",
                visitPurpose: "",
                inTime: "",
                outTime: "",
                meetingTo: ""
            })

            notify()

        } catch (error) {
            console.log(error.message);
            toast.error(error.result.message || "Something went wrong")
        }
    };

    // handle update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const response = await fetch(
            `${BASE_URL}/visit/update/${editId}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData)
            }
        );

        const result = await response.json();
        console.log(result);

        // Clear form fields here if required
        setFormData({
            name: "",
            phone: "",
            visitPurpose: "",
            inTime: "",
            outTime: "",
            meetingTo: ""
        })
    };

    const handleReset = () => {
        document.getElementById("gate-pass-form").reset();
    };


    return (
        <>
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
                                    Visitor Deatils
                                </h1>
                            </div>
                        </div>

                        <div className="header-info">
                            <span className="mx-1">•</span>
                            <span>All fields marked * are required</span>
                        </div>
                    </div>

                    <form
                        id="gate-pass-form"
                        onSubmit={editId ? handleUpdate : handleSubmit}
                        className="p-6">


                        {/* Section 1: visitor details */}
                        <VisitorDetails formData={formData} setFormData={setFormData} handleChange={handleChange} />

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

        </>
    )
}

export default VisitorForm