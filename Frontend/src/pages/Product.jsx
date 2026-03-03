import React from "react";
import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";
import Banner from "../Components/home/Banner";
import donate from "../assets/donate.jpg";
import donate1 from "../assets/donate1.jpg";

const Donate = () => {
  const handleDonate = () => {
    window.location.href = "/payment?status=success";
  };

  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <div style={{ paddingTop: "115px", fontFamily: "Poppins, sans-serif" }}>

       

        {/* DONATE FOR CHANGE SECTION */}
        <section
          style={{
            background: "#F2F4F7",
            padding: "64px 8%",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ display: "inline-block", marginBottom: "6px" }}>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "800",
                  color: "#1a1a3e",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  margin: "0 0 6px",
                }}
              >
                DONATE FOR CHANGE
              </h2>
              {/* Wavy orange underline */}
              <div style={{ textAlign: "center" }}>
                <svg width="160" height="10" viewBox="0 0 160 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7 Q20 2 40 7 Q60 12 80 7 Q100 2 120 7 Q140 12 158 7" stroke="#ff8500" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <p
              style={{
                fontSize: "15px",
                color: "#555",
                fontStyle: "italic",
                margin: "8px 0 20px",
              }}
            >
              (Designing change requires support, resources, and access)
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#1a1a3e",
                maxWidth: "860px",
                margin: "0 auto",
                lineHeight: "1.75",
                textAlign: "center",
              }}
            >
              Your contribution to <strong>Friction Foundation</strong> enables students and communities to{" "}
              <strong>identify real problems, design meaningful solutions, and create lasting impact</strong>{" "}
              across districts and states.
            </p>
          </div>

          {/* Content Row */}
          <div
            style={{
              display: "flex",
              gap: "52px",
              alignItems: "flex-start",
              marginTop: "12px",
            }}
          >
            {/* Left Image — tall, matching screenshot */}
            <div style={{ flexShrink: 0, width: "420px" }}>
              <img
                src={donate}
                alt="Students collaborating"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.14)",
                  display: "block",
                }}
              />
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, paddingTop: "8px" }}>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#1a1a3e",
                  marginBottom: "20px",
                  marginTop: "0",
                }}
              >
                Your support helps us to:
              </p>

              {/* Bullet Points */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {[
                  <span>Expand <strong style={{ color: "#1a1a3e" }}>Design for Change</strong> programs across districts</span>,
                  <span>Support <strong style={{ color: "#1a1a3e" }}>student &amp; youth-led innovation</strong></span>,
                  <span>Enable <strong style={{ color: "#1a1a3e" }}>district-level problem identification &amp; solutions</strong></span>,
                  <span>Build <strong style={{ color: "#1a1a3e" }}>sustainable learning and impact ecosystems</strong></span>,
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "18px",
                      fontSize: "16px",
                      color: "#2c3e6e",
                      lineHeight: "1.5",
                    }}
                  >
                    {/* Double-arrow icon matching the screenshot */}
                    <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust line */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#1a1a3e",
                  lineHeight: "1.75",
                  marginBottom: "32px",
                }}
              >
                As a <strong>Section-8 Foundation</strong>, Friction Foundation is committed to{" "}
                <strong>transparent, ethical, and purpose-driven use of funds.</strong>
              </p>

              {/* CTA Button — centered under right column text */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleDonate}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#e67600")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#ff8500")}
                  style={{
                    background: "#ff8500",
                    color: "#fff",
                    border: "none",
                    padding: "18px 56px",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "800",
                    letterSpacing: "1.5px",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                    boxShadow: "0 8px 24px rgba(255,133,0,0.38)",
                  }}
                >
                  DONATE <span style={{ fontWeight: "800", fontSize:"10px" }}>FOR</span> CHANGE
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* INLINE ANIMATION */}
      <style>
        {`
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

const inputStyle = {
  padding: "16px 18px",
  borderRadius: "14px",
  border: "1px solid #e0e0e0",
  fontSize: "14px",
  background: "#fafafa",
  outline: "none",
};

export default Donate;