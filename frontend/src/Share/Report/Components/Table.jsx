import { products } from '../../Constant/ProductData';
import Filter from './Filter';
import TableHeading from './TableHeading';
import TableBody from './TableBody';
import { useState, useEffect } from 'react';
import { dateOptions } from '../../Constant/FilterData';

const Table = ({productData,setProductData,FilteredData,setFilteredData}) => {

    
    const [passType, setPassType] = useState("all");
    
    const [dateFilter, setdateFilter] = useState("all");
    const [selectedDate, setSelectedDate] = useState([]);

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
                <div className="overflow-hidden rounded-2xl min-h-120 border 
                 border-[#e0ebe0] bg-white shadow-sm">

                    {/* Search and Actions */}
                    <Filter passType={passType} setPassType={setPassType}
                        filterHandler={filterHandler} productData={productData}
                        dateFilter={dateFilter} setdateFilter={setdateFilter}
                        selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                        handleDateSelect={handleDateSelect} />

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px] border-collapse text-left">

                            <TableHeading />
                            <TableBody productData={productData} FilteredData={FilteredData}
                               setFilteredData={setFilteredData} setProductData={setProductData} 
                               />

                        </table>
                    </div>


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

export default Table