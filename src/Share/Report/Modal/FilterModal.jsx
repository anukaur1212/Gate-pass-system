import { CalendarDays, ChevronDown, ShieldCheck, X, Check } from 'lucide-react';
import React, { useState } from 'react'
import { typeOptions } from '../../Constant/FilterData';
import { dateOptions } from '../../Constant/FilterData';


const FilterModal = ({ setShowFilter, showFilter }) => {

    const [passType, setPassType] = useState("");
    const [dateFilter, setDateFilter] = useState("")
    const [openDropdown, setOpenDropdown] = useState("")
    return (
        <>
            {showFilter && (
                <div
                    className="fixed inset-0 z-[150] flex items-end justify-center bg-black/40 backdrop-blur-sm
                     sm:items-center"

                    onClick={() => setShowFilter(false)}>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md animate-slide-up rounded-t-3xl border border-green-100
                         bg-white p-6 shadow-2xl sm:rounded-2xl">

                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-[#245b3e]">
                                    Filter Requests
                                </h2>
                                <p className="mt-1 text-xs text-gray-500">
                                    Customize your gate pass results
                                </p>
                            </div>

                            <button
                                onClick={() => setShowFilter(false)}
                                className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        {/* Type Filter */}
                        {/* <div className="mb-5">
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <ShieldCheck size={17} className="text-[#56805d]" />
                                Pass Type
                            </label>

                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === "type" ? null : "type")
                                    }
                                    className="flex w-full items-center justify-between rounded-xl border border-gray-200
                                     bg-[#f8fbf7] px-4 py-3 text-sm outline-none focus:border-[#56805d]">
                                    {typeOptions.find(option => option.value === passType)?.label}
                                    <ChevronDown
                                        size={17}
                                        className={`transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openDropdown === "type" && (
                                    <div className="absolute bottom-full z-[200] mb-2 p-2
                                     max-h-44 w-full overflow-y-auto rounded-xl border
                                      border-gray-200 bg-white shadow-xl hover:bg-green-500/10">
                                        {typeOptions.map(option => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setPassType(option.value);
                                                    setOpenDropdown(null);
                                                }}
                                                className={`w-full px-4 py-3 text-left text-sm transition hover:bg-[#f0f6ef]
                                              ${passType === option.value ? "bg-[#e9f2e8] font-semibold text-[#245b3e]" : "text-gray-700"}`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div> */}

                        {/* Pass Type Filter */}
                        <div className="mb-5">
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e9f2e8] text-[#56805d]">
                                    <ShieldCheck size={16} />
                                </span>
                                Filter by Pass Type
                            </label>

                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === "type" ? null : "type")
                                    }
                                    aria-expanded={openDropdown === "type"}
                                    className={`group flex w-full items-center justify-between rounded-xl border bg-gradient-to-b from-white to-[#f8fbf7] px-4 py-3.5 text-left shadow-sm transition-all duration-200 hover:border-[#a8c5ab] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#56805d]/10 ${openDropdown === "type"
                                        ? "border-[#56805d] ring-4 ring-[#56805d]/10"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <ShieldCheck size={18} className="shrink-0 text-[#56805d]" />

                                        <span
                                            className={`truncate text-sm ${passType === "all"
                                                ? "font-normal text-gray-400"
                                                : "font-semibold text-[#245b3e]"
                                                }`}
                                        >
                                            {passType === "all"
                                                ? "Select pass type..."
                                                : typeOptions.find(option => option.value === passType)?.label}
                                        </span>
                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className={`shrink-0 text-gray-400 transition-transform duration-300 group-hover:text-[#56805d] ${openDropdown === "type" ? "rotate-180 text-[#56805d]" : ""
                                            }`}
                                    />
                                </button>

                                {openDropdown === "type" && (
                                    <div className="absolute bottom-full z-[200] mb-2 max-h-48 w-full overflow-y-auto rounded-xl border border-[#dce9dd] bg-white p-1.5 shadow-xl shadow-green-950/10">
                                        <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
                                            Choose pass type
                                        </p>

                                        {typeOptions.map(option => {
                                            const isSelected = passType === option.value;

                                            return (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setPassType(option.value);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-all duration-200 ${isSelected
                                                        ? "bg-[#e9f2e8] font-semibold text-[#245b3e]"
                                                        : "text-gray-600 hover:bg-[#f5f8f4] hover:text-[#245b3e]"
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <ShieldCheck
                                                            size={15}
                                                            className={isSelected ? "text-[#56805d]" : "text-gray-400"}
                                                        />
                                                        {option.label}
                                                    </span>

                                                    {isSelected && (
                                                        <Check size={16} className="text-[#56805d]" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>


                        </div>



                        {/* Date Filter */}
                        {/* <div className="mb-6">
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <CalendarDays size={17} className="text-[#56805d]" />
                                Date
                            </label>

                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === "date" ? null : "date")
                                    }
                                    className="flex w-full items-center justify-between rounded-xl border border-gray-200
                                     bg-[#f8fbf7] px-4 py-3 text-sm outline-none focus:border-[#56805d]"
                                >
                                    {dateOptions.find(option => option.value === dateFilter)?.label}
                                    <ChevronDown
                                        size={17}
                                        className={`transition-transform ${openDropdown === "date" ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openDropdown === "date" && (
                                    <div className="absolute bottom-full z-[200] mb-2 p-2 max-h-45 w-full overflow-y-auto
                                     rounded-xl border border-gray-200 bg-white shadow-xl">
                                        {dateOptions.map(option => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setDateFilter(option.value);
                                                    setOpenDropdown(null);
                                                }}
                                                className={`w-full px-4 py-3 text-left text-sm transition hover:bg-[#f0f6ef]
                                                ${dateFilter === option.value ? "bg-[#e9f2e8] font-semibold text-[#245b3e]" : "text-gray-700"}`}>
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div> */}

                        {/* Date Filter */}
                        <div className="mb-6">
                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e9f2e8] text-[#56805d]">
                                    <CalendarDays size={16} />
                                </span>
                                Filter by Date
                            </label>

                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === "date" ? null : "date")
                                    }
                                    aria-expanded={openDropdown === "date"}
                                    className={`group flex w-full items-center justify-between rounded-xl border bg-gradient-to-b from-white to-[#f8fbf7] px-4 py-3.5 text-left shadow-sm transition-all duration-200 hover:border-[#a8c5ab] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#56805d]/10 ${openDropdown === "date"
                                        ? "border-[#56805d] ring-4 ring-[#56805d]/10"
                                        : "border-gray-200"
                                        }`}>

                                    <span className="flex min-w-0 items-center gap-3">
                                        <CalendarDays
                                            size={18}
                                            className="shrink-0 text-[#56805d]"
                                        />

                                        <span
                                            className={`truncate text-sm ${dateFilter === "all"
                                                ? "font-normal text-gray-400"
                                                : "font-semibold text-[#245b3e]"
                                                }`}>
                                                    
                                            {dateFilter === "all"
                                                ? "Select a date range..."
                                                : dateOptions.find(option => option.value === dateFilter)?.label}
                                        </span>
                                    </span>

                                    <ChevronDown
                                        size={18}
                                        className={`shrink-0 text-gray-400 transition-transform duration-300 group-hover:text-[#56805d] ${openDropdown === "date" ? "rotate-180 text-[#56805d]" : ""
                                            }`}
                                    />
                                </button>

                                {openDropdown === "date" && (
                                    <div className="absolute bottom-full z-[200] mb-2 max-h-48 w-full overflow-y-auto rounded-xl border border-[#dce9dd] bg-white p-1.5 shadow-xl shadow-green-950/10 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                        <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">
                                            Choose date range
                                        </p>

                                        {dateOptions.map((option) => {
                                            const isSelected = dateFilter === option.value;

                                            return (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setDateFilter(option.value);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-all duration-200 ${isSelected
                                                        ? "bg-[#e9f2e8] font-semibold text-[#245b3e]"
                                                        : "text-gray-600 hover:bg-[#f5f8f4] hover:text-[#245b3e]"
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <CalendarDays
                                                            size={15}
                                                            className={isSelected ? "text-[#56805d]" : "text-gray-400"}
                                                        />
                                                        {option.label}
                                                    </span>

                                                    {isSelected && (
                                                        <Check size={16} className="text-[#56805d]" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                        </div>





                        {/* Footer Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setPassType("all");
                                    setDateFilter("all");
                                }}
                                className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold
                                 text-gray-600 transition hover:bg-gray-50">

                                Reset
                            </button>

                            <button
                                onClick={() => setShowFilter(false)}
                                className="flex-1 rounded-xl bg-[#245b3e] py-3 text-sm font-semibold
                                 text-white shadow-md transition hover:bg-[#19452e]">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FilterModal

