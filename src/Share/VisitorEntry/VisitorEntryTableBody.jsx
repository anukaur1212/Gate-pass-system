import React from 'react'
import { visitors } from '../Constant/VisitorData'
import { Pencil, ShieldAlert, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getVisitor } from './VisitorApi/GetVisitor'
import DeleteVisitor from '../Report/Modal/DeleteVisitor'

const VisitorEntryTableBody = ({ visitor, setVisitor }) => {

  const navigate = useNavigate()
  const [editId, setEditId] = useState(null);
  // const [showForm, setShowForm] = useState(false);

  const [deleteId, setDeleteId] = useState(null)
  const [showDeleteModel, setShowDeleteModel] = useState(false)


  const BASE_URL = import.meta.env.VITE_BACKEND_url

  // getting all table data
  useEffect(() => {
    getVisitor({ setVisitor })
  }, [])


  //api calling to edit visitor form
  const handleEdit = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/visit/getvisitor/${id}`);
      const result = await response.json();

      navigate("/visitorform", {
        state: {
          visitorData: result.data,
          editId: id
        }
      });

      console.log("Fetched visitor:", result.data);

    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {

      const response = await fetch(`${BASE_URL}/visit/deletevisitor/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();

      if (result.status) 
      {
        getVisitor({ setVisitor });
      }

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>

      <tbody className="divide-y divide-gray-100 text-center">
        {visitor.map((person) => (
          <tr
            key={person.id}
            className="group animate-[fadeIn_0.4s_ease-out_both] transition-all 
                    duration-200 hover:bg-[#263746]/10 hover:shadow-[inset_3px_0_0_#134069]">

            <td className="px-3 py-4">
              <div className="flex items-center justify-center gap-1 rounded-xl border
                       border-gray-100 bg-white p-1 shadow-sm transition-all duration-200 
                       group-hover:border-[#dce9dd]">

                <button
                  title="Edit"
                  onClick={() => {
                    handleEdit(person.id)
                  }}
                  className="rounded-lg p-2 text-[var(--primary)] transition-all duration-200 cursor-pointer
                           hover:scale-110 hover:bg-[var(--primary-light)] active:scale-95">
                  <Pencil size={17} />
                </button>

                <button
                  title="Delete"
                  onClick={() => {
                    setDeleteId(person.id)
                    setShowDeleteModel(true)
                  }}
                  className="rounded-lg p-2 text-red-500 transition-all duration-200 cursor-pointer
                          hover:scale-110 hover:bg-red-50 active:scale-95">
                  <Trash2 size={17} />
                </button>
              </div>
            </td>

            {[person.full_name, person.phone, person.visit_purpose,
            person.in_time, person.out_time, person.meeting_to].map((value) => {
              return (<td className='px-3' key={value.id}>
                <p className='mt-1 text-sm text-gray-700'>
                  {value}
                </p>
              </td>)
            })}

          </tr>

        ))}
      </tbody>

      {/* //  delete model */}
      <DeleteVisitor showDeleteModel={showDeleteModel} setShowDeleteModel={setShowDeleteModel}
        setDeleteId={setDeleteId} handleDelete={handleDelete} deleteId={deleteId} />

    </>
  )
}

export default VisitorEntryTableBody