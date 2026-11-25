import React from 'react'
import HeaderSection from '../../Share/VisitorEntry/HeaderSection'
import VisitorEntryTable from '../../Share/VisitorEntry/VisitorEntryTable'

const VisitorEntry = () => {
  return (
   <>
   
   <div className="min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315">

        <HeaderSection/>
        <VisitorEntryTable/>

   </div>

   </>
  )
}

export default VisitorEntry