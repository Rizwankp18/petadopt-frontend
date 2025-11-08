// PetCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const PetCard = () => {




  
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://placedog.net/400/300?id=1"
        alt="Bella"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Bella</h2>
        <p className="text-gray-600">Golden Retriever</p>
        <p className="text-gray-600">2 years old • Female</p>

       

       <Link to={"/petdetails"}>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition-colors">
            Adopt Me
          </button>
       </Link>
      </div>
    </div>
  );
};

export default PetCard;
