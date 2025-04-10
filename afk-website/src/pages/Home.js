// src/pages/Home.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement */}
      <section className="home-section mission" data-aos="fade-up">
        <div className="container-narrow">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            At FutureCoders, we believe in nurturing young minds through
            creative, hands-on coding. Our program empowers kids to think
            logically, build confidently, and explore their imaginations through
            technology.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section
        className="home-section highlights bg-light-wave"
        data-aos="fade-up"
      >
        <div className="container-narrow">
          <h2 className="section-title">What We Offer</h2>
          <div className="highlight-grid">
            <div className="highlight-card" data-aos="zoom-in">
              <h3>📅 Program Length</h3>
              <p>10-month journey from February to November.</p>
            </div>
            <div
              className="highlight-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3>👩‍🚀 Ages 8–13</h3>
              <p>Designed just for junior explorers.</p>
            </div>
            <div
              className="highlight-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3>🎮 Skills Taught</h3>
              <p>Game dev, web design, logic, and problem-solving.</p>
            </div>
            <div
              className="highlight-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3>🛠️ Coding Tools</h3>
              <p>Scratch, HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Block 1 */}
      <section
        className="home-section feature feature-light"
        data-aos="fade-right"
      >
        <div className="container-split">
          <div className="feature-text">
            <h2>Explore Real Projects</h2>
            <p>
              Students design and build real games, websites, and more — using
              professional tools in a playful, step-by-step environment.
            </p>
          </div>
          <img
            src="/assets/image1.jpg"
            alt="Student coding"
            className="feature-image"
          />
        </div>
      </section>

      {/* Feature Block 2 */}
      <section
        className="home-section feature feature-pink"
        data-aos="fade-left"
      >
        <div className="container-split reverse">
          <img
            src="/assets/image2.jpg"
            alt="Team collaboration"
            className="feature-image"
          />
          <div className="feature-text">
            <h2>Team Learning, Personal Growth</h2>
            <p>
              Our classes combine collaborative games and individual missions —
              helping each student discover their strengths and build
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section testimonials" data-aos="zoom-in">
        <div className="container-narrow">
          <h2 className="section-title">What Parents Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="home-section cta-banner" data-aos="fade-up">
        <h2>Ready to launch your child’s coding journey?</h2>
        <Button
          label="Enroll Now"
          onClick={() => (window.location.href = "/contact")}
        />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
