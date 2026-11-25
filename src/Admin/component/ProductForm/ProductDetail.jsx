import { Package, RotateCw, Truck, Upload } from 'lucide-react'
import React, { useState } from 'react'
import { getGatePass } from './GatePassApi/GetApi';


const ProductDetail = ({ handleChange, productForm, setProductForm ,getGatePass}) => {

    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState("RGP");

    const labelClass =
        "ms-2 mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700";


    return (
        <>
            {/* Product details */}
            <section className=''>
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center
                             rounded-xl bg-[#e2edf4] text-[#144667]">
                        <Package size={20} />
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-800">
                            Product Information
                        </h2>
                        <p className="text-xs text-gray-500">
                            Enter the details of the product.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    {/* Product Name */}
                    <div>
                        <label className={labelClass}>
                            Product Name <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            name='product'
                            value={productForm.product}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Product Serial */}
                    <div>
                        <label className={labelClass}>
                            Product Serial No.
                        </label>

                        <input
                            type="text"
                            name="serial_number"
                            value={productForm.serial_number}
                            onChange={handleChange}
                            placeholder="Enter product serial number"
                            required
                            className="inputClass"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3">
                    {/* Quantity */}
                    <div>
                        <label className={labelClass}>
                            Product Quantity <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="number"
                            name='quantity'
                            value={productForm.quantity}
                            onChange={handleChange}
                            min="1"
                            placeholder="Enter quantity"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Estimated Price */}
                    <div>
                        <label className={labelClass}>
                            Estimated Product Price
                        </label>

                        <input
                            type="number"
                            name='est_price'
                            value={productForm.est_price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter estimated price"
                            required
                            className="inputClass"
                        />
                    </div>

                    {/* Expected Return Date: RGP Only */}
                    {productForm.type === "rgp" && (
                        <div className="">
                            <label className={labelClass}>
                                Expected Return Date{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="date"
                                name='expt_return'
                                value={productForm.expt_return}
                                onChange={handleChange}
                                required
                                className="inputClass"
                            />
                        </div>
                    )}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 mt-3 items-center lg:h-34 ">
                    {/* Product Photo */}

                    <div className=" flex h-35 w-80 flex-col mb-3 lg:mb-5">
                        <label className={labelClass}>
                            Upload Product Photo
                        </label>

                        <label className="group flex min-h-[40px] w-75 lg:w-full md:min-h-[90px]
                            cursor-pointer items-center justify-center rounded-xl border-2
                            border-gray-300 bg-[#f3f7fa] px-4 py-5 text-center
                            transition-all hover:border-[#2479a8] hover:bg-[#e2edf4]">

                            <div className="flex justify-center gap-2">
                                <Upload size={20} className="text-[#144667]" />

                                <span className="text-sm font-semibold text-gray-700">
                                    {photo ? photo.name : "Click to upload photo"}
                                </span>

                                <span className="mt-1 text-xs text-gray-400">
                                    PNG, JPG or JPEG
                                </span>
                            </div>

                            <input
                                type="file"
                                name="productPhoto"
                                accept="image/png,image/jpeg,image/jpg"
                                className="hidden"
                                onChange={(e) =>
                                    setPhoto(e.target.files?.[0] || null)
                                }
                            />
                        </label>
                    </div>

                    {/* gate pass type */}
                    {/* RGP */}
                    <label className="flex flex-1 h-[90px] -mt-7 lg:-mt-4 cursor-pointer
                        items-center justify-center gap-4 border border-gray-300
                        px-3 py-3 rounded-xl lg:mr-5 transition-all
                        hover:border-[#2479a8] hover:bg-[#f3f7fa]
                        has-[:checked]:border-[#144667] has-[:checked]:bg-[#e2edf4]">
                        <input
                            type="radio"
                            name="type"
                            value="rgp"
                            checked={productForm.type === "rgp"}
                            onChange={async (e) => {
                                const selectedType = e.target.value;
                                handleChange(e);

                                const number = await getGatePass(selectedType);

                                setProductForm(prev => ({
                                    ...prev,
                                    pass_number: number
                                }));
                            }}
                            className="h-5 w-5 shrink-0 cursor-pointer accent-[#144667]"
                        />
                        <span className="text-base font-medium text-gray-800"> RGP
                        </span>
                        <p className=" text-xs leading-5 text-gray-500">
                            Returnable Gate Pass. The product will return to the
                            organization.
                        </p>
                    </label>

                    {/* NRGP */}
                    <label className="flex flex-1 h-[90px] -mt-7 lg:-mt-4 cursor-pointer
                        items-center justify-center gap-4 border border-gray-300
                        px-3 py-3 rounded-xl lg:mr-5 transition-all
                        hover:border-[#2479a8] hover:bg-[#f3f7fa]
                        has-[:checked]:border-[#144667] has-[:checked]:bg-[#e2edf4]">
                        <input
                            type="radio"
                            name="type"
                            value="nrgp"
                            checked={productForm.type === "nrgp"}
                            onChange={async (e) => {
                                const selectedType = e.target.value;

                                handleChange(e);

                                const number = await getGatePass(selectedType);

                                setProductForm(prev => ({
                                    ...prev,
                                    pass_number: number
                                }));
                            }}
                            className="h-5 w-5 shrink-0 cursor-pointer accent-[#144667]"
                        />
                        <span className="text-base font-medium text-gray-800"> NRGP
                        </span>
                        <p className=" text-xs leading-5 text-gray-500">
                            Returnable Gate Pass. The product will return to the
                            organization.
                        </p>
                    </label>
                </div>

            </section>
        </>
    )
}

export default ProductDetail