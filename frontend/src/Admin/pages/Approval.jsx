import React, { useEffect, useState } from 'react'
import ApprovalTable from '../../Share/Approval/ApprovalTable'
import ApprovalHeading from '../../Share/Approval/ApprovalHeading'
import ApprovalStats from '../../Share/Approval/ApprovalStats'

const Approval = () => {

  const [productData, setProductData] = useState([])

  const BASE_URL = import.meta.env.VITE_BACKEND_url

  const getGatePass = async () => {
    try {
      const response = await fetch(`${BASE_URL}/gate/getgate`);
      const result = await response.json();

      setProductData(result.data);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getGatePass()
  }, [])

  console.log(productData)

  return (
    <>

      <div className='min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315'>

        {/* Header */}
        <ApprovalHeading />

        {/* <Stats/> */}
        <ApprovalStats productData={productData} setProductData={setProductData}/>
        <ApprovalTable productData={productData} setProductData={setProductData} />



      </div>
    </>
  )
}

export default Approval