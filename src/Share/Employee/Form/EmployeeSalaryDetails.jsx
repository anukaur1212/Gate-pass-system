import { Wallet } from 'lucide-react';
import React, { useState } from 'react'
import { jobOptions } from '../../Constant/EmployeeData';
import CustomDropdown from '../custom/CustomDropdown';

const EmployeeSalaryDetails = ({ jobType,salary,setSalary,stipends,setStipends }) => {

    const allowanceOptions = [
        { value: "basic", label: "Basic" },
        { value: "mobile", label: "Mobile Allowance" },
        { value: "internet", label: "Internet Allowance" },
        { value: "others", label: "Others" },
    ];

    // const [salary, setSalary] = useState("");
    const [allowance, setAllowance] = useState("");
    // const [stipends, setStipends] = useState("");
    const [incentives, setIncentives] = useState("");
    const [otherAllowance, setOtherAllowance] = useState("");


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
                            {/* Salary Amount */}
                            <div>
                                <label className={labelClass}>Salary Amount *</label>
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

                            {/* Allowance Dropdown */}
                            <div>
                                <label className={labelClass}>Allowance Type</label>
                                <select
                                    value={allowance}
                                    onChange={(e) => setAllowance(e.target.value)}
                                    className="Input-Field"
                                >
                                    <option value="">Select allowance</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Mobile Allowance">Mobile Allowance</option>
                                    <option value="Internet Allowance">Internet Allowance</option>
                                    <option value="Others">Others</option>
                                </select>
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