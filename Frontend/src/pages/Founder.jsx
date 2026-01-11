import React from "react";
import founderImg from "../assets/founder.jpg";
import Navbar from "../Components/home/Navbar";
import Banner from "../Components/home/Banner";
import Footer from "../Components/home/Footer";

const colors = {
  softOrange: "#e6b089",
  lightBlue: "#eaf2f8",
  deepBlue: "#2c3e50",
  textDark: "#2b2b2b",
};

const FounderJourney = () => {
  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <Navbar />

      {/* OPTIONAL BANNER (Intro / Quote / Impact) */}
      <Banner
        title="Founder Journey"
        subtitle="A story driven by purpose, education, and impact"
      />

      {/* HERO */}
      <section style={{ ...styles.section, background: colors.lightBlue }}>
        <div style={styles.hero}>
          <div style={styles.heroText}>
            <span style={styles.tagline}>Founder Journey</span>
            <h1 style={styles.heroTitle}>
              Building <br /> Education With Purpose
            </h1>
            <p style={styles.text}>
              A journey that began with a belief — education should be
              accessible to every learner, regardless of circumstance.
            </p>
          </div>

          <img src={founderImg} alt="Founder" style={styles.heroImage} />
        </div>
      </section>

      {/* INTRO */}
      <section style={styles.section}>
        <div style={styles.intro}>
          <div>
            <h2 style={styles.title}>Where It All Began</h2>
            <p style={styles.text}>
              Growing up, I witnessed countless students with potential being
              limited by financial barriers. This platform was born from a
              simple question — what if opportunity wasn’t tied to privilege?
            </p>
          </div>

          <img src={founderImg} alt="Journey" style={styles.sideImage} />
        </div>
      </section>

      {/* VALUES */}
      <section style={{ ...styles.section, background: "#fafafa" }}>
        <h2 style={{ ...styles.title, textAlign: "center" }}>
          What We Stand For
        </h2>

        <div style={styles.cardRow}>
          {[
            {
              title: "Accessibility",
              text: "Education made reachable for every student.",
            },
            {
              title: "Transparency",
              text: "Every donation, every impact — openly shared.",
            },
            {
              title: "Empowerment",
              text: "Helping learners shape their own futures.",
            },
          ].map((item, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={styles.quote}>
        <p style={styles.quoteText}>
          “Education is not charity. It’s an investment in humanity.”
        </p>
        <span style={styles.quoteAuthor}>— Founder</span>
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <div style={{ textAlign: "center" }}>
          <h2 style={styles.title}>Join the Journey</h2>
          <p style={styles.text}>
            Your support helps turn dreams into classrooms, books, and futures.
          </p>
          <button style={styles.button}>Support Education</button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Playfair Display', serif",
    color: colors.textDark,
    paddingTop: "80px",
  },

  section: {
    padding: "90px 10%",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
  },

  heroText: {
    maxWidth: "45%",
  },

  tagline: {
    fontSize: "20px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#ff8500",
  },

  heroTitle: {
    fontSize: "52px",
    margin: "20px 0",
    color: colors.deepBlue,
  },

  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: colors.deepBlue,
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.8",
  },

  heroImage: {
    width: "360px",
    borderRadius: "14px",
  },

  intro: {
    display: "flex",
    gap: "80px",
    alignItems: "center",
  },

  sideImage: {
    width: "300px",
    borderRadius: "14px",
  },

  cardRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "50px",
  },

  card: {
    background: "#fff",
    padding: "32px",
    width: "260px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    textAlign: "center",
  },

  cardTitle: {
    color: "#ff8500",
    marginBottom: "12px",
    fontSize: "20px",
  },

  quote: {
    background: colors.deepBlue,
    color: "#fff",
    padding: "100px 10%",
    textAlign: "center",
  },

  quoteText: {
    fontSize: "28px",
    fontStyle: "italic",
  },

  quoteAuthor: {
    display: "block",
    marginTop: "20px",
    opacity: 0.8,
  },

  button: {
    marginTop: "30px",
    padding: "14px 42px",
    borderRadius: "30px",
    border: "none",
    background: "#ff8500",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default FounderJourney;