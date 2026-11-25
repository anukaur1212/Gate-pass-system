import { Search } from 'lucide-react'
import React from 'react'

const VisitorFilter = () => {
    return (
        <>
            <div className="grid grid-cols-2 lg:w-[40%] gap-3 p-4 sm:flex-row sm:items-center">

                <div className="relative w-full sm:max-w-sm">
                    <Search
                        size={18}
                        className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="search"
                        placeholder="Search Name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-7 py-2.5
               text-sm font-medium text-gray-700 shadow-sm outline-none transition
                focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10"
                    />
                </div>
            </div>
        </>
    )
}

export default VisitorFilter