import React from 'react'

function Search() {
  return (
<>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or breed"
        className="w-full sm:w-64 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Age Filter */}
      <select className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Ages</option>
        <option>1-2 Years</option>
        <option>3-5 Years</option>
        <option>6+ Years</option>
      </select>

      {/* Gender Filter */}
      <select className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Genders</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>


</>



)
}

export default Search