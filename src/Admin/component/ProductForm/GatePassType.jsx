import { ClipboardList, RotateCw, Truck } from 'lucide-react'
import React, { useState } from 'react'

const GatePassType = () => {

      const [type, setType] = useState("RGP"); 

       const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";

    return (
        <>
            {/* Gate pass type */}
            <section>
                <div className="mb-4 mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center 
                            rounded-xl bg-[#eaf2eb] text-[#245b3e]">
                        <ClipboardList size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Gate Pass Type
                        </h2>
                        <p className="text-xs text-gray-500">
                            Choose whether the product will be returned.
                        </p>
                    </div>
                </div>

                {/* RGP / NRGP Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">

                    {/* RGP */}
                    <label
                        className={`relative flex h-40 cursor-pointer items-start gap-4 rounded-xl border-2 p-3 transition-all duration-200 ${type === "RGP"
                            ? "border-[#56805d] bg-[#f0f7f0] shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300"
                            }`}>

                        <input
                            type="radio"
                            name="type"
                            value="RGP"
                            checked={type === "RGP"}
                            onChange={(e) => setType(e.target.value)}
                            className="h-4 w-4 accent-[#245b3e]" />

                        <div className="absolute top-3 right-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0eee1] text-[#245b3e]">
                            <RotateCw size={22} />
                        </div>

                        <div>
                            <h3 className="mt-2 font-bold text-gray-800">
                                RGP
                            </h3>
                            <p className=" text-xs leading-5 text-gray-500">
                                Returnable Gate Pass. The product will return to the
                                organization.
                            </p>
                        </div>
                    </label>

                    {/* NRGP */}
                    <label
                        className={`relative flex h-40 cursor-pointer items-start gap-4 rounded-xl border-2 p-3 transition-all duration-200 ${type === "NRGP"
                            ? "border-[#56805d] bg-[#f0f7f0] shadow-sm"
                            : "border-gray-200 bg-white hover:border-gray-300"
                            }`}>

                        <input
                            type="radio"
                            name="type"
                            value="NRGP"
                            checked={type === "NRGP"}
                            onChange={(e) => setType(e.target.value)}
                            className="h-4 w-4 accent-[#245b3e]"
                        />

                        <div className="absolute top-3 right-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e0eee1] text-[#245b3e]">
                            <Truck size={22} />
                        </div>

                        <div>
                            <h3 className="mt-2 font-bold text-gray-800">
                                NRGP
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Non-Returnable Gate Pass. The product will not return.
                            </p>
                        </div>
                    </label>
                </div>

      
            </section>

        </>
    )
}

export default GatePassType