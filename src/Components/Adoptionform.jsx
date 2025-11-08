import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { adoptionformApi, getAPetAdoptApi, updatePetApi } from '../../service/AllApi'
import { toast } from 'react-toastify'

function Adoptionform() {
  const [specificPet, setSpecificPet] = useState({})
  const { id } = useParams()
  

  const [adoptionDetails,setAdoptionDetails]=useState({
petName:"",
breed:"",
fullName:"",
phone:"",
reason:"",
location:"",
address:""




  })
  console.log(adoptionDetails);
  
  const navigate =useNavigate()

  const getSpecificpet = async () => {
    try {
      const result = await getAPetAdoptApi(id)
      setSpecificPet(result.data[0])
    } catch (error) {
      console.error('Error fetching pet:', error)
    }
  }
// console.log(specificPet);


const handleSubmit = async () => {
  const { petName, breed, fullName, phone, reason, location, address, petId } = adoptionDetails;

  if (!petName || !breed || !fullName || !phone || !reason || !location || !address) {
    toast.info("Please fill the form completely");
    return;
  }

  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warning("Please login first");
      navigate("/Auth");
      return;
    }

    const reqHeader = {
      "Authorization": `Bearer ${token}`,
    };

    const result = await adoptionformApi(adoptionDetails, reqHeader);
    console.log("Form result:", result);

    if (result.status === 200) {
      toast.success("Request submitted successfully");

      setAdoptionDetails({
        petName: "",
        breed: "",
        fullName: "",
        email: "",
        phone: "",
        reason: "",
        location: "",
        address: "",
        petId: "",
      });

      const updateResult = await updatePetApi({ petId: specificPet._id },reqHeader);
      console.log("Update Result:", updateResult);

      navigate("/myrequest");
    } else if (result.status === 406) {
      toast.warning(result.response?.data || "Form already submitted");
    } else {
      toast.error("Something went wrong");
    }

  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Server error, please try again");
  }
};


// const updateStatus = async ()=>{
  
// }

  useEffect(() => {
    
    getSpecificpet(id)
     
  }, [id])

  useEffect(()=>{
    if (specificPet) {
      setAdoptionDetails((prevDetails)=>({...prevDetails,petName:specificPet.petName,breed:specificPet.breed,petId:specificPet._id}))
      
    }

    

  },[specificPet])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pet Adoption Form
        </h2>

        {specificPet && (
          <form className="space-y-4">
            <input type="hidden" name="petId" value={specificPet._id} />

            {/* Pet Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Pet Name
              </label>
              <input
                value={adoptionDetails?.petName || ''}
               
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Breed */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Breed
              </label>
              <input
                value={adoptionDetails?.breed || ''}
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                                              value={adoptionDetails.fullName}

                onChange={(e)=>setAdoptionDetails({...adoptionDetails,fullName:e.target.value})}
                placeholder="Your full name"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

           
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                              onChange={(e)=>setAdoptionDetails({...adoptionDetails,phone:e.target.value})}
                              value={adoptionDetails.phone}

                type="tel"
                placeholder="+91 98765 43210"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
              location
              </label>
              <input
                              onChange={(e)=>setAdoptionDetails({...adoptionDetails,location:e.target.value})}
                              value={adoptionDetails.location}

                type="text"
                placeholder="location"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <textarea
                              onChange={(e)=>setAdoptionDetails({...adoptionDetails,address:e.target.value})}
                              value={adoptionDetails.address}

                placeholder="Your full address"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                rows={3}
              ></textarea>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Why do you want to adopt this pet?
              </label>
              <textarea
                              onChange={(e)=>setAdoptionDetails({...adoptionDetails,reason:e.target.value})}
                              value={adoptionDetails.reason}

                placeholder="Write your reason here"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                rows={4}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={()=>handleSubmit(specificPet?._id)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition mt-4"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Adoptionform
