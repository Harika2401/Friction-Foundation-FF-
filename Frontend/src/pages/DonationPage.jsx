import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaTools, FaBullseye, FaArrowRight } from "react-icons/fa";
import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";
import img1 from "../assets/donate.jpg";
import img2 from "../assets/donate1.jpg";
import img3 from "../assets/founder.jpg";
import heroImg from "../assets/design.jpg";

const steps = [
  { title: "Identify Problems", icon: <FaSearch /> },
  { title: "Design the Approach", icon: <FaPencilRuler /> },
  { title: "Build the Solution", icon: <FaTools /> },
  { title: "Create Impact", icon: <FaBullseye /> },
];

const programs = [
  {
    title: "Identify Problems",
    text: "Innovation begins with empathy and observation. Students study schools, colleges, villages and communities to identify genuine problems affecting people and environment.",
    image: img1,
  },
  {
    title: "Design the Approach",
    text: "Every problem needs a thoughtful, creative design. Students brainstorm ideas, map journeys and sketch practical solutions using design thinking frameworks.",
    image: img2,
  },
  {
    title: "Build the Solution",
    text: "Ideas turn into real, workable solutions. Students convert designs into prototypes, models and digital solutions with mentor guidance.",
    image: img3,
  },
  {
    title: "Create Impact",
    text: "Solutions that create real change — not just projects. Selected ideas are showcased to create measurable social and community impact.",
    image: img1,
  },
];

const DesignForChange = () => {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "115px", background: "#f8fbff" }}>

        {/* HERO SECTION */}
        <div style={styles.hero}>
          <img src={heroImg} alt="Design For Change" style={styles.heroImage} />
          <div style={styles.overlay}></div>

          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              DESIGN FOR <span style={{ color: "#ff8500" }}>CHANGE</span>
            </h1>

            <p style={styles.heroSubtitle}>
              From Problems to Purposeful Impact
            </p>

            <p style={styles.heroDescription}>
              'Design for Change' is not just a theme — it is a mindset that empowers 
              students to observe real-world challenges, think creatively, and build 
              solutions that create measurable social impact.
            </p>
          </div>
        </div>

{/* STEPS SECTION */}
<div style={styles.stepsContainer}>
  {steps.map((step, index) => (
    <React.Fragment key={index}>
      <div style={styles.stepItem}>
        <div style={styles.circle}>{step.icon}</div>
        <h4 style={styles.stepTitle}>{step.title}</h4>
      </div>

      {index !== steps.length - 1 && (
        <FaArrowRight style={styles.arrow} />
      )}
    </React.Fragment>
  ))}
</div>


        {/* PROGRAMS SECTION */}
        <div style={styles.programContainer}>
          {programs.map((program, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  ...styles.row,
                  flexDirection: isLeft ? "row" : "row-reverse",
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  style={styles.image}
                />

                <div style={styles.textBox}>
                  <h3 style={styles.title}>{program.title}</h3>
                  <p style={styles.text}>{program.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

const styles = {
  hero: {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  },

  heroImage: {
    width: "100%",
    height: "550px",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
  },

  heroText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    width: "80%",
  },

  heroTitle: {
    fontSize: "70px",
    fontWeight: "900",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },

  heroSubtitle: {
    fontSize: "22px",
    marginTop: "15px",
    fontWeight: "500",
    color: "#ffcc80",
  },

  heroDescription: {
    fontSize: "18px",
    marginTop: "25px",
    lineHeight: "1.9",
    maxWidth: "900px",
    margin: "0 auto",
    fontWeight: "300",
  },

 stepsContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "100px 0",
  background: "#ffffff",
},

stepItem: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "220px",
  textAlign: "center",
},


circle: {
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  background: "#fff",
  border: "3px solid #ff8500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  color: "#ff8500",
  marginBottom: "20px",
},

arrow: {
  fontSize: "30px",
  color: "#ff8500",
  margin: "0 40px",
},



stepTitle: {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f3c88",
  whiteSpace: "nowrap",
},


  programContainer: {
    width: "100%",
  },

  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "120px 10%",
  },

  image: {
    width: "48%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },

  textBox: {
    width: "48%",
    background: "#ffffff",
    padding: "60px",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },

  title: {
    color: "#ff8500",
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "700",
  },

  text: {
    fontSize: "17px",
    lineHeight: "1.9",
    color: "#444",
  },
};

export default DesignForChange;