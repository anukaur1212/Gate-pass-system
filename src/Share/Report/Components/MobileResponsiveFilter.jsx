import { ChevronDown, Filter, Search } from 'lucide-react'
import React, { useState } from 'react'
import FilterModal from '../Modal/FilterModal';

const MobileResponsiveFilter = () => {

    const [showFilter, setShowFilter] = useState(false);

    return (
        <>
            <div className="grid grid-cols-2 lg:w-[60%] gap-3 p-4 sm:flex-row sm:items-center">

                <div className="relative w-full sm:max-w-sm">
                    <Search
                        size={18}
                        className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="search"
                        placeholder="     Search"
                        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5
                        text-sm font-medium text-gray-700 shadow-sm outline-none transition
                        focus:border-[#56805d] focus:ring-4 focus:ring-[#56805d]/10"
                    />
                </div>

                <div className="relative w-full sm:w-52">

                    {/* Dropdown Trigger */}
                    <button
                        type="button"
                        onClick={() => setShowFilter(!showFilter)}
                        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gradient-to-b
                         from-white to-[#f8fbf7] px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm 
                         transition hover:border-[#a8c5ab] hover:shadow-md">
                            
                        <Filter size={17} className="text-[#56805d]" />
                        Filter
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${showFilter ? "rotate-180" : ""}`}
                        />
                    </button>

                    {/* filter modal */}
                    <FilterModal setShowFilter={setShowFilter} showFilter={showFilter} />


                </div>


            </div>
        </>
    )
}

export default MobileResponsiveFilter