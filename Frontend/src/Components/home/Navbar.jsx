import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white px-4 py-4 border-16 border-white z-50 text-slate-800 ">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" >
          <img src="image-Photoroom.png" alt="logo" className="w-48" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center  text-slate-800">
          <NavLink to="/about" className="px-4  border-r-2 border-gray-900  hover:text-orange-600 transition">
            About Us
          </NavLink>

          <NavLink to="/donate" className="px-4 border-r-2 border-gray-900 hover:text-orange-600 transition">
            Design For Change
          </NavLink>

          <NavLink to="/journey" className="px-4 border-r-2 border-gray-900 hover:text-orange-600 transition">
            What We Do
          </NavLink>

          <NavLink to="/Product" className="px-4 border-r-2 border-gray-900 hover:text-orange-600 transition">
            Get Involved
          </NavLink>

          <NavLink to="/Product" className="px-4 hover:text-orange-600 transition">
            Contact Us
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Search Icon */}
  <Search
    size={20}
    className="hidden md:block cursor-pointer hover:text-orange-600 transition"
  />

          {/* Donate Button */}
          <NavLink
            to="/contact"
            className="hidden md:block px-6 py-2 bg-orange-400 hover:bg-orange-700 active:scale-95 transition-all rounded-2xl text-white"
          >
            Donate For Change
          </NavLink>

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-slate-800 bg-white border-t pt-4">

          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/donate" onClick={() => setIsOpen(false)}>
            Design For Change
          </NavLink>

          <NavLink to="/journey" onClick={() => setIsOpen(false)}>
            What We Do
          </NavLink>

          <NavLink to="/Product" onClick={() => setIsOpen(false)}>
            Get Involved
          </NavLink>

          <NavLink
            to="/contact"
            className="px-4 py-2 bg-orange-500 rounded-full text-white text-center"
            onClick={() => setIsOpen(false)}
          >
            Donate For Change
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;