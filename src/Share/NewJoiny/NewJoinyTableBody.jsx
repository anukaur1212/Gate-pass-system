import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { employees } from '../Constant/EmployeeData'
import { EmpDropDownData } from '../Constant/EmployeeData'
import { createPortal } from 'react-dom'
import DesignationModal from './modal/DesignationModal'

const NewJoinyTableBody = () => {

    const [status, setStatus] = useState([]);

    const [openDropdown, setOpenDropdown] = useState(null);
    const [passType, setPassType] = useState({});

    return (
        <>
            <tbody className="divide-y divide-gray-100 text-center relative">
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
                            person.designation,
                            person.jobtype,
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
                            <div className="flex items-center justify-center relative
                             transition-all duration-200
                             hover:-translate-y-1">

                                <button
                                    title="Edit"
                                    className="cursor-pointer text-sm text-[var(--primary)]
                                    transition-all hover:text-[var(--primary-light)]
                                    hover:bg-[var(--primary)] px-3 py-2 rounded-xl"

                                    onClick={() => {
                                        setStatus(prev => [...prev, person.id]);
                                        setOpenDropdown(prev =>
                                            prev === person.id ? null : person.id
                                        );
                                    }}
                                >
                                    {status.includes(person.id)
                                        ? 'Employee Saved'
                                        : 'Save as Employee'}

                                </button>
                            </div>

                        </td>

                    </tr>
                ))}

            </tbody>

        <DesignationModal openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
        </>
    )
}

export default NewJoinyTableBody