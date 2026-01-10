import React from "react";
import Navbar from '../Components/home/Navbar'
import Footer from '../Components/home/Footer'
import Banner from "../Components/home/Banner";

const AboutUs = () => {
  return (
    <div className="w-full bg-white">
        <Navbar/>
      <header className="relative w-full overflow-hidden bg-slate-50 px-4 py-15 top-11 pt-[180px] text-center md:py-24">
        {/* Pattern Background Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #cbd5e1 0px,
              #cbd5e1 1px,
              transparent 1px,
              transparent 24px
            )`,
          }}
        />
       <Banner/>

        {/* Header Content */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-[#022539] md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#575757] md:text-xl">
            We are dedicated to innovating the way you interact with technology.
            Simple, efficient, and built for the future.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto mt-12 mb-12 w-full max-w-7xl px-4 text-center md:mb-20 md:text-start">

        {/* Section 1 */}
        <div className="flex flex-col gap-8 md:flex-row lg:items-center lg:gap-16">
          <div className="h-[300px] w-full flex-1 md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
              alt="All gadgets on a table"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-semibold text-[#022539] lg:text-3xl">
              About BestTech
            </h2>
            <p className="leading-relaxed text-[#575757]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              aspernatur porro quae, expedita accusantium minus voluptate.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="my-16 flex flex-col-reverse gap-8 md:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-semibold text-[#022539] lg:text-3xl">
              Who we are?
            </h2>
            <p className="leading-relaxed text-[#575757]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              expedita tenetur est ipsa sit.
            </p>
          </div>
          <div className="h-[300px] w-full flex-1 md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Team working together"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="my-16 flex flex-col gap-8 md:flex-row lg:items-center lg:gap-16">
          <div className="h-[300px] w-full flex-1 md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Laptop on table"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-semibold text-[#022539] lg:text-3xl">
              What we do?
            </h2>
            <p className="leading-relaxed text-[#575757]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              impedit optio dicta!
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
