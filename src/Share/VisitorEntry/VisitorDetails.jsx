import { CalendarDays, Check, ChevronDown, UserRound } from 'lucide-react'
import React, { useState } from 'react'
import { meetingOptions } from '../Constant/VisitorData';

const VisitorDetails = () => {

    const [meetingTo, setMeetingTo] = useState("");
    const [openMeeting, setOpenMeeting] = useState(false);



    const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";
    return (
        <>

            {/* Personal details */}
            <section className='h-[250px]'>
                <div className="mb-4 mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center 
                    rounded-xl bg-[#eaf2eb] text-[#245b3e]">
                        <UserRound size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Personal Details
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

                    {/* Full Name */}
                    <div>
                        <label className={labelClass}>
                            Full Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="fullName"
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
                            name="purpose"
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
                            name="OutTime"
                            placeholder="Out Time"
                            required
                            className="inputClass"
                        />
                    </div>


                    {/* <div className="w-full"> */}
                        <div className="relative mb-0 mt-6.5">

                            {/* Dropdown Button */}
                            <button
                                type="button"
                                onClick={() => setOpenMeeting(!openMeeting)}
                                className="flex w-full items-center justify-between rounded-xl
                                border border-gray-200 bg-gradient-to-b from-white to-[#f8fbf7]
                                px-4 py-3 text-sm text-gray-700 shadow-sm transition-all
                                hover:border-[#a8c5ab] focus:border-[#56805d]
                                focus:ring-4 focus:ring-[#56805d]/10"
                            >
                                <span className={meetingTo ? "text-gray-700" : "text-gray-400"}>
                                    {meetingTo || "Select person to meet"}
                                </span>

                                <ChevronDown
                                    size={18}
                                    className={`text-[#56805d] transition-transform duration-200
                                ${openMeeting ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* Dropdown Options */}
                            {openMeeting && (

                                <>

                                    <div className='fixed inset-0 z-30' onClick={() => setMeetingTo(false)} />

                                    <div className="absolute z-50 mt-2 w-full overflow-hidden
                                    rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl">

                                        <div className='overflow-y-auto h-25'>
                                            {meetingOptions.map((item) => (
                                                <button
                                                    type="button"
                                                    key={item}
                                                    onClick={() => {
                                                        setMeetingTo(item);
                                                        setOpenMeeting(false);
                                                    }}
                                                    className={`flex w-full items-center justify-between
                                                    rounded-lg px-4 py-2.5 text-left text-sm transition
                                                    hover:bg-[#edf4ed] hover:text-[#245b3e]
                                                    ${meetingTo === item
                                                            ? "bg-[#edf4ed] font-semibold text-[#245b3e]"
                                                            : "text-gray-600"
                                                        }`}
                                                >
                                                    {item}

                                                    {meetingTo === item && (
                                                        <Check size={16} className="text-[#56805d]" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>
                    {/* </div> */}


                </div>

            </section>


        </>
    )
}

export default VisitorDetails