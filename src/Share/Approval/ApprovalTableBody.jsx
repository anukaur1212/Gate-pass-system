import React, { useState } from 'react'
import { CheckCircle2, Clock3, Eye, Package, Pencil, Trash2 } from 'lucide-react'
import { products } from '../Constant/ProductData';
import EyeModal from '../Report/Modal/EyeModal';
import StatusModal from '../Report/Modal/StatusModal';

const ApprovalTableBody = ({ productData,handleApproval,setSelectedProduct,setFilteredData,FilteredData}) => {
   
    // const [selectedStatus, setselectedStatus] = useState(null)

   


    return (
        <>
            <tbody className="divide-y divide-gray-100">

                {FilteredData.map((product) => (
                    <React.Fragment key={product.id}>

                        <tr
                            className="group animate-[fadeIn_0.4s_ease-out_both] transition-all
                         duration-200 hover:bg-[#edf4f8] hover:shadow-[inset_3px_0_0_#144667]"
                        >

                            {/* Pass Type Badge */}
                            <td className="px-4 py-4">
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2
                                    text-xs font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5
                                    hover:shadow-md ${product.status === "Approved"
                                            ? "border-[#b8d5e5] bg-[#eaf3f8] text-[#144667]"
                                            : "border-[#c5dce9] bg-[#f1f6f9] text-[#527d98]"
                                        }`}
                                >
                                    {`${product.type}-${product.pass_number}`}
                                </span>
                            </td>

                            {/* Status Badge */}
                            <td className="px-3 py-4">
                                <span
                                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs
                                    font-semibold transition-all duration-300 hover:-translate-y-0.5
                                    ${product.status === "approved"
                                            ? "text-[#144667]"
                                            : "text-[#789caf]"
                                        }`}
                                >
                                    {product.status === "approved" ? (
                                        <CheckCircle2 size={20} strokeWidth={2.5} />
                                    ) : (
                                        <button
                                            onClick={(e) =>{
                                                e.stopPropagation();
                                                handleApproval(product)
                                            }}
                                            title="Approve request"
                                            className="cursor-pointer text-[#789caf] transition-transform
                                             hover:scale-110"
                                        >
                                            <Clock3 size={20} strokeWidth={2.5} />
                                        </button>
                                    )}
                                </span>
                            </td>

                            {/* Actions */}
                            <td className="px-3 py-4">
                                <div className="flex items-center justify-center gap-1 p-1">
                                    <button
                                        title="View details"
                                        onClick={() => setSelectedProduct(product)}
                                        className="cursor-pointer p-2 transition-all hover:scale-110 
                                        hover:text-[#144667]"
                                    >
                                        <Eye size={23} className="text-gray-500" />
                                    </button>
                                </div>
                            </td>

                            {/* Product Details */}
                            <td className="px-2 text-center">
                                <p className="font-semibold text-gray-800">
                                    {product.product}
                                </p>
                            </td>

                            <td className="px-4 text-sm text-gray-700">
                                {product.quantity}
                            </td>

                            <td className="px-4 text-sm font-semibold text-gray-800">
                                ₹{product.est_price}
                            </td>

                            <td className="px-4 text-center text-sm font-medium text-gray-700">
                                {product.organization}
                            </td>

                            <td className="px-4 text-sm text-gray-700">
                                {product.person_name}
                            </td>

                            <td className="px-3">
                                <p className="text-sm text-gray-700">{product.email}</p>
                                <p className="mt-1 text-[15px] text-gray-400">{product.contact}</p>
                            </td>

                            <td className="px-4 py-4 text-sm italic text-gray-600/80">
                                {product.type === "rgp" && product.expt_return
                                    ? (new Date(product.expt_return).toISOString().split("T")[0])
                                    : "not applicable"}
                            </td>

                        </tr>

                    </React.Fragment>
                ))}
            </tbody>

            
        </>
    )
}

export default ApprovalTableBody