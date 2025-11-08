import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { AddPetApi } from '../../../service/AllApi'
import { useNavigate } from 'react-router-dom'
import ImageAnimation from '../../Components/ImageAnimation'

function Addpet() {
  const navigate = useNavigate()
  const [addPet, setAddPet] = useState({
    petName: "",
    breed: "",
    age: "",
    Vaccinated: "",
    diet: "",
    vetCheck: "",
    gender: "",
    about: "",
    imgUrl: ""
  })

  const handleAdd = async () => {
    const { petName, breed, age, Vaccinated, diet, vetCheck, gender, about, imgUrl } = addPet

    if (!petName || !breed || !age || !Vaccinated || !diet || !vetCheck || !gender || !about || !imgUrl) {
      toast.info("Fill the form completely")
    } else {
      const result = await AddPetApi(addPet)
      console.log(result)
      setAddPet(result.data)

      if (result.status == 200) {
        toast.success("Pet added successfully")
        setAddPet({
          petName: "",
          breed: "",
          age: "",
          Vaccinated: "",
          diet: "",
          vetCheck: "",
          gender: "",
          about: "",
          imgUrl: ""
        })
        navigate("/managepet")
      } else if (result.status == 406) {
        toast.warning("Pet already added")
        setAddPet({
          petName: "",
          breed: "",
          age: "",
          Vaccinated: "",
          diet: "",
          vetCheck: "",
          gender: "",
          about: "",
          imgUrl: ""
        })
      } else {
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <>
    <div className="min-h-screen
bg-cover   "
      style={{
        backgroundImage:
          "url('https://www.oaklandmagazine.com/wp-content/uploads/2022/06/2173842_xl-1280x640.jpg')"
      }} >
       <div className='grid md:grid-cols-2'>

          <div className="shadow-2xl ms-5 p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Add New Pet
              </h1>
    
              <form className="flex flex-col gap-4">
                {/* Pet Name */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Pet Name</label>
                  <input
                    value={addPet.petName}
                    onChange={(e) => setAddPet({ ...addPet, petName: e.target.value })}
                    type="text"
                    placeholder="Enter pet name"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Breed */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Breed</label>
                  <input
                    value={addPet.breed}
                    onChange={(e) => setAddPet({ ...addPet, breed: e.target.value })}
                    type="text"
                    placeholder="Enter breed"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Age */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Age</label>
                  <input
                    value={addPet.age}
                    onChange={(e) => setAddPet({ ...addPet, age: e.target.value })}
                    type="text"
                    placeholder="Enter age (e.g., 2 yrs)"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* About */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">About Pet</label>
                  <input
                    value={addPet.about}
                    onChange={(e) => setAddPet({ ...addPet, about: e.target.value })}
                    type="text"
                    placeholder="Description"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Vaccinated */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Vaccinated</label>
                  <input
                    value={addPet.Vaccinated}
                    onChange={(e) => setAddPet({ ...addPet, Vaccinated: e.target.value })}
                    type="text"
                    placeholder="Yes or No"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Diet */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Diet</label>
                  <input
                    value={addPet.diet}
                    onChange={(e) => setAddPet({ ...addPet, diet: e.target.value })}
                    type="text"
                    placeholder="Food details"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Vet Checked */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Vet Checked</label>
                  <input
                    value={addPet.vetCheck}
                    onChange={(e) => setAddPet({ ...addPet, vetCheck: e.target.value })}
                    type="text"
                    placeholder="Completed or not"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Gender */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Gender</label>
                  <select
                    value={addPet.gender}
                    onChange={(e) => setAddPet({ ...addPet, gender: e.target.value })}
                    className="border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
    
             
    
                {/* Image Upload */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-700">Upload Image</label>
                  <input
                    value={addPet.imgUrl}
                    onChange={(e) => setAddPet({ ...addPet, imgUrl: e.target.value })}
                    type="text"
                    placeholder="Image URL"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                </div>
    
                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleAdd}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition mt-4"
                >
                  Add Pet
                </button>
              </form>
            </div>
          </div>
          <div className='grid md:grid-cols flex-col justify-center items-center'>
<ImageAnimation/>

          </div>
       </div>
    </div>
    </>
  )
}

export default Addpet
