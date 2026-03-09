import React from "react";
import { FaSearch, FaPencilRuler, FaTools, FaBullseye } from "react-icons/fa";

const steps = [
  {
    title: "Identify Problems",
    icon: <FaSearch />,
    text: "Innovation begins with empathy and observation. Participants study their surroundings — schools, colleges, villages, cities, and communities — to identify genuine problems affecting people, systems, or the environment.",
  },
  {
    title: "Design the Approach",
    icon: <FaPencilRuler />,
    text: "Every problem needs a thoughtful, creative design. Students brainstorm ideas, map user journeys, sketch solutions, and design practical approaches using design thinking frameworks.",
  },
  {
    title: "Build the Solution",
    icon: <FaTools />,
    text: "Ideas turn into real, workable solutions. Students convert their designs into prototypes, concepts, models, or digital solutions with mentor guidance and real-world constraints.",
  },
  {
    title: "Create Impact",
    icon: <FaBullseye />,
    text: "Solutions that create real change — not just projects. Selected ideas are showcased through platforms like NDIS-2026 and supported by TDCA, helping students create measurable impact.",
  },
];

const DesignForChange = () => {
  return (
    <div style={styles.page}>

      {/* INTRO TEXT */}
      <div style={styles.intro}>
        <h2 style={styles.introTitle}>DESIGN FOR CHANGE</h2>

        <p style={styles.introSubtitle}>
          From Problems to Purposeful Impact
        </p>

        <p style={styles.introText}>
          “Design for Change” is not just a theme — it is a mindset that empowers
          students to observe real-world challenges, think creatively, and build
          solutions that create measurable social impact.
        </p>
      </div>

      {/* VERTICAL STEPS */}
      <div style={styles.verticalSteps}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepWrapper}>

            <div style={styles.circle}>{step.icon}</div>

            <h3 style={styles.stepTitle}>
              {index + 1}. {step.title}
            </h3>

            <p style={styles.stepText}>{step.text}</p>

            {index !== steps.length - 1 && (
              <div style={styles.arrowWrapper}>
                <svg width="20" height="80" viewBox="0 0 20 80">
                  <line
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="60"
                    stroke="#ff8500"
                    strokeWidth="3"
                  />
                  <polygon
                    points="5,60 15,60 10,75"
                    fill="#ff8500"
                  />
                </svg>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};

const styles = {

  page: {
    background: "#f8fbff",
    paddingTop: "120px", // space for navbar
    paddingBottom: "60px",
  },

  intro: {
    textAlign: "center",
    padding: "40px 20px 20px",
  },

  introTitle: {
    color: "#1f3c88",
    fontWeight: "700",
    letterSpacing: "1px",
    fontSize: "28px",
  },

  introSubtitle: {
    color: "#ff8500",
    fontWeight: "600",
    marginTop: "10px",
    fontSize: "18px",
  },

  introText: {
    maxWidth: "850px",
    margin: "20px auto",
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#444",
  },

  verticalSteps: {
    maxWidth: "850px",
    margin: "20px auto",
    textAlign: "center",
  },

  stepWrapper: {
    marginBottom: "40px",
  },

  circle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "3px solid #ff8500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "32px",
    color: "#ff8500",
    background: "#fff",
  },

  stepTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f3c88",
    marginBottom: "12px",
  },

  stepText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.8",
    maxWidth: "700px",
    margin: "0 auto",
  },

  arrowWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0",
  },
};

export default DesignForChange;