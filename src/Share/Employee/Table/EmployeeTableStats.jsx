import React from 'react'
import { UserCheck2Icon, UsersRound, UserX2 } from 'lucide-react'
import { employees } from '../../Constant/EmployeeData'
import { stats } from '../../Constant/Stats'

const EmployeeTableStats = () => {

  return (
    <>

      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-4">

        {/* Employee stats */}
        {stats.map((item) => {

          const count = item.status === "All"
            ? employees.length
            : employees.filter((p) => p.status === item.status).length;

          return (
            <div key={item.label}
              className={`group relative overflow-hidden rounded-2xl border border-[#dce9dd]
           bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 
            hover:shadow-lg cursor-pointer
            ${item.status === "Active"
                  ? "hover:shadow-green-500/10"
                  : item.status === "Inactive"
                  ? "hover:shadow-red-500/10"
                  : item.status === "On Leave"
                  ? "hover:shadow-yellow-500/10"
                  : "hover:shadow-[#245b3e]/10"

            }`} >

              <div className="absolute right-0 top-0 h-14 w-14 translate-x-7 
               -translate-y-7 rounded-full bg-[#245b3e]/5 transition-transform 
               duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <h2 className={` mt-3 text-3xl font-bold tracking-tight text ${item.color}`}>
                    {count}
                  </h2>
                </div>

                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl 
                bg-gradient-to-br ${item.gradient} text-white shadow-md 
                shadow-[#245b3e]/20 transition-transform duration-300
                group-hover:rotate-6 group-hover:scale-110 `}>
                  <item.logo size={25} />
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 h-1 w-0 ${item.bar}
             transition-all duration-500 group-hover:w-full `} />
            </div>
          )
        })}

      </div>

    </>
  )
}

export default EmployeeTableStats