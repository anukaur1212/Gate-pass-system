import React from 'react'
import EmployeeHeader from '../../Share/Employee/Table/EmployeeHeader'
import EmployeeTableStats from '../../Share/Employee/Table/EmployeeTableStats'
import EmployeeTable from '../../Share/Employee/Table/EmployeeTable'

const Employee = () => {
  return (
   <>
   <div className='min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315'>

        <EmployeeHeader/>
        <EmployeeTableStats/>
       <EmployeeTable/>

   </div>
   </>
  )
}

export default Employee