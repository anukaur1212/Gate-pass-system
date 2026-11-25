import { CalendarDays, Check, ChevronDown, UserRound } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { meetingOptions } from '../Constant/VisitorData';

const VisitorDetails = ({ formData, handleChange ,setFormData}) => {


    const [openMeeting, setOpenMeeting] = useState(false);

// console.log("Form data:", formData);
    const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";
    return (
        <>

            {/* Personal details */}
            <section className=''>
                <div className="mb-4 mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center 
                    rounded-xl bg-[var(--primary-light)] text-[var(--primary)]">
                        <UserRound size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Personal Details
                        </h2>
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
                    {/* Full Name */}
                    <div>
                        <label className={labelClass}>
                            Full Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                            placeholder="Enter full name"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className={labelClass}>
                            Phone Number <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            name="phone"
                            placeholder="Enter phone"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Purpose to Visit*/}
                    <div>
                        <label className={labelClass}>
                            Purpose to Visit <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="visitPurpose"
                            value={formData.visitPurpose}
                            onChange={handleChange}
                            placeholder="Enter Purpose"
                            required
                            className="inputClass"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mt-4'>
                    {/* In time*/}
                    <div>
                        <label className={labelClass}>
                            In Time <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="time"
                            name="inTime"
                            value={formData.inTime}
                            onChange={handleChange}
                            placeholder="In Time"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Out time*/}
                    <div>
                        <label className={labelClass}>
                            Out Time <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="time"
                            name="outTime"
                            value={formData.outTime}
                            onChange={handleChange}
                            placeholder="Out Time"
                            required
                            className="inputClass"
                        />
                    </div>

                    <div className="relative mb-0 mt-6.5">

                        {/* Dropdown Button */}
                        <button
                            type="button"
                            onClick={() => setOpenMeeting(!openMeeting)}
                            className="flex w-full items-center justify-between rounded-xl
                            border border-gray-200 bg-gradient-to-b from-white to-[#F3F7FA]
                            px-4 py-3 text-sm text-gray-700 shadow-sm transition-all
                            hover:border-[#3C86AC] focus:border-[#144667]
                            focus:ring-4 focus:ring-[#144667]/10"
                        >
                            <span className={formData.meetingTo ? "text-gray-700" : "text-gray-400"}>
                                {formData.meetingTo || "Select person to meet"}
                            </span>

                            <ChevronDown
                                size={18}
                                className={`text-[#144667] transition-transform duration-200
                            ${openMeeting ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* Dropdown Options */}
                        {openMeeting && (
                            <>
                                {/* Outside Click Overlay */}
                                <div
                                    className="fixed inset-0 z-30"
                                    onClick={() => setOpenMeeting(false)}
                                />

                                <div className="absolute z-50 mt-2 w-full overflow-hidden
                                      rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl">

                                    <div className="h-35 overflow-y-auto">
                                        {meetingOptions.map((item) => (
                                            <button
                                                type="button"
                                                key={item}
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        meetingTo: item
                                                    });
                                                    setOpenMeeting(false);
                                                }}
                                                className={`flex w-full items-center justify-between
                                                rounded-lg px-4 py-2.5 text-left text-sm transition
                                                hover:bg-[#F3F7FA] hover:text-[#144667]
                                                ${formData.meetingTo === item
                                                        ? "bg-[#F3F7FA] font-semibold text-[#144667]"
                                                        : "text-gray-600"
                                                    }`}
                                            >
                                                {item}

                                                {formData.meetingTo === item && (
                                                    <Check size={16} className="text-[#3C86AC]" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </section>


        </>
    )
}

export default VisitorDetails