import React from 'react' 
import Banner from '../Components/home/Banner'
import Hero from '../Components/home/Hero'
import Navbar from '../Components/home/Navbar'
import Footer from '../Components/home/Footer'
const Home = () => {
    return (
        <div>
            <Banner />
            <Navbar/>
            <Hero/>
            {/* Mission & Vision */}
      <section id='mission' className="bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to create a trustworthy donation ecosystem
              where every contribution reaches the right hands.
              We aim to reduce barriers, remove doubts, and make
              giving accessible to everyone.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where helping others is simple,
              transparent, and impactful. A future where technology
              empowers compassion and builds lasting trust
              between donors and communities.
            </p>
          </div>

        </div>
      </section>
            <Footer />

        </div>
    )
}

export default Home