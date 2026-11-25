import React, { useState } from 'react'

const Calender = () => {

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date());

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  const formatDate = (day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  return (
    <>
      {/* calender */}
      <div className="relative w-full sm:w-52">
        <button
          type="button"
          onClick={() => setOpenDropdown(prev => prev === "calendar" ? null : "calendar")}
          className="flex w-full items-center justify-between rounded border border-gray-200
             bg-gradient-to-b from-white to-[#F3F7FA] px-4 py-2.5 text-sm font-medium text-gray-700 
             shadow-sm hover:border-[#9ABDD2] cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <CalendarDays size={17} className="text-[#3C86AC]" />
            {selectedDate || "Select Date"}
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

                return (
                  <button
                    key={day}
                    onClick={() => {
                      setSelectedDate(date);
                      setOpenDropdown(null);
                    }}
                    className={`h-7 rounded-md text-xs transition
                                ${selectedDate === date
                        ? "bg-[#144667] font-bold text-white"
                        : "text-gray-700 hover:bg-[#EAF2F8] hover:text-[#144667]"
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
                  setSelectedDate("");
                  setOpenDropdown(null);
                }}
                className="w-full rounded-lg py-1.5 text-xs font-semibold text-[#144667] hover:bg-[#EAF2F8]"
              >
                Clear Date
              </button>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default Calender