import { Plus } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Heading = () => {
    return (
        <>

            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--primary-dark)]">
                        Gate Pass Records
                    </h1>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Manage product movements and gate pass information.
                    </p>
                </div>

                <NavLink to='/productform'>
                    <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] 
                px-5 py-3 text-sm font-semibold text-white shadow-sm transition
                 hover:bg-[var(--text-muted)] cursor-pointer">
                        <Plus size={18} />
                        Create Gate Pass
                    </button>
                </NavLink>
            </div>

        </>
    )
}

export default Heading