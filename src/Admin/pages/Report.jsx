import { useEffect, useState } from "react";
import Heading from "../../Share/Report/Components/Heading";
import Stats from "../../Share/Report/Components/Stats";
import Table from "../../Share/Report/Components/Table";


const Report = () => {

  const [productData, setProductData] = useState([]); 
  const [FilteredData, setFilteredData] = useState([]);

   const BASE_URL = import.meta.env.VITE_BACKEND_url

    const getGatePass = async (type) => {
        try {
            const response = await fetch(`${BASE_URL}/gate/getgate`);
            const result = await response.json();

            const prefix = type?.toLowerCase() === "rgp" ? "RGP" : "NRGP";

            const previousNumbers = result.data
                .filter(item => item.type?.toLowerCase() === type?.toLowerCase())
                .map(item => Number(item.pass_number) || 0);

            const nextNumber = Math.max(0, ...previousNumbers) + 1;

            setProductData(result.data);
            setFilteredData(result.data);

            return `${prefix}-${nextNumber}`;
        }
        catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getGatePass()
    }, [])

  return (
    <div className="min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315">

      {/* Header */}
     <Heading/>

      <Stats productData={productData} setProductData={setProductData}/>
      {/* Table Card */}
      <Table productData={productData} setProductData={setProductData}
      FilteredData={FilteredData} setFilteredData={setFilteredData} />
   
    </div>
  );
};

export default Report;