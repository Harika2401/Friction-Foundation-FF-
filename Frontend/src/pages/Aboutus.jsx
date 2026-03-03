import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";
import Banner from "../Components/home/Banner";

// ✅ Import local images
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

// ✅ Scroll Animation Hook (Fade + Slide on Scroll)
const useScrollReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return [ref, show];
};

const AboutUs = () => {
  const [sec1Ref, sec1Show] = useScrollReveal();
  const [sec2Ref, sec2Show] = useScrollReveal();
  const [sec3Ref, sec3Show] = useScrollReveal();
  const [cardsRef, cardsShow] = useScrollReveal();
  const [miniImagesRef, miniImagesShow] = useScrollReveal();
  const [whatRef, whatShow] = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Navbar />

      {/* HEADER SECTION */}
      <header className="relative top-11 w-full overflow-hidden bg-[#F2F4F7] px-4 py-16 text-center md:py-24">
        
    {/* ── WHAT IS FRICTIONFOUNDATION SECTION ── */}
         <section
        ref={whatRef}
        style={{
          background: "#F2F4F7",
          padding: "64px 8%",
          fontFamily: "Poppins, sans-serif",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          opacity: whatShow ? 1 : 0,
          transform: whatShow ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Centered heading with wavy underline */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-block", position: "relative" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: "800",
                color: "#1a1a3e",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "0 0 6px",
              }}
            >
              WHAT IS FRICTIONFOUNDATION
            </h2>
            {/* Wavy orange SVG underline — 100% width of heading */}
            <svg
              width="100%"
              height="10"
              viewBox="0 0 300 10"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <path
                d="M2 7 Q37 2 75 7 Q113 12 150 7 Q187 2 225 7 Q263 12 298 7"
                stroke="#ff8500"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* LEFT — orange-bordered text block + button */}
          <div style={{ flex: 1 }}>
            {/* Orange left border quote block */}
            <div
              style={{
                borderLeft: "5px solid #ff8500",
                paddingLeft: "28px",
                marginBottom: "40px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  color: "#1a1a3e",
                  lineHeight: "1.75",
                  margin: 0,
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                <strong>FrictionFoundation (FF)</strong> is a design-led change
                ecosystem that empowers students, institutions, and communities{" "}
                <strong>
                  to identify real problems, design thoughtful solutions, and
                  create measurable impact
                </strong>{" "}
                through innovation, collaboration, and action.
              </p>
            </div>

            {/* Explore button */}
            <button
              onClick={() => (window.location.href = "/ndis-2026")}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e67600")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "#ff8500")
              }
              style={{
                background: "#ff8500",
                color: "#fff",
                border: "none",
                padding: "16px 40px",
                borderRadius: "40px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s ease",
                boxShadow: "0 8px 24px rgba(255,133,0,0.35)",
                letterSpacing: "0.3px",
              }}
            >
              Explore NDIS-2026
            </button>
          </div>

          {/* RIGHT — FF logo/signage image */}
          <div style={{ flexShrink: 0, width: "360px" }}>
            <img
              src={about1}
              alt="Friction Foundation signage"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 12px 36px rgba(0,0,0,0.13)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

  
      </header>

      
     


      <Footer />
    </div>
  );
};

export default AboutUs;