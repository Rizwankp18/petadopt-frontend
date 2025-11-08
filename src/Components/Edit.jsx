import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSpecificPetDetailApi, updatePetDetailsApi } from '../../service/AllApi'
import { toast } from 'react-toastify'

function Edit() {

  const navigate = useNavigate()


const [getPet,setGetPet]=useState({
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
console.log(getPet);


const [petdetails,setPetDetails]=useState({})


 const {id }= useParams()

const getSpecificpetDetails = async (id)=>{
     
const result = await getSpecificPetDetailApi(id)
console.log(result);
setGetPet(result.data[0])
setPetDetails(result.data[0])

}


const handleReset = ()=>{

setGetPet(petdetails)

}



const handleUpdate = async ()=>{
     const { petName, breed, age, Vaccinated, diet, vetCheck, gender, about, imgUrl } = getPet
    
        if (!petName || !breed || !age || !Vaccinated || !diet || !vetCheck || !gender || !about || !imgUrl) {
          toast.info("Fill the form completely")
        } else{
         const result = await updatePetDetailsApi(getPet)
         console.log(result);

          if (result.status == 200) {
                 toast.success("Pet updated successfully")
                 setGetPet({
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
               }  else {
                 toast.error("Something went wrong")
               }
         

        }




}


useEffect(()=>{
getSpecificpetDetails(id)
setPetDetails()

},[])





    return (

    <>

    
                
           
<div className="min-h-screen
bg-cover   "
      style={{
        backgroundImage:
          "url('https://www.oaklandmagazine.com/wp-content/uploads/2022/06/2173842_xl-1280x640.jpg')"
      }}>
                <div id="div" aria-labelledby="div-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <div className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></div>

                    <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className=" bg-slate-800  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className='flex items-center justify-between text-white '>
                                    <h1>Edit pet details</h1>
                                  
                                </div>
                            </div>
                            <div className='px-4 py-1'>
                                <div className='md:grid grid-cols-2 py-8 gap-1'>
                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Pet Name</label>
                                        <input

                                            type="text"
                                            placeholder="Enter pet name"
                                            className="border border-gray-300 rounded px-3 py-2"
                                            value={getPet?.petName}
                                            onChange={(e)=>setGetPet({...getPet,petName:e.target.value})}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Breed</label>
                                        <input
                                            value={getPet?.breed}
                                            onChange={(e)=>setGetPet({...getPet,breed:e.target.value})}

                                            type="text"
                                            placeholder="Enter breed"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Age</label>
                                        <input
                                            value={getPet?.age}
                                            onChange={(e)=>setGetPet({...getPet,age:e.target.value})}

                                            type="text"
                                            placeholder="Enter age (e.g., 2 yrs)"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">About Pet</label>
                                        <input
                                            value={getPet?.about}
                                            onChange={(e)=>setGetPet({...getPet,about:e.target.value})}

                                            type="text"
                                            placeholder="Description"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Vaccinated</label>
                                        <input
                                            value={getPet?.Vaccinated}
                                            onChange={(e)=>setGetPet({...getPet,Vaccinated:e.target.value})}

                                            placeholder="Yes or No"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Diet</label>
                                        <input
                                            value={getPet?.diet}
                                            onChange={(e)=>setGetPet({...getPet,diet:e.target.value})}

                                            type="text"
                                            placeholder="Food details"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Vet Checked</label>
                                        <input
                                            value={getPet?.vetCheck}
                                            onChange={(e)=>setGetPet({...getPet,vetCheck:e.target.value})}

                                            type="text"
                                            placeholder="Completed or not"
                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>


                                    <div className="flex flex-col gap-3">
                                        <label className="mb-1 text-gray-700">Gender</label>
                                        <input
                                            value={getPet?.gender}
                                            onChange={(e)=>setGetPet({...getPet,gender:e.target.value})}

                                            type="text"

                                            className="border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>



                                    <div className="flex flex-col justify-center">
                                        <label className="mb-1 text-gray-700">Upload Image</label>
                                        <input
                                          value={getPet?.imgUrl}
                                            onChange={(e)=>setGetPet({...getPet,imgUrl:e.target.value})}

                                            type="text"
                                            placeholder="Image URL"
                                            className="border border-gray-300 rounded px-4 py-2 w-80"
                                        />
                                    </div>

                                    <div className='mt-5'>
                                        <div className='flex justify-end pb-3 gap-2 mt-5'>
                                            <button onClick={handleUpdate} className='bg-green-700 text-white px-3 py-2 rounded'>update</button>

                                            <button onClick={handleReset} type='button' className='bg-red-700   text-white px-3 rounded'>Reset</button>
                                        </div>
                                    </div>
                                </div>
                                
                            
                        </div>
                    </div>
                </div></div></div>



            </>
   
  )
}

            export default Edit