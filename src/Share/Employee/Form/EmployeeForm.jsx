import React, { useState } from 'react'
import {User2Icon } from 'lucide-react'
import MultiStepForm from '../../Component/MultiStepForm';

const EmployeeForm = () => {

        const handleSubmit = (e) => {
        e.preventDefault();
    };


  return (
   <>
   
     <div className="min-h-screen bg-[#f3f7fa] p-4 sm:p-6 lg:p-8
         absolute lg:left-65 lg:top-20 lg:w-315">

            {/* Main Form Card */}
            <div className="product-main-card">

                {/* Header */}
                <div className="product-header">

                    {/* Decorative Circles */}
                    <div className="circle-one" />
                    <div className="circle-two" />

                    <div className="header-main">
                        <div className="header-logo">
                            <User2Icon size={28} />
                        </div>

                        <div>
                            <h1>
                                Employee Details
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

                    {/* stepper */}
                    <MultiStepForm />

                </form>
            </div>

        </div>

   </>
  )
}

export default EmployeeForm