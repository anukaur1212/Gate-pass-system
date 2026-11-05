import React from 'react'
import { visitors } from '../Constant/VisitorData'
import { Pencil, Trash2 } from 'lucide-react'

const VisitorEntryTableBody = () => {
  return (
    <>

      <tbody className="divide-y divide-gray-100 text-center">
        {visitors.map((person) => (
          <tr
            key={person.id}
            className="group animate-[fadeIn_0.4s_ease-out_both] transition-all 
                    duration-200 hover:bg-[#263746]/10 hover:shadow-[inset_3px_0_0_#263746]">

            <td className="px-3 py-4">
              <div className="flex items-center justify-center gap-1 rounded-xl border
                       border-gray-100 bg-white p-1 shadow-sm transition-all duration-200 
                       group-hover:border-[#dce9dd]">

                <button
                  title="Edit"
                  className="rounded-lg p-2 text-[#245b3e] transition-all duration-200 cursor-pointer
                           hover:scale-110 hover:bg-green-50 active:scale-95">
                  <Pencil size={17} />
                </button>

                <button
                  title="Delete"
                  className="rounded-lg p-2 text-red-500 transition-all duration-200 cursor-pointer
                          hover:scale-110 hover:bg-red-50 active:scale-95">
                  <Trash2 size={17} />
                </button>
              </div>
            </td>

            {[person.fullName, person.phone, person.visitPurpose,
              person.inTime, person.outTime, person.meetingTo].map((value) => {
              return (<td className='px-3' key={value.id}>
                <p className='mt-1 text-sm text-gray-700'>
                  {value}
                </p>
              </td>)
            })}

          </tr>
        ))}
      </tbody>

    </>
  )
}

export default VisitorEntryTableBody