import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { getAllPetApi } from '../../../service/AllApi'
import AnimationSection from '../../Components/AnimationSection'

function Browser() {
  const [searchKey, setSearchKey] = useState("")
  const [token, setToken] = useState()
  const [allpets, setAllPets] = useState([])
  const [ageFilter, setAgeFilter] = useState('All Ages');
  const [genderFilter, setGenderFilter] = useState('All Genders');
  const [filteredPets, setFilteredPets] = useState([]);

  const getAllPets = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getAllPetApi(reqHeader, searchKey)
    // console.log(result)
    setAllPets(result.data)
  }
console.log(filteredPets);

  console.log(allpets)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      setToken(tok)
      getAllPets(tok)
    }
  }, [searchKey])

console.log(ageFilter);
console.log(genderFilter);


  useEffect(()=>{

      let updatedPets = [...allpets];


    if (ageFilter !== 'All Ages') {
     updatedPets=updatedPets.filter((pet) => {
        const ageNum = parseInt(pet.age); 
        console.log(ageNum);
        
        if (ageFilter == '1 Years') return ageNum ==1;
        if (ageFilter =='2 Years') return ageNum ==2;
        if (ageFilter == '3+ years') return ageNum >= 3;
        return true;
      });
    }

    if (genderFilter !== 'All Genders') {
    updatedPets=updatedPets.filter(
        (pet) => pet.gender.toLowerCase() == genderFilter.toLowerCase()
      );
    }

    setFilteredPets(updatedPets);

  },[ageFilter,genderFilter,allpets])

  return (
    <>
      <Navbar />
      <br /><br /><br />

     <AnimationSection>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
     
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="Search by name or breed"
          className="w-full sm:w-64 px-3 py-2 rounded-lg border border-gray-300"
        />

        {/* Age Filter */}
        <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-300">
          <option>All Ages</option>
          <option>1 Years</option>
          <option>2 Years</option>
          <option>3+ years</option>
        </select>

        {/* Gender Filter */}
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-300">
          <option>All Genders</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* 🐾 Pets List */}
   
        <div className="min-h-screen bg-gray-50 py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
              Adopt Pets
            </h1>
  
            {token ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPets?.length > 0 ? (
                  filteredPets.map((items) => (
                    <div
                      key={items?._id}
                      className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        className="w-full min-h-screen object-cover"
                        src={items?.imgUrl}
                        alt={items?.petName}
                      />
  
                      <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          {items?.petName}
                        </h2>
                        <p className="text-gray-600">{items?.breed}</p>
                        <p className="text-gray-600">
                          {items?.age} years old • {items?.gender}
                        </p>
  
                        {/* ✅ Static Status */}
                        <p className="text-sm mt-1">
                          <span className="font-medium text-gray-700">Status:</span>{" "}
                          {items?.status == "Available"?<span className="text-green-600">Available</span>:
                           <span className="text-red-600">unavailable</span>}
                        </p>
  
                            {items?.status == "Available"?<Link to={`/petdetails/${items?._id}`}>
                      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                            Adopt Me
                          </button>
                        </Link>:<button className="mt-4 w-full bg-slate-600 text-white py-2 rounded-lg ">
                            already Adopted
                          </button>}
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No pets found...</h1>
                )}
              </div>
            ) : (
              <h1 className="text-center text-2xl">
                Please <Link to={"/Auth"}><span className="text-blue-600">login</span></Link> to see the pets.
              </h1>
            )}
          </div>
        </div>
     </AnimationSection>

      <Footer />
    </>
  )
}

export default Browser
