import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">PetAdopt</h2>
          <p className="text-sm leading-relaxed">
            Connecting loving families with pets in need of a forever home.  
            Together, we create happy homes and wagging tails 🐾
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">Browse Pets</li>
            <li className="hover:text-indigo-400 cursor-pointer">About Us</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📍 Thrissur, Kerala, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ info@petadopt.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
         PetAdopt. All rights reserved.
      </div>
    </div>
  )
}

export default Footer