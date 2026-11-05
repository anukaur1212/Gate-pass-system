import { ChevronRight, Package, RotateCcw, Save, ShieldCheck } from 'lucide-react'
import React from 'react'
import VisitorDetails from './VisitorDetails';

const VisitorForm = () => {

       const handleSubmit = (e) => {
        e.preventDefault();

        // Add your API submission logic here.
        alert("Gate pass request submitted successfully!");
    };
        const handleReset = () => {
        document.getElementById("gate-pass-form").reset();
        setType("RGP");
        setPhoto(null);
        setNote("");
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
                    onSubmit={handleSubmit}
                    className="p-6">


                    {/* Section 1: visitor details */}
                    <VisitorDetails/>


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

   </>
  )
}

export default VisitorForm