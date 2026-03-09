import React from "react";

import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";
import DesignHero from "../Components/DesignHero";

import AboutUs from "./Aboutus";
import Donate from "./DonationPage";
import Founder from "./Founder";
import Product from "./Product";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div style={{ paddingTop: "100px" }}>

        <DesignHero />

        {/* About Section */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Donate Section */}
        <section id="donate">
          <Donate />
        </section>

        {/* Founder Section */}
        <section id="founder">
          <Founder />
        </section>

        {/* Product / Design For Change Section */}
        <section id="product">
          <Product />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

      </div>

      

    </div>
  );
};

export default Home;