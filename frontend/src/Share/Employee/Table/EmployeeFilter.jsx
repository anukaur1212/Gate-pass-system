import React, { useState } from 'react'
import { CalendarDays, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import { typeOptions } from '../../Constant/FilterData';
import { EmpDropDownData } from '../../Constant/EmployeeData';

const EmployeeFilter = () => {

     const [openDropdown, setOpenDropdown] = useState(null);
     
       const [passType, setPassType] = useState("");
  return (
    <>
    
    <div className="hidden lg:grid grid-cols-3 lg:w-[60%] gap-3 p-4 sm:flex-row sm:items-center">

  <div className="relative w-full sm:max-w-sm">
    <Search
      size={18}
      className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="search"
      placeholder="Search Employee"
      className="w-full rounded-xl border border-gray-200 bg-white px-7.5 py-2.5
        text-sm font-medium text-gray-700 shadow-sm outline-none transition
        focus:border-[#3C86AC] focus:ring-4 focus:ring-[#3C86AC]/10"
    />
  </div>

  {/* <div className="relative w-full sm:w-52">

    <button
      type="button"
      onClick={() =>
        setOpenDropdown((prev) => prev === "type" ? null : "type")
      }
      className="flex w-full items-center justify-between rounded border border-gray-200
        bg-gradient-to-b from-white to-[#F3F7FA] px-4 py-2.5 text-sm font-medium
        text-gray-700 shadow-sm transition hover:border-[#9ABDD2] hover:shadow-md
        focus:border-[#3C86AC] focus:ring-2 focus:ring-[#3C86AC]/10 cursor-pointer"
    >
      <span className="flex items-center gap-2">
        <ShieldCheck size={17} className="text-[#3C86AC]" />
        {typeOptions.find((option) => option.value === passType)?.label || "Designation"}
      </span>

      <ChevronDown
        size={16}
        className={`text-gray-400 transition-transform duration-200 ${
          openDropdown === "type" ? "rotate-180" : ""
        }`}
      />
    </button>

    {openDropdown === "type" && (
      <>
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />

        <div className="absolute right-0 z-50 h-40 overflow-y-scroll mt-2 w-full overflow-hidden rounded-xl
          border border-gray-100 bg-white px-2 py-3 shadow-xl shadow-gray-200/60">

          {EmpDropDownData[0].options?.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-between
                rounded-lg px-3 py-2.5 text-sm transition ${
                passType === option.value
                  ? "bg-[#EAF2F8] font-semibold text-[#144667]"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{option.label}</span>

              <input
                type="checkbox"
                checked={passType === option.value}
                onChange={() => {
                  setPassType(option.value);
                  setOpenDropdown(null);
                }}
                className="h-4 w-4 cursor-pointer accent-[#144667]"
              />
            </label>
          ))}
        </div>
      </>
    )}
  </div> */}

</div>

    </>
  )
}

export default EmployeeFilter