import { SaveIcon } from 'lucide-react';
import React, { useState } from 'react'

const PerformanceCertificate = () => {

    // previous month
    const previousMonth = new Date();
    previousMonth.setMonth(previousMonth.getMonth() - 1);

    const monthOptions = [
        {
            label: previousMonth.toLocaleString("en-US", { month: "long" }),
            value: previousMonth.getMonth() + 1
        }
    ];
    const [selectedMonth, setSelectedMonth] = useState(monthOptions[0].value);

    
    // pervious year
    const previousYear = new Date().getFullYear() - 1;
    const yearOptions = [
        {
            label: previousYear,
            value: previousYear
        }
    ];
    const [selectedYear, setSelectedYear] = useState("");

    return (
        <>
        <div className='flex gap-4 bg-[var(--primary-light)] px-8 py-20 rounded-xl'>
            <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3
                text-sm text-gray-700 outline-none focus:border-[#245b3e]"
            >
                <option value="">Select Month </option>

                {monthOptions.map((month) => (
                    <option key={month.value} value={month.value}>
                        {month.label}
                    </option>
                ))}
            </select>

            <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3
                text-sm text-gray-700 outline-none focus:border-[#245b3e]"
            >
                <option value="">Select Year</option>

                {yearOptions.map((year) => (
                    <option key={year.value} value={year.value}>
                        {year.label}
                    </option>
                ))}
            </select>
            </div>
        </>
    )
}

export default PerformanceCertificate