import React, { useState } from 'react'
import { typeOptions } from '../../Constant/FilterData';
import { dateOptions } from '../../Constant/FilterData';
import { CalendarDays, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import MobileResponsiveFilter from './MobileResponsiveFilter';


const Filter = () => {

  const [passType, setPassType] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null)


  return (
    <>

      <div className="hidden lg:grid grid-cols-3 lg:w-[60%] gap-3 p-4 
      sm:flex-row sm:items-center">

        <div className="relative w-full sm:max-w-sm">
          <Search
            size={18}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            placeholder="Search product"
            className="w-full rounded-xl border border-gray-200 bg-white px-7.5 py-2.5
               text-sm font-medium text-gray-700 shadow-sm outline-none transition
                focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10"
          />
        </div>

        <div className="relative w-full sm:w-52">

          {/* Dropdown Trigger */}
          <button
            type="button"
            onClick={() =>
              setOpenDropdown((prev) => prev === "type" ? null : "type")
            }
            className="flex w-full items-center justify-between rounded border border-gray-200 
            bg-gradient-to-b from-white to-[#f8fbf7] px-4 py-2.5 text-sm font-medium text-gray-700
             shadow-sm transition hover:border-[#a8c5ab] hover:shadow-md focus:border-[#56805d] 
             focus:ring-2 focus:ring-[#56805d]/10 cursor-pointer">

            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#56805d]" />
              {typeOptions.find((option) => option.value === passType)?.label || "Type"}
            </span>

            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform 
                duration-200 ${openDropdown === "type" ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Dropdown Options */}
          {openDropdown === "type" && (

            <>
              <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)} />

              <div className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-xl border
             border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/60">

                <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Filter by type
                </p>

                {typeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center justify-between
                     rounded-lg px-3 py-2.5 text-sm transition ${passType === option.value
                        ? "bg-[#f0f7ef] font-semibold text-[#245b3e]"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}>

                    <span>{option.label}</span>

                    <input
                      type="checkbox"
                      checked={passType === option.value}
                      onChange={() => {
                        setPassType(option.value);
                        setOpenDropdown(null);
                      }}
                      className="h-4 w-4 cursor-pointer accent-[#245b3e]"
                    />

                  </label>
                ))}
              </div>

            </>
          )}
        </div>

        <div className="relative w-full sm:w-52">
          {/* Dropdown Trigger */}
          <button
            type="button"
            onClick={() =>
              setOpenDropdown((prev) => prev === "date" ? null : "date")
            }
            className="flex w-full rounded items-center justify-between
             border border-gray-200 bg-gradient-to-b from-white to-[#f8fbf7] 
             px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition
              hover:border-[#a8c5ab] hover:shadow-md focus:border-[#56805d] 
              focus:ring-2 focus:ring-[#56805d]/10 cursor-pointer">

            <span className="flex items-center gap-2">
              <CalendarDays size={17} className="text-[#56805d]" />
              {dateOptions.find((option) => option.value === dateFilter)?.label || "Date"}
            </span>

            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform ${openDropdown === "date" ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Dropdown Options */}
          {openDropdown === "date" && (
            <>

              <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)} />

              <div className="absolute right-0 z-50 mt-2 w-full overflow-hidden 
              rounded-xl border border-gray-100 bg-white p-2 shadow-xl 
              shadow-gray-200/60">

                <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Filter by date
                </p>

                {dateOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex w-full cursor-pointer items-center justify-between
                     rounded-lg px-3 py-2.5 text-sm transition ${dateFilter === option.value
                        ? "bg-[#f0f7ef] font-semibold text-[#245b3e]"
                        : "text-gray-600 hover:bg-gray-50"
                      }`}>

                    <span>{option.label}</span>

                    <input
                      type="checkbox"
                      checked={dateFilter === option.value}
                      onChange={() => {
                        setDateFilter(option.value);
                        setOpenDropdown(null);
                      }}
                      className="h-4 w-4 cursor-pointer accent-[#245b3e]"
                    />

                  </label>
                ))}
              </div>
            </>
          )}
        </div>

      </div>

      {/* for mobile responsive */}
      <div className='lg:hidden'>
        <MobileResponsiveFilter />
      </div>

    </>
  )
}

export default Filter