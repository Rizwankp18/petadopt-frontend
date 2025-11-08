import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPaw, FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import { getProfileUserRequestApi, getUserRequestApi } from '../../../service/AllApi'
import { toast } from 'react-toastify'

function Profile() {
  const navigate =useNavigate()
  const [userRequests,setUserRequests] =useState({
    usermail:"",
    fullNmae:""
  })
  const [userProfile,setUserProfile]=useState()

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
  
   

    const result1 =await getProfileUserRequestApi(reqHeader)
    console.log(result1);
    setUserProfile(result1.data)
    
    
  }

  const handleLogout =()=>{



setTimeout(()=>{
  toast.info("log out successfully")
navigate("/")

},3000)

  }
  
  
  useEffect(() => {
    
     getUserRequest()
    } ,[])


    useEffect(()=>{
       const user = JSON.parse(sessionStorage.getItem("existingUser"))
    if (user) {
    setUserRequests({
      usermail: user.email,       // use "email" from your object
      fullName: user.fullname     // use "fullname" from your object
    })
  }
    },[])

    console.log(userRequests);
    
  return (
    <>
   <Navbar/>
    <div className="min-h-screen w-full bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Profile Header */}
       <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 border-b pb-6">
          <FaUserCircle className="text-gray-400" size={100} />
          <div className="mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">{userRequests?.usermail}</h2>
            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <FaEnvelope /> {userRequests?.fullName}
            </p>
            
          </div>
        </div>

        {/* My Adoption Requests */}
        <div className="mt-10">
          
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <FaPaw /> My Adoption Requests
            </h3>
         
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Request 1 */}
           {userProfile?.length>0 ? userProfile.map((items)=>(<div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-md">
              <div>
                <h4 className="text-gray-800 font-bold text-lg">{items?.petName}</h4>
                <p className="text-gray-600 text-sm mt-1">{items?.breed} </p>
              </div>
            {items?.status == "pending"?<span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                Pending
              </span>: items?.status == "approved" ?<span className="text-sm font-medium text-green-600 bg-yellow-100 px-3 py-1 rounded-full">
               approved
              </span> : items?.status == "rejected" && <span className="text-sm font-medium text-red-600 bg-yellow-100 px-3 py-1 rounded-full">
               rejected
              </span> }
            </div>)) : <h1>no requests yet</h1> }

           

          
          </div>
          <Link to={"/myrequest"}><h3 className='text-blue-500 text-xl flex justify-end mt-5'>More.. </h3></Link>
        </div>

        {/* Settings Section */}
        <div className="mt-12 border-t pt-6 flex justify-center items-center gap-4">
         
          <button onClick={handleLogout} className="w-full md:w-1/2 bg-red-500 text-white py-3 rounded-xl hover:bg-red-400 transition">
            Logout
          </button>
        </div>
      </div>
    </div>    
    
    </>
   
  )
}

export default Profile