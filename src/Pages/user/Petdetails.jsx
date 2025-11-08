import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { getAPetApi } from '../../../service/AllApi'

function Petdetails() {

  const [specificPet,setSpecificPet]=useState([])


 const {id }= useParams()
console.log(id);

const getSpecificpet= async (id)=>{
   const result = await getAPetApi(id)
  //  console.log(result);
   setSpecificPet(result.data)
   
}
console.log(specificPet);


useEffect(()=>{
  getSpecificpet(id)
},[])
  





  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gray-50 py-12 px-6 ">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-20">
      { specificPet?.length>0 ? specificPet?.map((item)=>(<div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={item?.imgUrl}
              alt={item?.petName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{item?.petName}</h1>
            <p className="text-gray-600 mb-4">{item?.breed} • {item?.gender} • {item?.age} Years Old</p>

            

            <p className="text-gray-700 leading-relaxed mb-6">
              {item?.about}
            </p>

            <ul className="text-gray-600 text-sm space-y-2 mb-6">
              <li>💉 Vaccinated: {item?.Vaccinated}</li>
              <li>🍖 Diet: {item?.diet}</li>
              <li>👨‍⚕️ Vet Checkup:  {item?.vetCheck}</li>
            </ul>

            <div className="flex gap-4">
             <Link to={`/adoptionForm/${item?._id}`}>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
                  Adopt Me
                </button>
             </Link>
             
            </div>
          </div>
        </div>

      )) : <h1>no pet</h1> }
      </div>
    </div>
   
   
  <Footer/>
   </>
  
  )
}

export default Petdetails