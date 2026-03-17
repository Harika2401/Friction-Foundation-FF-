import React from "react";
import tdcaImg from "../assets/tdca.jpg";
import ndisImg from "../assets/ndis.jpg";
import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";

const colors = {
  lightBg: "#f4f7fb",
  deepBlue: "#2c3e50",
  textDark: "#2b2b2b",
  orange: "#ff8500",
};

const WhatWeDo = () => {
  return (
    <div style={styles.page}>
      {/* WHAT WE DO SECTION */}
      <section style={{ ...styles.section, background: colors.lightBg }}>
        <div style={styles.header}>
          <h2 style={styles.heading}>WHAT WE DO</h2>
          <p style={styles.description}>
            At <b>FrictionFoundation (FF)</b>, we focus on building a strong
            design-led innovation ecosystem that turns ideas into real impact.
            Our work is driven through <b>two core initiatives:</b>
          </p>
        </div>

        {/* CARDS */}
        <div style={styles.cardsContainer}>

          {/* CARD 1 */}
          <div style={styles.card}>
            <img src={tdcaImg} alt="TDCA" style={styles.image} />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>
                Telangana Design & Creative Association (TDCA)
              </h3>
              <p style={styles.text}>
                A statewide community for design-driven change
              </p>
            </div>
            <button style={styles.button}>Enroll for TDCA</button>
          </div>

          {/* CARD 2 */}
          <div style={styles.card}>
            <img src={ndisImg} alt="NDIS" style={styles.image} />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>
                District-to-State Innovation Summits
              </h3>
              <p style={styles.text}>
                From local problems to statewide impact
              </p>
            </div>
            <button style={styles.button}>Explore for more</button>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <p style={styles.bottomText}>
          Together, our <b>District-to-State Summits</b> form a continuous
          ecosystem where <b>design leads to change</b>, and{" "}
          <b>change leads to impact.</b>
        </p>
      </section>
    </div>
  );
};

const styles = {

  page: {
    fontFamily: "'Playfair Display', serif",
    color: colors.textDark,
  },

  section: {
  padding: "140px 12% 90px 12%", 
},

  header: {
    maxWidth: "800px",
    margin: "0 auto 60px auto",
  },

  heading: {
  fontSize: "42px",
  color: colors.deepBlue,
  letterSpacing: "3px",
  marginBottom: "35px",
  textAlign: "center",
  fontWeight: "600",
},
  description: {
  fontSize: "20px",
  lineHeight: "1.9",
  maxWidth: "1100px",
  margin: "0 auto 60px auto",
  textAlign: "center",
},

 cardsContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",       // ← makes both cards same height
  gap: "80px",
  flexWrap: "wrap",
  marginTop: "60px",
},
image:{
 width: "400px",
height: "249px",
top: "238px",
left: "781px",
angle: "0 deg",
opacity: "1",
borderRadius: "19px"

},
card: {
  width: "340px",
  padding: "25px",
  borderRadius: "18px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
},

cardBody: {
  flex: 1,                     // ← pushes button to bottom, equalizes text area
},

cardTitle: {
  fontSize: "20px",
  color: colors.deepBlue,
  marginBottom: "10px",
  minHeight: "60px",           // ← reserves fixed space for title regardless of length
},
  text: {
    fontSize: "15px",
    lineHeight: "1.6",
  },

  button: {
    marginTop: "18px",
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    background: colors.orange,
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },

  bottomText: {
  marginTop: "70px",
  fontSize: "19px",
  maxWidth: "720px",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  lineHeight: "1.7",
},


};

export default WhatWeDo;