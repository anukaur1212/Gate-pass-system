import React, { useState } from 'react'
import { BoxesLinkedIcon, Check, ChevronDown, ShieldCheck, UserRound } from 'lucide-react'
import { stateOptions } from '../../Constant/EmployeeData';


const EmployeePersonalDetails = () => {

    const [state, setState] = useState("");
    const [openState, setOpenState] = useState(false)
    const [linkedin, setLinkedin] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [openDropDown, setOpenDropDown] = useState(null);

    const [EmpFormData, setEmpFormData] = useState({
        department: "",
        position: "",
        qualification: "",
        experience: "",
        image: null,
        address: ""
    })

    const employee = 'src/assets/img/avatar-5.jpg'

    return (
        <>
            <section className='max-h-auto'>

                <div className='w-full flex gap-4 bg-[var(--primary-light)] rounded-2xl'>
                    <img src={employee} alt="img" className='h-30 rounded-2xl' />
                    <div className="mb-4 mt-4 flex items-center gap-3 max-h-auto">

                        <div className="flex h-10 w-10 items-center justify-center 
                      rounded-xl bg-[#144667]/10 text-[#144667]">
                            <UserRound size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-gray-800">
                                Personal Details
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 mb-3 mt-7">

                    {/* Full Name */}
                    <div>
                        <label className="Form-label">
                            Full Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name"
                            required
                            className="Input-Field"
                        />
                    </div>

                    {/* father Name */}
                    <div>
                        <label className="Form-label">
                            Father Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="fName"
                            placeholder="Enter Father Name"
                            required
                            className="Input-Field"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="Form-label">
                            Email Address <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="example@company.com"
                            required
                            className="Input-Field"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="Form-label">
                            Phone Number <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter phone"
                            required
                            className="Input-Field"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="Form-label">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="date"
                            name="dob"
                            placeholder="Enter DOB"
                            required
                            className="Input-Field"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="Form-label">
                            Choose Gender <span className="text-red-500">*</span>
                        </label>

                        <div className="mt-2 grid grid-cols-2 gap-3">

                            {/* Male */}
                            <label className="flex items-center justify-between rounded-xl border border-gray-200
        bg-white px-4 py-3 cursor-pointer transition-all duration-200
        hover:border-[#2479a8] hover:bg-[#f3f7fa]
        has-[:checked]:border-[#144667] has-[:checked]:bg-[#e2edf4]
        has-[:checked]:shadow-sm">

                                <span className="text-sm font-semibold text-[#144667]">
                                    Male
                                </span>

                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    required
                                    className="h-4 w-4 accent-[#144667] cursor-pointer"
                                />
                            </label>

                            {/* Female */}
                            <label className="flex items-center justify-between rounded-xl border border-gray-200
        bg-white px-4 py-3 cursor-pointer transition-all duration-200
        hover:border-[#2479a8] hover:bg-[#f3f7fa]
        has-[:checked]:border-[#144667] has-[:checked]:bg-[#e2edf4]
        has-[:checked]:shadow-sm">

                                <span className="text-sm font-semibold text-[#144667]">
                                    Female
                                </span>

                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    required
                                    className="h-4 w-4 accent-[#144667] cursor-pointer"
                                />
                            </label>

                        </div>
                    </div>


                    <div>
                        {/* LinkedIn URL */}
                        <div>
                            <label className="Form-label">
                                LinkedIn Profile URL
                            </label>

                            <div className="relative mt-2 group">

                                <div className="absolute left-4 top-1/2 -translate-y-1/2
        text-gray-400 group-focus-within:text-[#144667]">
                                    <BoxesLinkedIcon size={18} />
                                </div>

                                <input
                                    type="url"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    placeholder="https://www.linkedin.com/in/username"
                                    className="w-full rounded-xl border border-gray-200
            bg-white py-3 pl-11 pr-4 text-sm text-gray-700
            shadow-sm outline-none transition-all
            bg-gradient-to-b from-white to-[#f3f7fa]
            placeholder:text-gray-400
            hover:border-gray-300
            focus:border-[#144667]
            focus:ring-4 focus:ring-[#144667]/10"
                                />
                            </div>
                        </div>

                        {/* Aadhaar Number */}
                        <div className="mt-4">
                            <label className="Form-label">
                                Aadhaar Number <span className="text-red-500">*</span>
                            </label>

                            <div className="relative mt-2 group">

                                <div className="absolute left-4 top-1/2 -translate-y-1/2
        text-gray-400 group-focus-within:text-[#144667]">
                                    <ShieldCheck size={18} />
                                </div>

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={12}
                                    value={aadhar}
                                    onChange={(e) =>
                                        setAadhar(e.target.value.replace(/\D/g, "").slice(0, 12))
                                    }
                                    placeholder="Enter 12-digit Aadhaar number"
                                    required
                                    className="w-full rounded-xl border border-gray-200
            bg-white py-3 pl-11 pr-4 text-sm text-gray-700
            shadow-sm outline-none transition-all
            placeholder:text-gray-400
            bg-gradient-to-b from-white to-[#f3f7fa]
            hover:border-gray-300
            focus:border-[#144667]
            focus:ring-4 focus:ring-[#144667]/10"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Address */}
                    <div>
                        <label className="Form-label">
                            Employee Address
                        </label>

                        <textarea
                            rows="3"
                            placeholder="Enter full address..."
                            className="w-full h-35 resize-none rounded-xl border border-gray-200
                            bg-gradient-to-b from-white to-[#f3f7fa] px-4 py-3 text-sm outline-none transition
                            hover:border-gray-300
                            focus:border-[#144667] focus:ring-4 focus:ring-[#144667]/10"
                        />
                    </div>

                </div>

            </section>
        </>
    )
}

export default EmployeePersonalDetails