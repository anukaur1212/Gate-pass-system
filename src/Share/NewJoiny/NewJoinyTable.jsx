import React from 'react'
import NewJoinyTableBody from './NewJoinyTableBody'
import EmployeeTableHeading from '../Employee/Table/EmployeeTableHeading'
import { employees } from '../Constant/EmployeeData'

const NewJoinyTable = () => {
  return (
   <>
   
       <div className="overflow-hidden rounded-2xl border border-[#dce9dd] bg-white
             shadow-md shadow-[#245b3e]/5 transition-shadow duration-300 hover:shadow-lg 
             hover:shadow-[#245b3e]/10">


                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border 
                 border-[#e0ebe0] bg-white shadow-sm">

                    {/* Search and Actions */}
                   

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px] border-collapse text-left">

                          <EmployeeTableHeading/>
                          <NewJoinyTableBody/>

                        </table>
                    </div>


                    {/* Footer */}
                    <div className="flex flex-col justify-between gap-2 border-t border-gray-100
                    px-5 py-4 text-sm text-gray-500 sm:flex-row sm:items-center">
                        <p>Showing {employees.length} Employees Records</p>

                    </div>
                </div>

            </div>

   </>
  )
}

export default NewJoinyTable