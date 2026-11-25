import React from 'react'
import { Delete, ShieldAlert, X } from 'lucide-react';

const DeleteGatePass = ({deleteId,setDeleteId,showDeleteModel,setShowDeleteModel,handleDelete}) => {
  return (
   <>
      {showDeleteModel && (<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

        <div className="w-full max-w-md animate-in zoom-in-95 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">

          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-red-50 p-3 text-red-500">
                <ShieldAlert size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Confirm Delete
              </h2>
            </div>

            <button
              onClick={() => {
                setShowDeleteModel(false);
                setDeleteId(null);
              }}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Message */}
          <p className="mb-7 text-sm leading-6 text-gray-500">
            Are you sure you want to Delete? It will permanentally delete from the database.
          </p>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setShowDeleteModel(false);
                setDeleteId(null);
              }}
              className="rounded-xl border border-gray-200 px-5
             py-2.5 text-sm font-semibold text-gray-600 transition
              hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                handleDelete(deleteId);
                setShowDeleteModel(false);
                notify()
              }}
              className="flex items-center gap-2 rounded-xl bg-red-500
             px-5 py-2.5 text-sm font-semibold text-white shadow-md 
             shadow-red-500/20 transition hover:bg-red-600 cursor-pointer"
            >
              Yes, Delete
            </button>
          </div>

        </div>
      </div >)
      }

   </>
  )
}

export default DeleteGatePass