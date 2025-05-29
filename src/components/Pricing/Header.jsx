import React, { useState } from "react";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 ">
      <div className="container mx-auto flex items-center justify-between mr-40">
        
        {/* Logo */}
        <div className="flex items-center ml-30">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed lg:static top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:flex lg:w-auto lg:h-auto lg:shadow-none z-50`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 p-6 lg:p-0">
            <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-semibold">Search Jobs</a></li>
            <li><a href="/" className="block py-2 text-gray-700 hover:text-blue-500 font-semibold">Countries</a></li>
            <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-semibold">Resources</a></li>
            <li><a href="/Event" className="block py-2 text-gray-700 hover:text-blue-500 font-semibold">Events</a></li>
            <li><a href="/Pricing" className="block py-2 text-gray-700  hover:text-blue-500 font-semibold">Pricing</a></li>
            <li><a href="#" className="block py-2 text-gray-700 hover:text-blue-500 font-semibold">Looking for Job ↗</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
