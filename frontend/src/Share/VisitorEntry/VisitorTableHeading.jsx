import React from 'react'

const VisitorTableHeading = () => {
    return (
        <>

            <thead className="bg-[#144667]/10">
                <tr className="text-xs font-bold uppercase
                 tracking-wide text-[#263746] text-center">
                    <th className="w-20 px-3 py-3">Status</th>
                    <th className="w-36 px-4 py-3">Name</th>
                    <th className="w-28 px-3 py-3 ">Phone</th>
                    <th className="w-50 px-5 py-3">Purpose to Visit</th>
                    <th className="w-28 px-3 py-3">In Time</th>
                    <th className="w-28 px-3 py-3">Out Time</th>
                    <th className="w-50 px-3 py-3">Meeting to</th>
                </tr>
            </thead>

        </>
    )
}

export default VisitorTableHeading