import React from 'react'
import { employees } from '../../Constant/EmployeeData'
import { Pencil, Trash2 } from 'lucide-react'

const EmployeeTableBody = () => {
    return (
        <>


            <tbody className="divide-y divide-gray-100 text-center">
                {employees.map((person) => (
                    <tr
                        key={person.id}
                        className="group animate-[fadeIn_0.4s_ease-out_both] transition-all
                         duration-200 hover:bg-[#263746]/10 hover:shadow-[inset_3px_0_0_#263746]"
                    >

                        {/* Photo */}
                        <td className="px-3 py-4">
                            <img
                                src={person.image}
                                alt={person.fullName}
                                className="mx-auto h-10 w-10 rounded-full object-cover"
                            />
                        </td>

                        {/* Employee Name */}
                        <td className="px-3 py-4 text-sm font-semibold text-[var(--primary-dark)]">
                            {person.fullName}
                        </td>

                        {/* Contact Details */}
                        <td className="px-3 py-4 text-sm text-[var(--text-muted)]">
                            {person.email}
                            <br />
                            {person.phone}
                        </td>

                        {/* Mapping Table Fields */}
                        {[
                            person.department,
                            person.designation,
                            person.qualification,
                            person.experience,
                            person.joiningDate
                        ].map((value, index) => (
                            <td
                                key={index}
                                className="px-3 py-4 text-sm text-[var(--text-gray)]"
                            >
                                {value}
                            </td>
                        ))}

                        {/* Status */}
                        {/* Status */}
                        <td className="px-3 py-4">
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${person.status === "Active"
                                        ? "bg-[#DCECF4] text-[#144667]"
                                        : "bg-[#E8EFF4] text-[#527D98]"
                                    }`}
                            >
                                {person.status}
                            </span>
                        </td>

                        {/* Actions */}
                        <td className="px-3 py-4">
                            <div className="flex items-center justify-center gap-1 rounded-xl border
                border-gray-100 bg-white p-1 shadow-sm transition-all duration-200
                group-hover:border-[#dce9dd]">

                                <button
                                    title="Edit"
                                    className="cursor-pointer rounded-lg p-2 text-[#245b3e]
                        transition-all hover:scale-110 hover:bg-green-50"
                                >
                                    <Pencil size={17} />
                                </button>

                                <button
                                    title="Delete"
                                    className="cursor-pointer rounded-lg p-2 text-red-500
                        transition-all hover:scale-110 hover:bg-red-50"
                                >
                                    <Trash2 size={17} />
                                </button>

                            </div>
                        </td>

                    </tr>
                ))}
            </tbody>


        </>
    )
}

export default EmployeeTableBody