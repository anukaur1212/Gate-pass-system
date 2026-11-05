import React from 'react'
import { products } from '../../Constant/ProductData'
import { ClipboardList, Package, RotateCcw } from 'lucide-react'

const Stats = () => {
  return (
   <>
   
       <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {/* Total Gate Passes */}
        <div className="group relative overflow-hidden rounded-2xl border border-[#dce9dd]
         bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#245b3e]/10">

          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 
          rounded-full bg-[#154d69]/10 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Gate Passes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary)]">
                {products.length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                All registered gate passes
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl 
            bg-gradient-to-r from-[#144667] via-[#1E648C] to-[#154d69] text-white shadow-md 
            shadow-[#245b3e]/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <ClipboardList size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#154d69] transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Returnable */}
        <div className="group relative overflow-hidden rounded-2xl border border-blue-100
         bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
         hover:shadow-blue-500/10">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7
           rounded-full bg-[#154d69]/10 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Returnable (RGP)
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary)]">
                {products.filter((p) => p.type === "RGP").length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                Items expected to return
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl 
             bg-gradient-to-r from-[#144667] via-[#1E648C] to-[#154d69] text-white shadow-md 
            shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 
            group-hover:scale-110">
              <RotateCcw size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#154d69] transition-all 
          duration-500 group-hover:w-full" />
        </div>

        {/* Non-Returnable */}
        <div className="group relative overflow-hidden rounded-2xl border border-[#154d69]/10
         bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 
          hover:shadow-lg hover:shadow-blue-500/10">

          <div className="absolute right-0 top-0 h-24 w-24 translate-x-7 -translate-y-7 
          rounded-full bg-[#154d69]/10 transition-transform duration-500 group-hover:scale-150" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Non-Returnable (NRGP)
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--primary)]">
                {products.filter((p) => p.type === "NRGP").length}
              </h2>
              <p className="mt-2 text-xs text-gray-400">
                Items not expected to return
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl
            bg-gradient-to-r from-[#144667] via-[#1E648C] to-[#154d69] text-white shadow-md 
             shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6
              group-hover:scale-110">
              <Package size={25} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#154d69] transition-all
           duration-500 group-hover:w-full" />
        </div>

      </div>
   
   </>
  )
}

export default Stats