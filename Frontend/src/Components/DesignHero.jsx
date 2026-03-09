import React from "react";
import heroImg from "../assets/design.jpg";

const DesignHero = () => {
  return (
    <section style={styles.heroSection}>

      {/* Background Image */}
      <img src={heroImg} alt="Design For Change" style={styles.heroImage} />

      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.content}>

        <h1 style={styles.heading}>
          DESIGN FOR CHANGE <br />
          BUILD FOR THE FUTURE
        </h1>

        <p style={styles.subtitle}>
          Empowering students and youth to solve real-world problems
          through design thinking, innovation, and action.
        </p>

        <div style={styles.buttonContainer}>

          <button style={styles.secondaryBtn}>
            Explore NDIS–2026
          </button>

          <button style={styles.primaryBtn}>
            Partner with us
          </button>

        </div>

      </div>

    </section>
  );
};

const styles = {

  heroSection: {
    position: "relative",
    width: "100%",
    height: "520px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif"
  },

  heroImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.55)"
  },

  content: {
    position: "relative",
    color: "#fff",
    maxWidth: "900px",
    padding: "20px"
  },

  heading: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "20px",
    lineHeight: "1.6",
    marginBottom: "35px"
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  secondaryBtn: {
    background: "#fff",
    color: "#1a1a3e",
    border: "none",
    padding: "14px 28px",
    borderRadius: "40px",
    fontWeight: "600",
    cursor: "pointer"
  },

  primaryBtn: {
    background: "#ff8500",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "40px",
    fontWeight: "600",
    cursor: "pointer"
  }

};

export default DesignHero;