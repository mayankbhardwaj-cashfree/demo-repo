import React from 'react';

// TODO: Replace with actual SVGs/icons and exact structure from Figma
export default function Navbar2025() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 bg-white shadow-md border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-xl text-gray-900">Brand</span>
      </div>
      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
      </div>
      {/* Profile/Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition">Sign Up</button>
        {/* Placeholder for avatar or menu */}
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </nav>
  );
}
