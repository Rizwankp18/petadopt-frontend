import React, { useEffect, useState } from 'react'
import PetCard from '../../Components/Petcard'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import { getHomePetApi } from '../../../service/AllApi'
import AnimationSection from '../../Components/AnimationSection'

function Home() {
  const [homePet,setHomePet]=useState()


  const getHomePet = async ()=>{
    const result = await getHomePetApi()
    console.log(result);
    setHomePet(result.data)
    
  }

useEffect(()=>{
  getHomePet()
},[])


  return (
   <>
   <Navbar/>
     <AnimationSection>
       <div className="min-h-screen bg-gray-50">
          <section
            className="relative bg-cover bg-center py-20 px-6 text-center"
            style={{
              backgroundImage:
                "url('https://placedog.net/1000/600?id=12')", 
            }}
          >
            <div className=" bg-black bg-opacity-50"></div>
    
            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-bold mb-4">
                Find Your New Best Friend 🐾
              </h1>
              <p className="max-w-xl mx-auto mb-6 text-lg">
                Adopt a loving pet and give them a forever home. Browse our pets and
                start your adoption journey today!
              </p>
              <Link to={"/browser"}>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-500 transition">
                  Browse Pets
                </button>
              </Link>
            </div>
          </section>
    
          <section className="max-w-7xl mx-auto py-12 px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Featured Pets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              { homePet?.length>0 ? homePet?.map((item)=>( <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={item?.imgUrl}
          alt={item?.petName}
        />
  
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{item?.petName}</h2>
          <p className="text-gray-600">{item?.breed}</p>
          <p className="text-gray-600">{item?.age} years old • {item?.gender}</p>
  
         
  
        
        </div>
      </div>)): <h1 className='text-4xl text-center'>no pets .....</h1>   }
            
             
            </div>
          </section>
    
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            At <span className="font-semibold text-indigo-600">PetAdopt</span>, we
            believe every pet deserves a loving home. Our mission is to connect
            families with pets in need and make the adoption journey smooth and
            joyful. We collaborate with local shelters and rescue groups to bring
            you a wide variety of lovable companions waiting to be adopted.
          </p>
          <p className="text-gray-600  mb-4">
            From playful puppies and kittens to calm senior pets, we make it easy to
            find the perfect match for your lifestyle. Adoption not only saves a
            life, but it also brings endless love, loyalty, and joy into your home.
          </p>
          <p className="text-gray-600 ">
            Join our community of pet lovers today and make a difference in the life
            of a furry friend. Together, we can create more happy homes and wagging
            tails. 🐾
          </p>
        </div>
    
        <div className="flex justify-center">
          <img
            src="https://placedog.net/500/400?id=15"
            alt="Adopted Pet"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
    
     
        </div>
     </AnimationSection>
       <Footer/>
   </>
  )
}

export default Home