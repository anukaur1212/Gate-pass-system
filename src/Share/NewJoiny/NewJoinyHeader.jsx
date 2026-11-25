import React from 'react'

const NewJoinyHeader = () => {
  return (
  <>
  
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-[var(--primary-dark)]">
            New Joiny Details
          </h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Manage new joiny information and new joiny entry.
          </p>
        </div>

      </div>

  </>
  )
}

export default NewJoinyHeader