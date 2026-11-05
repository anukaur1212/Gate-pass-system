import React from 'react'
import { TableHeader } from '../../Constant/EmployeeData'

const EmployeeTableHeading = () => {
  return (
    <>
      <thead className="bg-[#144667]/10">
        <tr className="text-xs font-bold uppercase tracking-wide
         text-[#263746] text-center">

          {TableHeader.map((value) => {
            return (
              <th key={value.id} className="w-25 px-3 py-3">
                {value.label}
              </th>
            )
          })}

        </tr>
      </thead>
    </>
  )
}

export default EmployeeTableHeading