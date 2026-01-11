import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

import Navbar from "../Components/home/Navbar";
import Banner from "../Components/home/Banner";
import Footer from "../Components/home/Footer";

/* -------------------- SECTIONS -------------------- */

const Section1 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress,  [0, 0, 0.8, 1],
  [-5, 0, 0, 0]);

  return (
    <motion.section
    container={container}
  style={{ scale, rotate }}
  className="
    sticky top-0 h-screen
    flex items-center justify-center
    bg-orange-100
  "
>
  {/* Glass Card */}
  <div
    className="
      max-w-6xl w-full mx-6
      flex flex-col md:flex-row items-center gap-10
      rounded-3xl
      bg-white/25
      backdrop-blur-xl
      border border-white/30
      shadow-2xl
      p-10
    "
  >
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/image.png" 
        alt="TGID Campus"
        className="
          w-full h-300px
          object-cover
          rounded-2xl
          shadow-lg
        "
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-black">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        TGID
      </h2>

      <p className="text-base md:text-lg leading-relaxed opacity-90">
        TGID–SDI, established in Telangana, is a global college dedicated
        to design, innovation, and creative excellence—empowering students
        to turn ideas into meaningful global impact.
      </p>
    </div>
  </div>
</motion.section>

  );
};

const Section2 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress,  [0, 0, 0.8, 1],
  [-5, 0, 0, 0]);

  return (
    <motion.section
      container={container}
      style={{ scale, rotate }}
      className="
        sticky top-0
        h-screen
        bg-orange-200
        backdrop-blur-sm  border border-white/30 shadow-lg rounded-2xl
        text-black
        px-6 md:px-16
        flex
        items-center
      "
    >
      {/* Glass Card */}
  <div
    className="
      max-w-6xl w-full mx-23
      flex flex-col md:flex-row items-center gap-10
      rounded-3xl
      bg-white/25
      backdrop-blur-xl
      border border-white/30
      shadow-2xl
      p-10
    "
  >
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/image.png" 
        alt="TGID Campus"
        className="
          w-full h-300px
          object-cover
          rounded-2xl
          shadow-lg
        "
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-black">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        TGID
      </h2>

      <p className="text-base md:text-lg leading-relaxed opacity-90">
        TGID–SDI, established in Telangana, is a global college dedicated
        to design, innovation, and creative excellence—empowering students
        to turn ideas into meaningful global impact.
      </p>
    </div>
  </div>
    </motion.section>
  );
};

const Section3 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
   const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress,  [0, 0.2, 0.8, 1],
  [-5, 0, 0, 0]);

  return (
    <motion.section
      container={container}
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-orange-300 backdrop-blur-sm  border border-white/30 shadow-lg rounded-2xl flex items-center justify-center text-white text-[3.5vw]"
    >
      {/* Glass Card */}
  <div
    className="
      max-w-6xl w-full mx-6
      flex flex-col md:flex-row items-center gap-10
      rounded-3xl
      bg-white/25
      backdrop-blur-xl
      border border-white/30
      shadow-2xl
      p-10
    "
  >
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/image.png" 
        alt="TGID Campus"
        className="
          w-full h-300px
          object-cover
          rounded-2xl
          shadow-lg
        "
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-black">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        TGID
      </h2>

      <p className="text-base md:text-lg leading-relaxed opacity-90">
        TGID–SDI, established in Telangana, is a global college dedicated
        to design, innovation, and creative excellence—empowering students
        to turn ideas into meaningful global impact.
      </p>
    </div>
  </div>
    </motion.section>
  );
};

const Section4 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress,  [0, 0.2, 0.8, 1],
  [-5, 0, 0, 0]);

  return (
    <motion.section
      container={container}
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-orange-400 backdrop-blur-sm  border border-white/30 shadow-lg rounded-2xl flex items-center justify-center text-white text-[3.5vw]"
    >
      {/* Glass Card */}
  <div
    className="
      max-w-6xl w-full mx-6
      flex flex-col md:flex-row items-center gap-10
      rounded-3xl
      bg-white/25
      backdrop-blur-xl
      border border-white/30
      shadow-2xl
      p-10
    "
  >
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/image.png" 
        alt="TGID Campus"
        className="
          w-full h-300px
          object-cover
          rounded-2xl
          shadow-lg
        "
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-black">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        TGID
      </h2>

      <p className="text-base md:text-lg leading-relaxed opacity-90">
        TGID–SDI, established in Telangana, is a global college dedicated
        to design, innovation, and creative excellence—empowering students
        to turn ideas into meaningful global impact.
      </p>
    </div>
  </div>
    </motion.section>
  );
};

/* -------------------- PAGE -------------------- */

const Product = () => {
  

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Fixed header */}
      <Banner />
      <Navbar />

      {/* Scroll container */}
      <main
        className="relative h-[400vh] pt-32"
      >
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </main>
      <div className="pt-32">
        <Footer /> 
      </div>
       
    </>
    
  );
};

export default Product;
