import React, { useState } from 'react'
import { typeOptions } from '../../Constant/FilterData';
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Search, ShieldCheck } from 'lucide-react';
import MobileResponsiveFilter from './MobileResponsiveFilter';


const Filter = ({ passType, setPassType, filterHandler, selectedDate, setSelectedDate, productData, handleDateSelect }) => {

  const [openDropdown, setOpenDropdown] = useState(null)

  // calender filter
  const [calendarDate, setCalendarDate] = useState(new Date());
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);
  const formatDate = (day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  // date calender 
  const availableDates = productData?.map(item => item.gatepass_date?.slice(0, 10)).filter(Boolean);


  return (
    <>


      <div className="hidden lg:grid grid-cols-4 lg:w-[75%] gap-3 p-4 sm:flex-row sm:items-center">

        {/* search */}
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
            focus:border-[#3C86AC] focus:ring-4 focus:ring-[#3C86AC]/10"
          />
        </div>

        {/* type  */}
        <div className="relative w-full sm:w-52">

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
              {typeOptions.find((option) => option.value === passType)?.label || "Type"}
            </span>

            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-200 ${openDropdown === "type" ? "rotate-180" : ""
                }`}
            />
          </button>

          {openDropdown === "type" && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setOpenDropdown(null)}
              />

              <div className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-xl
                 border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/60">

                {typeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center justify-between
                    rounded-lg px-3 py-2.5 text-sm transition ${passType === option.value
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
        </div>


        {/* date  calender*/}
        <div className="relative w-full sm:w-52">
          <button
            type="button"
            onClick={() => setOpenDropdown(prev => prev === "calendar" ? null : "calendar")}
            className="flex w-full items-center justify-between rounded border border-gray-200
             bg-gradient-to-b from-white to-[#F3F7FA] px-4 py-2.5 text-sm font-medium text-gray-700 
             shadow-sm hover:border-[#9ABDD2] cursor-pointer">

            <span className="flex items-center gap-2 max-w-36 truncate">
              <CalendarDays size={17} className="text-[#3C86AC]" />
              Select Dates
            </span>
            <ChevronDown size={16} />
          </button>

          {openDropdown === "calendar" && (
            <div className="absolute left-0 z-50 mt-2 w-full rounded-xl border border-[#D9E5EC] bg-white p-3 shadow-xl">

              {/* Month Navigation */}
              <div className="mb-3 flex items-center justify-between">
                <button
                  onClick={() => setCalendarDate(new Date(year, month - 1, 1))}
                  className="rounded-lg p-1.5 text-[#144667] hover:bg-[#EAF2F8]"
                >
                  <ChevronLeft size={17} />
                </button>

                <p className="text-sm font-bold text-[#144667]">
                  {calendarDate.toLocaleString("en-IN", {
                    month: "long",
                    year: "numeric"
                  })}
                </p>

                <button
                  onClick={() => setCalendarDate(new Date(year, month + 1, 1))}
                  className="rounded-lg p-1.5 text-[#144667] hover:bg-[#EAF2F8]"
                >
                  <ChevronRight size={17} />
                </button>
              </div>

              {/* Week Days */}
              <div className="mb-2 grid grid-cols-7 text-center text-xs font-semibold text-[#3C86AC]">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                  <span key={day}>{day}</span>
                ))}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <span key={`empty-${i}`} />
                ))}

                {dates.map(day => {
                  const date = formatDate(day);
                  const isAvailable = availableDates.includes(date)

                  return (
                    <button
                      key={day}
                      disabled={!isAvailable}
                      onClick={() => {
                        handleDateSelect(formatDate(day))
                        // setSelectedDate(null)
                      }}
                      className={`h-7 rounded-md text-xs transition
                                ${selectedDate.includes(date)
                          ? "bg-[#144667] font-bold text-white"
                          : isAvailable
                            ? "text-gray-700 hover:bg-[#EAF2F8] font-bold hover:text-[#144667]"
                            : "cursor-not-allowed text-gray-300"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 border-t border-gray-100 pt-2">
                <button
                  onClick={() => {
                    setSelectedDate([]);
                    setOpenDropdown(null);
                  }}
                  className="w-full rounded-lg py-1.5 text-xs font-semibold text-[#144667] hover:bg-[#EAF2F8]"
                >
                  Clear Date
                </button>

                <button
                  onClick={() => setOpenDropdown(null)}
                  className="w-full rounded-lg bg-[#144667] py-2 text-xs font-semibold text-white"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>


        {/* filter btn */}
        <button className="rounded-lg bg-[#144667] px-2 py-2.5 text-sm font-semibold text-white transition
         hover:bg-[#0F3852] active:scale-95 cursor-pointer"
          onClick={filterHandler}>

          Filter
        </button>
      </div>


      {/* for mobile responsive */}
      <div className='lg:hidden'>
        <MobileResponsiveFilter />
      </div>

    </>
  )
}

export default Filter


