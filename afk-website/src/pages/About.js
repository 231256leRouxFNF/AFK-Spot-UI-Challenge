// src/pages/AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import MeetTheInstructors from "../components/MeetTheInstructors";
import Footer from "../components/Footer";
import HighlightCardAbout from "../components/HighlightCardAbout";
import HeroGraphic from "../assets/10.svg";
import Icon1 from "../assets/2.svg";
import Icon2 from "../assets/15.svg";
import Icon3 from "../assets/6.svg";
import FeatureImg1 from "../assets/14.svg";
import Button from "../components/Button";
import "./About.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero-section">
          <motion.div
            className="about-hero-container"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <div className="about-hero-text">
              <h1 className="Heading1">Our Story</h1>
              <p className="hero-subtext">
                Future Coders was founded to inspire the next generation of
                programmers by making coding accessible, fun, and creative. We
                believe every child should have the opportunity to explore the
                exciting world of technology, no matter their background or
                experience.
              </p>
            </div>
            <div className="about-hero-image">
              <motion.img
                src={HeroGraphic}
                alt="Our Story Illustration"
                className="hero-image"
                loading="eager"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.4 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Instructors */}
        <MeetTheInstructors />

        {/* Why Choose Us */}
        <motion.section
          className="about-section feature feature-light"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-split reverse">
            <div className="feature-text-block">
              <h2 className="section-title">Why Choose Us?</h2>

              {[
                {
                  number: "1",
                  title: "Personalized Learning",
                  desc: "We meet every student where they are, helping them grow at their own pace.",
                },
                {
                  number: "2",
                  title: "Small Class Sizes",
                  desc: "Our instructors can give each child the attention and encouragement they need.",
                },
                {
                  number: "3",
                  title: "Confidence Building",
                  desc: "We celebrate curiosity, creativity, and progress — not perfection.",
                },
              ].map((item, index) => (
                <motion.div
                  className="feature-item"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="feature-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.img
              src={FeatureImg1}
              alt="Happy student working on laptop"
              className="feature-image-large"
              loading="lazy"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section
          className="about-section approach-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Approach to Teaching</h2>
          <p>
            At Future Coders, we believe the best way to learn is by doing. Our
            interactive classes combine creativity, logic, and hands-on
            exploration.
          </p>

          <div className="highlight-about-grid">
            {[Icon1, Icon2, Icon3].map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <HighlightCardAbout
                  imageSrc={icon}
                  title={
                    i === 0
                      ? "Interactive Projects"
                      : i === 1
                      ? "Game-Based Challenges"
                      : "Real Coding Tools"
                  }
                  description={
                    i === 0
                      ? "Each lesson ends in a creative project — from animated stories to playable games."
                      : i === 1
                      ? "Level-up style missions motivate kids to explore coding concepts with confidence."
                      : "Students use Scratch, HTML, CSS, and JavaScript to bring their ideas to life."
                  }
                  borderColor={
                    i === 0 ? "#6cafe2" : i === 1 ? "#fbb739" : "#76cdac"
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Banner */}
        <motion.section
          className="home-section cta-banner"
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1.2}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Ready to launch your child’s coding journey?</h2>
          <Button
            label="Enroll Now"
            onClick={() => (window.location.href = "/contact")}
          />
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
