import React, { useEffect, useState } from 'react'
import { FaCheck, FaEdit, FaPaw, FaPlus, FaTimes, FaTrash, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { adminAllUsersApi, AllUsersRequestsApi, dashBoardGetPetApi, deletepetApi, getPetApi, updateStatusApi, updateStatusRejectApi } from '../../../service/AllApi'
import { h1 } from 'framer-motion/client'
import AnimationSection from '../../Components/AnimationSection'

function Dashboard() {
  const [pets,setPets]=useState([])
  const[limitPet,setLimitPet]=useState()
  const [deleteStatus,setDeleteStatus]=useState()
  const [allUsers,setAllUsers]=useState()
  const [allRequest,setAllRequest]=useState()
const [approve, setApprove] = useState(false)
  const [reject,SetReject]= useState(false)

const [token,setToken]=useState("")

  const getAddedPet =async ()=>{
      const result = await getPetApi()
      console.log(result);
      setPets(result.data)


const result1 = await dashBoardGetPetApi()
console.log(result1);
setLimitPet(result1.data)

const result3 =await adminAllUsersApi ()
console.log(result3);
setAllUsers(result3.data)


 const result4 = await AllUsersRequestsApi()
  console.log(result4);
  setAllRequest(result4.data)
 


      
    }
const totalPets = pets?.length || 0;
const totalRequest = allRequest?.length || 0




const handledelete =async (id)=>{
const result = await deletepetApi(id)
console.log(result);
setDeleteStatus(result.data)

}




  const handleApprove = async (id) => {

    const result = await updateStatusApi(id)
    console.log(result)
    if (result.status == 200) {
      setApprove(!approve)
    }

  }

  const handleReject = async (id,petId) => {
    const result = await updateStatusRejectApi(id,{petId})
    // console.log(result)
    if (result.status == 200) {
      SetReject(!reject)


    }

  }

 const handleLogout =()=>{

sessionStorage.removeItem("token")
sessionStorage.removeItem("existingAdmin")

setTimeout(()=>{
  toast.info("log out successfully")
navigate("/admin")

},3000)

  }





   useEffect(()=>{
      getAddedPet()
    },[deleteStatus])

    useEffect(()=>{
   if (sessionStorage.getItem("token")) {
     const tok=sessionStorage.getItem("token")
     setToken(tok)
   
   }
 },[approve,reject])
  
  return (
    <>
   <AnimationSection>
     { token ?<div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
            Logout
          </button>
        </div>
  
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaPaw className="text-indigo-600 text-3xl" />
           <div>
              <p className="text-gray-600">Total Pets</p>
              <h2 className="text-2xl font-bold text-gray-800">{totalPets}</h2>
              </div> 
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaUsers className="text-green-600 text-3xl" />
            <div>
              <p className="text-gray-600">Total Requests</p>
              <h2 className="text-2xl font-bold text-gray-800">{totalRequest}</h2>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
            <FaPlus className="text-red-600 text-3xl" />
            <div>
              <p className="text-gray-600">New Pet Requests</p>
              <h2 className="text-2xl font-bold text-gray-800">0</h2>
            </div>
          </div>
        </div>
  
        {/* Adoption Requests Table */}
  <div className="bg-white rounded-2xl shadow p-6 mt-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Adoption Requests</h2>
      {/* More Button */}
      <Link to={"/adoption"}>
        <button
         
          className="text-indigo-600 font-semibold hover:underline"
        >
          More &rarr;
        </button>
      </Link>
    </div>
    
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="py-2 px-4">Pet</th>
          <th className="py-2 px-4">User</th>
          <th className="py-2 px-4">Requested On</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Action</th>
        </tr>
      </thead>
     {allUsers?.length>0 ? allUsers?.map((request)=>(<tbody>
        <tr className="border-b">
          <td className="py-2 px-4">{request?.petName}</td>
          <td className="py-2 px-4">{request?.breed}</td>
          <td className="py-2 px-4">{new Date(request.createdAt).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })}</td>
            <td className="py-2 px-3 sm:px-4 font-semibold">
                    {request.status === 'pending' && (
                      <span className="text-yellow-600">Pending</span>
                    )}
                    {request.status === 'approved' && (
                      <span className="text-green-600">Approved</span>
                    )}
                    {request.status === 'rejected' && (
                      <span className="text-red-600">Rejected</span>
                    )}
                  </td>
         { <td className="py-2 px-3 sm:px-4 flex flex-col sm:flex-row gap-2 justify-center">
           {request?.status == "pending" && (
             <>
               <button
                 onClick={() => handleApprove(request?._id)}
                 className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 flex items-center gap-1 justify-center"
               >
                 <FaCheck /> Approve
               </button>
               <button
                 onClick={() => handleReject(request?._id, request?.petId)}
                 className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 flex items-center gap-1 justify-center"
               >
                 <FaTimes /> Reject
               </button>
             </>
           )}
         
           {request?.status == "approved" && (
             <button
               onClick={() => handleReject(request?._id, request?.petId)}
               className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 flex items-center gap-1 justify-center"
             >
               <FaTimes /> Reject
             </button>
           )}
         
           {request?.status == "rejected" && null /* show nothing */}
         </td>
         }
        </tr>
        
      </tbody>)) : <h1>no requests...</h1> }
    </table>
  </div>
  
  
        {/* Pets Management Section */}
  <div className="mt-10 bg-white rounded-2xl shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Manage Pets</h2>
      
      <div className="flex items-center gap-4">
       
        
        {/* More Button */}
        <Link to={"/managepet"}>
          <button
           
            className="text-indigo-600 font-semibold hover:underline"
          >
            More &rarr;
          </button>
        </Link>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Example Pet Card */}
     {limitPet?.map((items)=>(<div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col gap-2">
        <h3 className="text-gray-800 font-bold">{items?.petName}</h3>
        <p className="text-gray-600 text-sm">{items?.breed} • {items?.age} yrs</p>
        <div className="flex gap-2 mt-2">
          <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-300 flex items-center gap-1">
            <FaEdit /> Edit
          </button>
          <button type='button' onClick={()=>handledelete(items._id)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 flex items-center gap-1">
            <FaTrash /> Delete
          </button>
        </div>
      </div>)) }
    </div>
  </div>
  
      </div> : <h1>your not admin ....... please login </h1> }
   </AnimationSection>
    
    </>
   
  )
}

export default Dashboard