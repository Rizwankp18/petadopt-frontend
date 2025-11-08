import React from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import PetCard from '../../Components/Petcard'
import AdminCard from '../../Components/AdminCard'
import { Link } from 'react-router-dom'

function Managepet() {
  return (
    <>
   
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Pets</h1>
       <Link to={"/dashboard"}>
                 <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
                   Back to Dashboard
                 </button>
               </Link>
      </div>

      {/* Add Pet Button */}
      <div className="mb-6 flex justify-end">
       <Link to={"/addpet"}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition flex items-center gap-2">
            <FaPlus /> Add Pet
          </button>
       </Link>
      </div>
<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-1 gap-3'>
 <AdminCard/>

</div>
     
    </div>
    </>
   
  )
}

export default Managepet