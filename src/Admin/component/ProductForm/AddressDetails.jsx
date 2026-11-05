import { MapPin, NotebookDot } from 'lucide-react'
import React, { useState } from 'react'

const AddressDetails = () => {

    const [note, setNote] = useState("");


    return (
        <>
            {/* Address and notes details */}
            <section className="mt-3 rounded-xl border border-[#d5e4ed] bg-[#f3f7fa] px-3 py-3">

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2edf4] text-[#144667]">
                        <MapPin size={20} />
                    </div>

                    <p className="text-xl font-bold text-gray-700">
                        Additional Information
                    </p>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1">
                    <textarea
                        name="note"
                        rows="5"
                        maxLength="500"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add additional instructions (optional)..."
                        className="inputClass resize-y"
                    />

                    <div className="mt-2 flex justify-end text-xs text-gray-400">
                        {note.length}/500 characters
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddressDetails