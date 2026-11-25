import React, { useState } from 'react'
import { products } from '../../Constant/ProductData'
import { CheckCircle2, Clock3, Eye, Package, Pencil, Trash2 } from 'lucide-react'
import EyeModal from '../Modal/EyeModal';
import { getGatePass } from '../../../Admin/component/ProductForm/GatePassApi/GetApi';
import DeleteGatePass from '../Modal/DeleteGatePass';
import { useNavigate } from 'react-router-dom';

const TableBody = ({ productData, FilteredData, setProductData, setFilteredData }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null)
  const [showDeleteModel, setShowDeleteModel] = useState(false)

 const navigate = useNavigate()
  const BASE_URL = import.meta.env.VITE_BACKEND_url

  // to delete row
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/gate/deletegate/${id}`,
        { method: "DELETE" });

      const result = await response.json()

      if (result.data) {
        setProductData(prev => prev.filter(item => item.id != id));
        setFilteredData(prev => prev.filter(item => item.id != id));
      }

      console.log(result.data);

    } catch (error) {
      console.error(error.message);
    }
  }

  const getGatePassbyid =async(id)=>
  {
    try {
      const response = await fetch(`${BASE_URL}/gate/getgateid/${id}`)
      const result = await response.json()
      // console.log(result.data)
       navigate("/productform", {
        state: {
          productData: result.data,
          editId: id
        }
      });

    } catch (error) {
      console.error(error.message);
    }
  }

  // console.log(productData);

  return (
    <>

      <tbody className="divide-y divide-gray-100">
        {FilteredData.map((product) => (
          <tr
            key={product.id}
            className="group animate-[fadeIn_0.4s_ease-out_both] transition-all 
                    duration-200 hover:bg-[#edf4f8] hover:shadow-[inset_3px_0_0_#144667]">

            {/* Pass Type Badge */}
            <td className="px-4 py-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs 
                  font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 
                  hover:shadow-md ${product.status === "Approved"

                    ? "border-[#b8d5e5] bg-[#eaf3f8] text-[#144667]"
                    : "border-[#c5dce9] bg-[#f1f6f9] text-[#527d98]"
                  }`}>

                {`${product.type}-${product.pass_number}`}
              </span>
            </td>

            {/* Status Badge */}
            <td className="px-4 py-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs 
                          font-semibold transition-all duration-300 hover:-translate-y-0.5
                            ${product.status === "Approved"

                    ? "text-[#144667]"
                    : "text-[#789caf]"
                  }`}>

                {product.status === "Approved" ? (
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                ) : (
                  <Clock3 size={20} strokeWidth={2.5} />
                )}

              </span>
            </td>

            {/* Actions */}
            <td className="px-3 py-4">
              <div className="flex items-center justify-center gap-1 rounded-xl border
                       border-gray-100 bg-white p-1 shadow-sm transition-all duration-200 
                       group-hover:border-[#dce9dd]">

                <button
                  title="View details"
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-lg p-2 text-blue-600 transition-all 
                          duration-200 hover:scale-110 hover:bg-blue-50 cursor-pointer">
                  <Eye size={17} className='text-gray-700' />
                </button>

                <button onClick={()=>
                  {
                    getGatePassbyid(product.id)
                  }
                }
                  title="Edit"
                  className="rounded-lg p-2 text-[#245b3e] transition-all duration-200
                           hover:scale-110 hover:bg-green-50 active:scale-95">
                  <Pencil size={17} />
                </button>

                <button onClick={() => {
                  setDeleteId(product.id)
                  setShowDeleteModel(true)
                }}

                  title="Delete"
                  className="rounded-lg p-2 text-red-500 transition-all duration-200 
                          hover:scale-110 hover:bg-red-50 active:scale-95 cursor-pointer">
                  <Trash2 size={17} />
                </button>
              </div>
            </td>

            <td className=" px-2 text-center">
              <p className="font-semibold text-gray-800">
                {product.product}
              </p>
            </td>

            <td className=" px-4 text-sm text-gray-700">
              {product.quantity}
            </td>

            <td className="px-4 text-sm font-semibold text-gray-800">
              ₹{product.est_price?.toLocaleString("en-IN")}
            </td>

            <td className="text-sm font-medium text-gray-700">
              {product.organization}
            </td>

            <td className="px-4 text-[15px] text-gray-700">
              {product.person_name}
            </td>

            <td className="px-3">
              <p className="text-sm text-gray-700">
                {product.email}
              </p>
              <p className="mt-1 text-[15px] text-gray-700">
                {product.contact}
              </p>
            </td>

            <td className="px-4 py-4 text-sm text-gray-600/80 italic">
              {product.type === "rgp" && product.expt_return
                ? (new Date(product.expt_return).toISOString().split("T")[0])
                : "not applicable"}
            </td>

          </tr>
        ))}

        {/* eye tooltip */}
        <EyeModal selectedProduct={selectedProduct} productData={productData}
          setSelectedProduct={setSelectedProduct} />

        {/* delete model */}
        <DeleteGatePass showDeleteModel={showDeleteModel} setShowDeleteModel={setShowDeleteModel}
          deleteId={deleteId} setDeleteId={setDeleteId} handleDelete={handleDelete} />

      </tbody>

    </>
  )
}

export default TableBody