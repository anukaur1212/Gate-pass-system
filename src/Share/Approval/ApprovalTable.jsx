import { products } from '../Constant/ProductData'
import ApprovalTableHeading from './ApprovalTableHeading'
import ApprovalTableBody from './ApprovalTableBody'
import Filter from '../Report/Components/Filter'
import StatusModal from '../Report/Modal/StatusModal'
import EyeModal from '../Report/Modal/EyeModal'
import { useState } from 'react'

const ApprovalTable = ({ productData, setProductData }) => {

    const [showApproval, setShowApproval] = useState(false);
      const [FilteredData, setFilteredData] = useState([]);
     const [passType, setPassType] = useState("all");
    
    const [dateFilter, setdateFilter] = useState("all");
    const [selectedDate, setSelectedDate] = useState([]);

    // for seperate eye model
    const [selectedProduct, setSelectedProduct] = useState(null);

    // for seperate status model 
    const [product, setProduct] = useState(null)

     const BASE_URL = import.meta.env.VITE_BACKEND_url

    const updateStatus = async(status) => {
        try {
            const response = await fetch(`${BASE_URL}/gate/updatestatus/${product?.id}`,
                {
                    method:"PATCH",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({status})
                }
            )

            if(!response.ok)
                throw new Error("Status updation failed");

            setProductData(prev => prev.map(item => item.id === product.id
                ? { ...item, status }
                : item))

            setShowApproval(false);
            setSelectedProduct(null);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleApproval = (product) => {
        setProduct(product)
        setShowApproval(true);
    };



    // filtering table
    const filterHandler = () => {
        const filterdata = productData.filter(item => {

            // type filter
            const typeMatch =
                passType === "all" || item.type === passType;

            //  date filter 
            // const dateMatch = !selectedDate || item.gatepass_date === selectedDate
            const dateMatch = selectedDate.length === 0 ||
                selectedDate.includes(item.gatepass_date);

            return typeMatch && dateMatch
        });

        setFilteredData(filterdata);
    };


    // handle calender buttons
    const handleDateSelect = (date) => {
        const clickedDay = Number(date.slice(-2));

        const start = selectedDate.length
            ? Math.min(...selectedDate.map(d => Number(d.slice(-2))), clickedDay)
            : clickedDay;

        const end = selectedDate.length
            ? Math.max(...selectedDate.map(d => Number(d.slice(-2))), clickedDay)
            : clickedDay;

        setSelectedDate(
            Array.from({ length: end - start + 1 }, (_, i) =>
                `${date.slice(0, 8)}${String(start + i).padStart(2, "0")}`
            )
        );
    };


    return (
        <>
            <div className="min-h-120 overflow-hidden rounded-2xl border border-[#dce9dd] bg-white
             shadow-md shadow-[#245b3e]/5 transition-shadow duration-300 hover:shadow-lg 
             hover:shadow-[#245b3e]/10">


                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border min-h-120
                 border-[#e0ebe0] bg-white shadow-sm">

                    {/* Search and Actions */}
                    <Filter passType={passType} setPassType={setPassType}
                        filterHandler={filterHandler} productData={productData}
                        dateFilter={dateFilter} setdateFilter={setdateFilter}
                        selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                        handleDateSelect={handleDateSelect}/>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px] border-collapse text-left">

                            <ApprovalTableHeading />
                            <ApprovalTableBody productData={productData} setProductData={setProductData}
                                showApproval={showApproval} setShowApproval={setShowApproval}
                                updateStatus={updateStatus} selectedProduct={selectedProduct}
                                setSelectedProduct={setSelectedProduct} handleApproval={handleApproval} 
                                FilteredData={FilteredData} setFilteredData={setFilteredData}/>

                        </table>
                    </div>

                    {/* Modals - Outside map */}
                    <StatusModal
                        showApproval={showApproval}
                        setShowApproval={setShowApproval}
                        updateStatus={updateStatus}
                    />

                    <EyeModal
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />


                    {/* Footer */}
                    <div className="flex flex-col justify-between gap-2 border-t border-gray-100
                    px-5 py-4 text-sm text-gray-500 sm:flex-row sm:items-center">
                        {/* <p>Showing {productData.length} gate pass records</p> */}

                    </div>
                </div>

            </div>
        </>
    )
}

export default ApprovalTable