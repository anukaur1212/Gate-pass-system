import React, { useState } from 'react'
import { FileText, Hash, IndianRupee, MapPin, RotateCcw } from 'lucide-react'


const EyeModal = ({selectedProduct,setSelectedProduct}) => {

const classDiv = "rounded-xl border border-[#D9E5EC] p-2 transition hover:border-[#144667]/30 hover:bg-[#DCECF4]/40";

const subModal = "m-3 w-full max-w-lg overflow-hidden rounded-2xl border relative border-[#D9E5EC] bg-white shadow-2xl animate-[fadeIn_0.2s_ease-out]";

const mainModal = "fixed inset-0 z-50 bg-black/10 flex items-center justify-center p-2";


return (
    <>
        {selectedProduct && (
            <div
                className={mainModal}
                onClick={() => setSelectedProduct(null)}>

                <div
                    className={subModal}
                    onClick={(e) => e.stopPropagation()}>

                    {/* Header */}
                    {/* Product Summary */}
                    <div className="border-b border-[#D9E5EC] bg-[#F1F6F9] p-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex">
                                <div>
                                    <h3 className="text-base font-bold text-[#144667]">
                                        {selectedProduct.productName}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {selectedProduct.type} : Qty: {selectedProduct.quantity}
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-[#DCECF4] px-3 py-1.5
                            text-xs font-semibold text-[#144667]">
                                {selectedProduct.status}
                            </span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-2">

                        {/* Product Price */}
                        <div className={classDiv}>
                            <div className="mb-2 flex items-center gap-2 text-[#144667]">
                                <IndianRupee size={17} />
                                <span className="text-xs font-semibold uppercase tracking-wide">
                                    Product Price
                                </span>
                            </div>
                            <p className="text-lg font-semibold text-gray-800">
                                ₹{Number(selectedProduct.price).toLocaleString("en-IN")}
                            </p>
                        </div>

                        {/* Serial Number */}
                        <div className={classDiv}>
                            <div className="mb-2 flex items-center gap-2 text-[#144667]">
                                <Hash size={17} />
                                <span className="text-xs font-semibold uppercase tracking-wide">
                                    Serial Number
                                </span>
                            </div>
                            <p className="break-words text-sm font-semibold text-gray-800">
                                {selectedProduct.serialNumber || "Not provided"}
                            </p>
                        </div>

                        {/* Address */}
                        <div className={classDiv}>
                            <div className="mb-2 flex items-center gap-2 text-[#144667]">
                                <MapPin size={17} />
                                <span className="text-xs font-semibold uppercase tracking-wide">
                                    Address
                                </span>
                            </div>
                            <p className="break-words text-sm text-gray-700">
                                {selectedProduct.address || "Not provided"}
                            </p>
                        </div>

                        {/* Return Reason */}
                        <div className={classDiv}>
                            <div className="mb-2 flex items-center gap-2 text-[#144667]">
                                <RotateCcw size={17} />
                                <span className="text-xs font-semibold uppercase tracking-wide">
                                    Return Reason
                                </span>
                            </div>
                            <p className="break-words text-sm text-gray-700">
                                {selectedProduct.returnReason || "Not applicable"}
                            </p>
                        </div>

                        {/* Note */}
                        <div className={classDiv}>
                            <div className="mb-2 flex items-center gap-2 text-[#144667]">
                                <FileText size={17} />
                                <span className="text-xs font-semibold uppercase tracking-wide">
                                    Note
                                </span>
                            </div>
                            <p className="break-words text-sm leading-6 text-gray-700">
                                {selectedProduct.note || "No additional notes"}
                            </p>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="flex justify-end border-t border-[#D9E5EC]
                    bg-[#F1F6F9] px-3 py-3">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="rounded-lg bg-[#144667] px-3 py-2.5 text-sm
                            font-semibold text-white transition hover:bg-[#0F3852]
                            active:scale-95 cursor-pointer">
                            Close Details
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
)
}

export default EyeModal