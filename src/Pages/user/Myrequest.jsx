import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { getUserRequestApi } from '../../../service/AllApi'

function Myrequest() {
  const [userRequests,setUserRequests] =useState()
const getUserRequest =async ()=>{
   const token = sessionStorage.getItem("token");
       if (!token) {
         toast.warning("Please login first");
         navigate("/Auth");
         return;
       }
   
       const reqHeader = {
         "Authorization": `Bearer ${token}`,
       }

  const result = await getUserRequestApi(reqHeader)
  console.log(result);
  setUserRequests(result.data)
  
}

useEffect(() => {
   getUserRequest()
  }, [])

  return (
    <>
   <Navbar/>
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto mt-10" >
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Adoption Requests
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        { userRequests?.length>0 ? userRequests.map((item)=>(<div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{item?.petName}</h2>
              <p className="text-gray-600 text-sm mt-1">{item?.breed}</p>
              <p className="text-gray-600 text-sm mt-1">
  Requested On: {new Date(item.createdAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })}
</p>
            </div>
            {item?.status == "pending"?<span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                Pending
              </span>: item?.status == "approved" ?<span className="text-sm font-medium text-green-600 bg-yellow-100 px-3 py-1 rounded-full">
               approved
              </span> : item?.status == "rejected" && <span className="text-sm font-medium text-red-600 bg-yellow-100 px-3 py-1 rounded-full">
               rejected
              </span> }
          </div>))  : <h1>no requests yet</h1> }

        

        </div>
      </div>
    </div>
    
  <Footer/>
    </>
   
  )
}

export default Myrequest