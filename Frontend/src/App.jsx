import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Donate from "./pages/DonationPage";
import Founder from "./pages/Founder";

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<AboutUs />} />

        <Route path="product" element={<Product />} />

        <Route path="contact" element={<Contact />} />

        <Route path="journey" element={<Founder />} />

        <Route path="donate" element={<Donate />} />

      </Route>

    </Routes>
  );
};

export default App;