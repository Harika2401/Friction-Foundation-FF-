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

        {/* HERO */}
        <section
          style={{
            position: "relative",
            height: "70vh",
            backgroundImage: `url(${donate1})`, // ✅ local image
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.55))",
            }}
          />

          <div
            style={{
              position: "relative",
              color: "#fff",
              textAlign: "center",
              animation: "fadeDown 1s ease",
              maxWidth: "700px",
            }}
          >
            <span
              style={{
                letterSpacing: "2.5px",
                color: "#ffb066",
                fontSize: "60px",
                fontWeight: "600",
              }}
            >
              MAKE A DONATION
            </span>

            <h1 style={{ fontSize: "40px", marginTop: "16px", lineHeight: "1.2" }}>
              Empower Change With <br /> Your Contribution
            </h1>
          </div>
        </section>

        {/* BANNER */}
        <div style={{ margin: "60px 0" }}>
          <Banner
            title="Every Contribution Counts"
            subtitle="Your support directly helps students access quality education."
          />
        </div>

        {/* DONATION SECTION */}
        <section
          style={{
            padding: "100px 10%",
            background: "linear-gradient(180deg, #F5FAFF, #FFFFFF)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
              height: "520px",
              animation: "fadeUp 1s ease",
            }}
          >
            {/* IMAGE */}
            <img
              src={donate} // ✅ local image
              alt="Donate"
              style={{
                width: "410px",
                height: "118%",
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
                transform: "translateY(-1px)",
              }}
            />

            {/* FORM */}
            <div
              style={{
                background: "#fff",
                padding: "60px",
                borderRadius: "26px",
                boxShadow: "0 40px 80px rgba(44,62,80,0.12)",
                flex: 1,
              }}
            >
              <span
                style={{
                  color: "#ff8500",
                  letterSpacing: "2.5px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                MAKE A DONATION
              </span>

              <h2
                style={{
                  fontSize: "30px",
                  margin: "18px 0 36px",
                  color: "#2c3e50",
                  lineHeight: "1.3",
                }}
              >
                Your Donation Has The Power <br /> To Transform Lives
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <input style={inputStyle} placeholder="Your Name" />
                <input style={inputStyle} placeholder="Email" />
                <input style={inputStyle} placeholder="Phone" />
                <select style={inputStyle}>
                  <option>Select Donation Type</option>
                  <option>Education</option>
                  <option>Books</option>
                  <option>Scholarship</option>
                </select>
                <input style={inputStyle} placeholder="Amount (₹)" />
                <select style={inputStyle}>
                  <option>Payment Method</option>
                  <option>UPI</option>
                  <option>Card</option>
                  <option>Net Banking</option>
                </select>
              </div>

              {/* DONATE BUTTON */}
              <button
                onClick={handleDonate}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                style={{
                  marginTop: "40px",
                  width: "100%",
                  padding: "18px",
                  borderRadius: "40px",
                  border: "none",
                  background: "linear-gradient(135deg, #ff8500, #ff9f2e)",
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 18px 35px rgba(255,133,0,0.45)",
                  transition: "transform 0.2s ease",
                }}
              >
                Donate Now
              </button>

              {/* TRUST TEXT */}
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "12px",
                  color: "#7f8c8d",
                  textAlign: "center",
                }}
              >
                🔒 Secure payment · 100% transparent donations
              </p>
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
