import { UserRound } from 'lucide-react'
import React from 'react'

const PersonalDetail = () => {

      const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";
        
    return (
        <>

        {/* Personal details */}
            <section>
                <div className="mb-4 mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center 
                    rounded-xl bg-[#e2edf4] text-[#144667]">
                        <UserRound size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Going To Details
                        </h2>
                        <p className="text-xs text-gray-500">
                            Provide the organization and contact information.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

                    {/* Organization */}
                    <div>
                        <label className={labelClass}>
                            Organization Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="organization"
                            placeholder="Enter organization name"
                            required
                            className="inputClass"
                        />
                    </div>

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

                    {/* Email */}
                    <div>
                        <label className={labelClass}>
                            Email Address <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="example@company.com"
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
                            placeholder="Enter phone number"
                            required
                            className="inputClass"
                        />
                    </div>
                    </div>

                    <div className='grid gird-cols-1 mt-3'>

                       {/* Address */}
                    <div>
                        <label className={labelClass}>
                            Destination Address <span className="text-red-500">*</span>
                        </label>

                        <textarea
                            name="address"
                            rows="5"
                            placeholder="Enter complete address..."
                            required
                            className="inputClass resize-y"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default PersonalDetail