import React, { useEffect, useState } from 'react'
import { deletepetApi, getPetApi } from '../../service/AllApi'
import Edit from './Edit'
import { Link } from 'react-router-dom'

function AdminCard() {
  const [pets,setPets]=useState([])
 const [deleteStatus,setDeleteStatus]=useState()
  const getAddedPet =async ()=>{
    const result = await getPetApi()
    console.log(result);
    setPets(result.data)
    
  }

  const handledelete =async (id)=>{
const result = await deletepetApi(id)
console.log(result);
setDeleteStatus(result.data)

}
  useEffect(()=>{
    getAddedPet()
  },[deleteStatus])

  return (
    <>
     {pets?.length>0 ? pets?.map((items)=>(<div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full max-h-50 "
        src={items?.imgUrl}
        alt={items?.petName}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{items?.petName}</h2>
        <p className="text-gray-600">{items?.breed}</p>
        <p className="text-gray-600">{items?.age} years old • {items?.gender}</p>

      
         <div >
       <Link to={`/editPet/${items?._id}`}>
           <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                      Edit
                  </button>
       </Link>
             
            <button type='button' onClick={()=>handledelete(items._id)} className="mt-4  w-full bg-red-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors">
               Delete
              </button>
         </div>
      </div>
    </div>)) : <h1 className='text-2xl text-center'>no pet added</h1>  }
    </>
   
  )
}

export default AdminCard