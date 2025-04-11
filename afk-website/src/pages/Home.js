// src/pages/Home.js
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import HighlightCard from "../components/HighlightCard";
import Button from "../components/Button";

import Img1 from "../assets/1.svg";
import Img2 from "../assets/5.svg";
import Img3 from "../assets/3.svg";
import Img4 from "../assets/6.svg";
import FeatureImg1 from "../assets/8.svg";
import FeatureImg2 from "../assets/7.svg";

import "./Home.css";

const Testimonials = lazy(() => import("../components/Testimonials"));

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      {/* Mission */}
      <motion.section
        className="home-section mission highlights bg-light-wave"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-split">
          <div className="feature-text">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              At FutureCoders, we believe in nurturing young minds through
              creative, hands-on coding. Our program empowers kids to think
              logically, build confidently, and explore their imaginations
              through technology.
            </p>
          </div>
          <div className="mission-image-wrapper">
            <motion.img
              src={FeatureImg2}
              alt="Coding kids"
              className="feature-image"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section
        className="home-section feature bg-light-yellow"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-narrow">
          <h2 className="section-title">What We Offer</h2>
          <div className="highlight-grid">
            {[Img1, Img2, Img3, Img4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <HighlightCard
                  imageSrc={img}
                  title={
                    i === 0
                      ? "Program Length"
                      : i === 1
                      ? "Ages 8–13"
                      : i === 2
                      ? "Skills Taught"
                      : "Coding Tools"
                  }
                  description={
                    i === 0
                      ? "10-month journey from February to November."
                      : i === 1
                      ? "Designed just for junior explorers."
                      : i === 2
                      ? "Game dev, web design, logic, and problem-solving."
                      : "Scratch, HTML, CSS, and JavaScript."
                  }
                  borderColor={
                    i === 0
                      ? "#6cafe2"
                      : i === 1
                      ? "#fbb739"
                      : i === 2
                      ? "#faa09e"
                      : "#76cdac"
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Us */}
      <motion.section
        className="home-section feature feature-light"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-split">
          <motion.img
            src={FeatureImg1}
            alt="Student coding project"
            className="feature-image-large"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <div className="feature-text-block">
            <h2 className="section-title">Why Us?</h2>
            {[
              {
                title: "Explore Real Projects",
                desc: "Students design and build real games, websites, and more — using professional tools in a playful, step-by-step environment.",
              },
              {
                title: "Team Learning, Personal Growth",
                desc: "Our classes combine collaborative games and individual missions — helping each student discover their strengths and build confidence.",
              },
              {
                title: "Guided by Passionate Mentors",
                desc: "Every class is led by instructors who are not just skilled developers, but educators passionate about nurturing creativity and curiosity.",
              },
            ].map((item, i) => (
              <motion.div
                className="feature-item"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="feature-number">{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="home-section testimonials bg-light-wave"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-narrow">
          <h2 className="section-title">What Parents Say</h2>
          <Suspense fallback={<div>Loading Testimonials...</div>}>
            <Testimonials />
          </Suspense>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="home-section cta-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
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
    </main>
  );
};

export default Home;
