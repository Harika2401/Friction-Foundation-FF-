import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-10 left-0 z-40 w-full h-[70px] flex items-center justify-between px-6 md:px-20 lg:px-24 xl:px-40 text-sm text-orange-800 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50">

      {/* Logo */}
      <NavLink to="/">
        <img src="image-Photoroom.png" alt="logo" className="w-60" />
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-slate-800">
        <NavLink to="/donate" className="hover:text-orange-600 transition">
          Donate us
        </NavLink>

        <NavLink to="/journey" className="hover:text-orange-600 transition">
          Founder Journey
        </NavLink>

        <NavLink to="/partners" className="hover:text-orange-600 transition">
          Partner with us
        </NavLink>

        {/* ✅ THIS FIXES YOUR ISSUE */}
        <NavLink to="/about" className="hover:text-orange-600 transition">
          About us
        </NavLink>
      </div>

      {/* Contact */}
      <div className="flex gap-2">
        <NavLink
          to="/contact"
          className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-700 active:scale-95 transition-all rounded-full text-white"
        >
          Contact Us
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;
