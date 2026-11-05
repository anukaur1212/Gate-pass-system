import Heading from "../../Share/Report/Components/Heading";
import Stats from "../../Share/Report/Components/Stats";
import Table from "../../Share/Report/Components/Table";


const Report = () => {

  return (
    <div className="min-h-screen bg-[#f5f7f4] 
    p-4 sm:p-6 lg:absolute lg:left-65 lg:top-20 lg:w-315">

      {/* Header */}
     <Heading/>

      <Stats/>
      {/* Table Card */}
      <Table/>
   
    </div>
  );
};

export default Report;