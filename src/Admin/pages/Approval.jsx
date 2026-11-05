import React from 'react'
import ApprovalTable from '../../Share/Approval/ApprovalTable'
import Heading from '../../Share/Report/Components/Heading'
import Stats from '../../Share/Report/Components/Stats'
import Table from '../../Share/Report/Components/Table'
import ApprovalHeading from '../../Share/Approval/ApprovalHeading'
import ApprovalStats from '../../Share/Approval/ApprovalStats'

const Approval = () => {
  return (
   <>
   
   <div className='min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315'>

      {/* Header */}
   <ApprovalHeading/>

      {/* <Stats/> */}
    <ApprovalStats/>
    <ApprovalTable/>
   


   </div>
   </>
  )
}

export default Approval