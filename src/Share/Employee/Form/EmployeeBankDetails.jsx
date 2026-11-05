import { Landmark } from 'lucide-react';
import React from 'react'
import { useState } from 'react';

const EmployeeBankDetails = () => {

    const [bankData, setBankData] = useState({
        bankName: "",
        accountHolder: "",
        ifscCode: "",
        accountNo: "",
    });

    const labelClass = "ps-3 mb-2 block  text-sm font-semibold text-[#144667]";

    return (
        <>
            <section className="mt-4 rounded-xl border border-[#d5e4ed] bg-[#f3f7fa] p-4">

                {/* Section Heading */}
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2edf4] text-[#144667]">
                        <Landmark size={20} />
                    </div>

                    <p className="text-xl font-bold text-gray-700">
                        Bank Details
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* Bank Name */}
                    <div>
                        <label className={labelClass}>Bank Name *</label>
                        <input
                            type="text"
                            name="bankName"
                            value={bankData.bankName}
                            onChange={(e) => setBankData({
                                ...bankData,
                                bankName: e.target.value
                            })}
                            placeholder="Enter bank name"
                            className="Input-Field"
                        />
                    </div>

                    {/* Account Holder */}
                    <div>
                        <label className={labelClass}>Account Holder Name *</label>
                        <input
                            type="text"
                            name="accountHolder"
                            value={bankData.accountHolder}
                            onChange={(e) => setBankData({
                                ...bankData,
                                accountHolder: e.target.value
                            })}
                            placeholder="Enter account holder name"
                            className="Input-Field"
                        />
                    </div>

                    {/* IFSC Code */}
                    <div>
                        <label className={labelClass}>IFSC Code *</label>
                        <input
                            type="text"
                            name="ifscCode"
                            maxLength={11}
                            value={bankData.ifscCode}
                            onChange={(e) => setBankData({
                                ...bankData,
                                ifscCode: e.target.value.toUpperCase()
                            })}
                            placeholder="Example: SBIN0001234"
                            className="Input-Field"
                        />
                    </div>

                    {/* Account Number */}
                    <div>
                        <label className={labelClass}>Account Number *</label>
                        <input
                            type="text"
                            inputMode="numeric"
                            name="accountNo"
                            value={bankData.accountNo}
                            onChange={(e) => setBankData({
                                ...bankData,
                                accountNo: e.target.value.replace(/\D/g, "")
                            })}
                            placeholder="Enter account number"
                            className="Input-Field"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default EmployeeBankDetails