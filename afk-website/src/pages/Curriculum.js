// src/pages/CurriculumPage.js
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import HeroGraphic from "../assets/11.svg";
import Button from "../components/Button";
import {
  FaLaptopCode,
  FaGamepad,
  FaGraduationCap,
  FaGlobe,
  FaPaintBrush,
  FaRobot,
  FaCodeBranch,
  FaRocket,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Curriculum.css";

const curriculumData = [
  {
    month: "February",
    title: "Introduction to Coding Concepts",
    icon: <FaRobot />,
    points: [
      "Introduction to block-based coding using Scratch.",
      "Understanding coding logic: loops, conditionals, and variables.",
    ],
  },
  {
    month: "March",
    title: "Storytelling Through Coding",
    icon: <FaPaintBrush />,
    points: [
      "Create interactive stories using Scratch.",
      "Learn about sequencing and debugging.",
    ],
  },
  {
    month: "April",
    title: "Building Simple Games",
    icon: <FaGamepad />,
    points: [
      "Develop basic games like Pong using Scratch.",
      "Introduction to sprite movement and event-based programming.",
    ],
  },
  {
    month: "May",
    title: "Introduction to Web Development",
    icon: <FaGlobe />,
    points: [
      "Learn the basics of HTML.",
      "Build a simple webpage: formatting text, images, and links.",
    ],
  },
  {
    month: "June",
    title: "Styling Web Pages",
    icon: <FaPaintBrush />,
    points: [
      "Introduction to CSS.",
      "Style webpages with fonts, colors, and layouts.",
    ],
  },
  {
    month: "July",
    title: "Animating Web Pages",
    icon: <FaRocket />,
    points: [
      "Adding animations and transitions with CSS.",
      "Introduction to simple animations using JavaScript.",
    ],
  },
  {
    month: "August",
    title: "Game Development with JavaScript",
    icon: <FaLaptopCode />,
    points: [
      "Build basic interactive games using JavaScript.",
      "Explore variables, functions, and event listeners in game creation.",
    ],
  },
  {
    month: "September",
    title: "Advanced Game Logic",
    icon: <FaCodeBranch />,
    points: [
      "Develop more complex games.",
      "Use multiple levels and advanced functions in JavaScript.",
    ],
  },
  {
    month: "October",
    title: "Final Project – Web Design",
    icon: <FaProjectDiagram />,
    points: [
      "Students design and create their own webpage or game.",
      "Incorporate everything learned (HTML, CSS, JavaScript).",
    ],
  },
  {
    month: "November",
    title: "Project Showcase & Graduation",
    icon: <FaGraduationCap />,
    points: [
      "Students present their final projects.",
      "Graduation ceremony and certificates.",
    ],
  },
];

const CurriculumPage = () => {
  return (
    <>
      <div className="curriculum-page">
        {/* Hero Section */}
        <motion.section
          className="curriculum-hero-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="curriculum-hero-container">
            <div className="curriculum-hero-text">
              <h1>Program Overview</h1>
              <p>
                Our 10-month curriculum is designed to take students from
                beginner to intermediate level in coding, ensuring they have a
                solid foundation in programming by the end of the course.
              </p>
            </div>
            <div className="curriculum-hero-image">
              <img
                src={HeroGraphic}
                alt="Curriculum Overview"
                loading="eager"
              />
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="curriculum-section timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Month-by-Month Breakdown</h2>
          <div className="timeline-container">
            {curriculumData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <h3>
                    {item.month}: {item.title}
                  </h3>
                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Banner */}
        <motion.section
          className="home-section cta-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to launch your child’s coding journey?</h2>
          <Button
            label="Enroll Now"
            onClick={() => (window.location.href = "/contact")}
          />
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default CurriculumPage;
