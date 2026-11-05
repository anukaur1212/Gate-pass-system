import { Clock3 } from 'lucide-react'
import React from 'react'

const StatusModal = ({ showApproval, setShowApproval }) => {
    return (
        <>
         {showApproval && (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/10 p-4">

        <div className="w-full max-w-md rounded-2xl border border-[#D9E5EC] bg-white p-7 shadow-2xl">

            {/* Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center
            rounded-full bg-[#DCECF4] text-[#144667]">
                <Clock3 size={32} />
            </div>

            {/* Heading */}
            <h2 className="text-center text-xl font-bold text-[#144667]">
                Approve Request?
            </h2>

            <p className="mt-2 text-center text-sm leading-6 text-gray-500">
                Are you sure you want to approve this gate pass request?
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

                <button
                    onClick={() => setShowApproval(false)}
                    className="flex-1 rounded-xl border border-[#D9E5EC] px-4 py-3
                    text-sm font-semibold text-[#526777] transition
                    hover:bg-[#F1F6F9] cursor-pointer">
                    No, Cancel
                </button>

                <button
                    onClick={() => updateStatus("Approved")}
                    className="flex-1 rounded-xl bg-[#144667] px-4 py-3
                    text-sm font-semibold text-white shadow-md transition
                    hover:bg-[#0F3852] hover:shadow-lg cursor-pointer">
                    Yes, Approve
                </button>

            </div>
        </div>
    </div>
)}

        </>
    )
}

export default StatusModal