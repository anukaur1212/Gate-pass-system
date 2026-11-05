import React, { useState } from 'react'
import { products } from '../../Constant/ProductData'
import { CheckCircle2, Clock3, Eye, Package, Pencil, Trash2 } from 'lucide-react'
import EyeModal from '../Modal/EyeModal';

const TableBody = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>

      <tbody className="divide-y divide-gray-100">
        {products.map((product) => (
          <tr
            key={product.id}
            className="group animate-[fadeIn_0.4s_ease-out_both] transition-all 
                    duration-200 hover:bg-[#edf4f8] hover:shadow-[inset_3px_0_0_#144667]">

            {/* Pass Type Badge */}
            <td className="px-4 py-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs 
                  font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 
                  hover:shadow-md ${product.status === "Approved"

                  ? "border-[#b8d5e5] bg-[#eaf3f8] text-[#144667]"
                  : "border-[#c5dce9] bg-[#f1f6f9] text-[#527d98]"
                  }`}
              >
                <Package size={14} strokeWidth={2.5} />
                {product.type}
              </span>
            </td>

            {/* Status Badge */}
            <td className="px-4 py-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs 
                          font-semibold transition-all duration-300 hover:-translate-y-0.5
                           hover:shadow-md ${product.status === "Approved"

                    ? "text-[#144667]"
                    : "text-[#789caf]"
                  }`}
              >
                {product.status === "Approved" ? (
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                ) : (
                  <Clock3 size={20} strokeWidth={2.5} />
                )}

              </span>
            </td>

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

                <button
                  title="Edit"
                  className="rounded-lg p-2 text-[#245b3e] transition-all duration-200
                           hover:scale-110 hover:bg-green-50 active:scale-95">
                  <Pencil size={17} />
                </button>

                <button
                  title="Delete"
                  className="rounded-lg p-2 text-red-500 transition-all duration-200 
                          hover:scale-110 hover:bg-red-50 active:scale-95">
                  <Trash2 size={17} />
                </button>
              </div>
            </td>

            <td className=" px-2 text-center">
              <p className="font-semibold text-gray-800">
                {product.productName}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                ID: GP-{String(product.id).padStart(4, "0")}
              </p>
            </td>

            <td className=" px-4 text-sm text-gray-700">
              {product.quantity}
            </td>

            <td className="px-4 text-sm font-semibold text-gray-800">
              ₹{product.price.toLocaleString("en-IN")}
            </td>

            <td className="px-4 text-center text-sm font-medium text-gray-700">
              {product.organization}
            </td>

            <td className="px-4 text-sm text-gray-700">
              {product.fullName}
            </td>

            <td className="px-3">
              <p className="text-sm text-gray-700">
                {product.email}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {product.phone}
              </p>
            </td>

            <td className="px-4 py-4 text-sm text-gray-600/80 italic">
              {product.expectedReturnDate || "Not applicable"}
            </td>

          </tr>
        ))}

        {/* eye tooltip */}
        {/* Product Details Popover */}
        <EyeModal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />

      </tbody>

    </>
  )
}

export default TableBody