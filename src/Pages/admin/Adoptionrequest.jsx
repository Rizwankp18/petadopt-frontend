import React, { useEffect, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AllUsersRequestsApi,  updateStatusApi, updateStatusRejectApi } from '../../../service/AllApi'

function Adoptionrequest() {
  const [allUsersRequest, setAllUsersRequest] = useState([])
  const [approve, setApprove] = useState(false)
  const [reject,SetReject]= useState(false)

  const getAllUsers = async () => {
    const result = await AllUsersRequestsApi()
    console.log(result)

    setAllUsersRequest(result.data)
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
console.log(allUsersRequest);

  useEffect(() => {
    getAllUsers()
  }, [approve,reject])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">All Adoption Requests</h1>
        <Link to="/dashboard">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
            Back to Dashboard
          </button>
        </Link>
      </div>

      {/* Responsive Table */}
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 overflow-x-auto">
        {allUsersRequest?.length > 0 ? (
          <table className="w-full min-w-[900px] table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm sm:text-base">
                <th className="py-2 px-3 sm:px-4">Pet</th>
                <th className="py-2 px-3 sm:px-4">User</th>
                <th className="py-2 px-3 sm:px-4">Email</th>
                <th className="py-2 px-3 sm:px-4">Phone</th>
                <th className="py-2 px-3 sm:px-4">Address</th>
                <th className="py-2 px-3 sm:px-4">Requested On</th>
                <th className="py-2 px-3 sm:px-4">Status</th>
                <th className="py-2 px-3 sm:px-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {allUsersRequest.map((items) => (
                <tr key={items._id} className="border-b hover:bg-gray-50 text-sm sm:text-base">
                  <td className="py-2 px-3 sm:px-4">{items?.petName}</td>
                  <td className="py-2 px-3 sm:px-4">{items?.fullName}</td>
                  <td className="py-2 px-3 sm:px-4">{items?.usermail}</td>
                  <td className="py-2 px-3 sm:px-4">{items?.phone}</td>
                  <td className="py-2 px-3 sm:px-4">{items?.address}</td>
                  <td className="py-2 px-3 sm:px-4">
                    {new Date(items.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>

                  <td className="py-2 px-3 sm:px-4 font-semibold">
                    {items.status === 'pending' && (
                      <span className="text-yellow-600">Pending</span>
                    )}
                    {items.status === 'approved' && (
                      <span className="text-green-600">Approved</span>
                    )}
                    {items.status === 'rejected' && (
                      <span className="text-red-600">Rejected</span>
                    )}
                  </td>

                  { <td className="py-2 px-3 sm:px-4 flex flex-col sm:flex-row gap-2 justify-center">
  {items?.status == "pending" && (
    <>
      <button
        onClick={() => handleApprove(items?._id)}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 flex items-center gap-1 justify-center"
      >
        <FaCheck /> Approve
      </button>
      <button
        onClick={() => handleReject(items?._id, items?.petId)}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 flex items-center gap-1 justify-center"
      >
        <FaTimes /> Reject
      </button>
    </>
  )}

  {items?.status == "approved" && (
    <button
      onClick={() => handleReject(items?._id, items?.petId)}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 flex items-center gap-1 justify-center"
    >
      <FaTimes /> Reject
    </button>
  )}

  {items?.status == "rejected" && null /* show nothing */}
</td>
}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center py-10 text-lg">No adoption requests yet.</p>
        )}
      </div>
    </div>
  )
}

export default Adoptionrequest
