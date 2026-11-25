import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { EmpDropDownData } from '../../Constant/EmployeeData';
import { Search } from 'lucide-react';

const DesignationModal = ({ openDropdown, setOpenDropdown }) => {
    const [passType, setPassType] = useState({});

    return (
        <>
            {openDropdown !== null &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center
                       bg-black/30 backdrop-blur-sm p-4"
                    // onClick={() => setOpenDropdown(null)}
                    >
                        <div
                            className="w-full max-w-md rounded-2xl bg-white p-6
                       shadow-2xl animate-[fadeIn_0.3s_ease-out]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="mb-2 text-lg font-bold text-[#144667]">
                                Select Employee Designation
                            </h2>

                            <div className="relative w-full sm:max-w-sm">
                                <Search
                                    size={18}
                                    className="absolute top-1/3 left-2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="search"
                                    placeholder="Search Designation"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-7.5 py-2.5
                                    text-sm font-medium text-gray-700 shadow-sm outline-none transition
                                    focus:border-[#3C86AC] focus:ring-4 focus:ring-[#3C86AC]/10"
                                />

                                <br /><br />
                            </div>

                            <div className="space-y-2 h-70 overflow-y-scroll">
                                {EmpDropDownData[0].options?.map((option) => (
                                    <label
                                        key={option.value}
                                        className={`flex cursor-pointer items-center
                                        justify-between rounded-xl border p-3
                                        transition-all ${passType[openDropdown] === option.value
                                                ? "border-[#144667] bg-[#EAF2F8] text-[#144667]"
                                                : "border-gray-200 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-sm font-medium">
                                            {option.label}
                                        </span>

                                        <input
                                            // type="radio"
                                            name="employeeType"
                                            checked={
                                                passType[openDropdown] === option.value
                                            }
                                            onChange={() => {
                                                setPassType(prev => ({
                                                    ...prev,
                                                    [openDropdown]: option.value
                                                }));
                                                setOpenDropdown(null);
                                            }}
                                            className="h-4 w-4 accent-[#144667]"
                                        />
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setOpenDropdown(null)}
                                className="mt-5 w-full rounded-xl bg-[#144667]
                                py-2.5 text-sm font-semibold text-white
                                hover:bg-[#3C86AC]"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default DesignationModal