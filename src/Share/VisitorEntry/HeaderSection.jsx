import { Plus } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderSection = () => {
    return (
        <>

            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--primary-dark)]">
                        Visitor Entry
                    </h1>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Manage visitor information and creating visitor entry.
                    </p>
                </div>

                <NavLink to='/visitorform'>
                    <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)]
                     px-5 py-3 text-sm font-semibold text-white shadow-sm transition
                     hover:bg-[var(--text-muted)] cursor-pointer">
                        <Plus size={18} />
                        Create Entry
                    </button>
                </NavLink>
            </div>

        </>
    )
}

export default HeaderSection