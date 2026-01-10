import React from 'react'
const Navbar = () => {
    return (
        <nav className="fixed top-10 left-0 z-40 w-full h-70px flex items-center justify-between px-6 md:px-20 lg:px-24 xl:px-40 text-sm  text-orange-800 bg-linear-to-r from-orange-200 via-orange-100 to-orange-50">
                    <a href="/">
                        <img src="image-Photoroom.png" alt="logo" className='w-60' />


                    </a>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-orange-600 transition">Donate us</a>
                        <a href="#features" className="hover:text-orange-600 transition">
                            founder Journey
                        </a>
                        <a href="#testimonials" className="hover:text-orange-600 transition">Partner with us</a>
                        <a href="#cta" className="hover:text-orange-600 transition">About us</a>
                    </div>

                    <div className="flex gap-2">
                        <a href="" className="hidden md:block px-6 py-2 bg-orange-500 hover:bg-orange-700 active:scale-95 transition-all rounded-full text-white">
                            Contact Us
                        </a>
                        
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>
    )
    }

    export default Navbar
