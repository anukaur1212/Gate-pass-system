import { Wallet } from 'lucide-react';
import React, { useState } from 'react'
import { jobOptions } from '../../Constant/EmployeeData';
import CustomDropdown from '../custom/CustomDropdown';

const EmployeeSalaryDetails = ({ jobType,salary,setSalary,stipends,setStipends }) => {


    const [incentives, setIncentives] = useState("");

    const labelClass = "ps-3 mb-2 block  text-sm font-semibold text-[#144667]";

    return (
        <>
            <section className="mt-4 rounded-xl border border-[#d5e4ed] bg-[#f3f7fa] p-4">

                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2edf4] text-[#144667]">
                        <Wallet size={20} />
                    </div>
                    <p className="text-xl font-bold text-gray-700">
                        Salary Details
                    </p>
                </div>


                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


                    {/* Full Time / Part Time */}
                    {["Full Time", "Part Time"].includes(jobType) && (
                        <>
                            {/* Basic Amount */}
                            <div>
                                <label className={labelClass}> Basic *</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                    placeholder="Enter salary amount"
                                    className="Input-Field"
                                />
                            </div>

                               {/* mobile allowance */}
                            <div>
                                <label className={labelClass}>Salary Amount *</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Mobile Allowance"
                                    className="Input-Field"
                                />
                            </div>

                                 {/* Internet allowance */}
                            <div>
                                <label className={labelClass}>Internet Allowance *</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Internet Allowance"
                                    className="Input-Field"
                                />
                            </div>

                                 {/* others */}
                            <div>
                                <label className={labelClass}>others *</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Others"
                                    className="Input-Field"
                                />
                            </div>
                        </>
                    )}

                    {/* Internship */}
                    {jobType === "Internship" && (
                        <>
                            <div>
                                <label className={labelClass}>Stipends</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={stipends}
                                    onChange={(e) => setStipends(e.target.value)}
                                    placeholder="Enter stipend amount"
                                    className="Input-Field"
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Incentives</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={incentives}
                                    onChange={(e) => setIncentives(e.target.value)}
                                    placeholder="Enter incentives"
                                    className="Input-Field"
                                />
                            </div>
                        </>
                    )}

                </div>

            </section>

        </>
    )
}

export default EmployeeSalaryDetails