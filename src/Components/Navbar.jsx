// Navbar.jsx
import React, { useEffect, useState } from "react";
import { HiMenu, HiX, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";


const Navbar = () => {
   const [token,setToken]=useState("")
  const [isOpen, setIsOpen] = useState(false);
 
useEffect(()=>{
   if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      
    }
},[])
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 px-4">
        <div className="flex-shrink-0">
         <Link to={"/"}>
            <span
              className="text-xl font-bold text-indigo-600 cursor-pointer"
             
            >
              PetAdopt
            </span>
         </Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link to={"/"}>
            <span
              className="text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
            >
              Home
            </span>
          </Link>
          <Link to={"/browser"}>
            <span
              className="text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
            >
              Browse Pets
            </span>
          </Link>
        
       { !token?<Link to={"/auth"}>
            <button
              className="bg-indigo-600 text-white px-2 py-1 rounded-sm text-sm hover:bg-indigo-500 cursor-pointer"
            >
              log in
            </button>
        </Link> :
          <Link to={"/profile"}>
            <HiUser
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              size={22}
            />
          </Link>}
           <Link to={"/admin"}>
             <span
                className="text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
              >
              admin login
              </span>
           </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md flex flex-col">
         <Link to={"/"}>
            <span
              className=" py-1 text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </span>
         </Link>
          <Link to={"/browser"}>
            <span
              className=" py-1 text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Browse Pets
            </span>
          </Link>
          <span
            className="block py-1 text-gray-700 hover:text-indigo-600 text-sm cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Login
          </span>
          <div className="flex justify-between">
              
              <HiUser
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
                size={22}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <button
                className="  bg-indigo-600 text-white text-center rounded-sm mt-1 text-sm hover:bg-indigo-500 cursor-pointer py-1 px-2"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Sign Up
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
