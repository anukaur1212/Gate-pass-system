import React from 'react'

const TableHeading = () => {
    return (
        <>

            <thead className="bg-[#144667]/10">
                <tr className="text-xs font-bold uppercase tracking-wide text-[#144667]">
                    <th className="w-28 px-3 py-3">Pass Type</th>
                    <th className="w-32 px-3 py-3">Status</th>
                    <th className="w-28 px-3 py-3 text-center">Actions</th>
                    <th className="w-52 px-3 py-3">Product Details</th>
                    <th className="w-16 px-3 py-3">Qty</th>
                    <th className="w-36 px-3 py-3">Estimated Price</th>
                    <th className="w-44 px-3 py-3">Organization</th>
                    <th className="w-40 px-3 py-3">Person Name</th>
                    <th className="w-52 px-3 py-3">Contact</th>
                    <th className="w-40 px-3 py-3">Expected Return</th>
                </tr>
            </thead>

        </>
    )
}

export default TableHeading