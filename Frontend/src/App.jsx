import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/Aboutus'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Founder from './pages/Founder'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/journey' element={<Founder />} />
    </Routes>

    </>
  )
}

export default App
