// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import "./Home.css";

const Home = () => {
  return (
    <main>
      
      <HeroSection />

      {/* Mission Section */}
      <section className="home-section mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-text">
          At FutureCoders, we believe in nurturing young minds through creative,
          hands-on coding. Our program empowers kids to think logically, build
          confidently, and explore their imaginations through technology.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="home-section highlights">
        <div className="highlight-card">
          <h3>📅 Program Length</h3>
          <p>10-month curriculum, February to November.</p>
        </div>
        <div className="highlight-card">
          <h3>👩‍🚀 Age Range</h3>
          <p>Designed for kids aged 8 to 13 years.</p>
        </div>
        <div className="highlight-card">
          <h3>🎮 Skills Taught</h3>
          <p>
            Game development, web design, coding logic, and problem solving.
          </p>
        </div>
        <div className="highlight-card">
          <h3>🛠️ Tools</h3>
          <p>Scratch, HTML, CSS, JavaScript.</p>
        </div>
      </section>

      {/* Feature Sections (Alternating) */}
      <section className="about-section">
        <div>
          <h2 className="home-body-h2">Explore Real Projects</h2>
          <p className="home-body-p">
            Kids work on real-world style projects from building games in
            Scratch to coding personal websites with HTML, CSS, and JavaScript.
          </p>
        </div>
        <img
          src="/assets/image1.jpg"
          alt="Coding project"
          className="about-image"
        />
      </section>

      <section className="about-section reverse">
        <img src="/assets/image2.jpg" alt="Teamwork" className="about-image" />
        <div>
          <h2 className="home-body-h2">Team-Based Learning</h2>
          <p className="home-body-p">
            We foster teamwork through coding challenges that inspire
            collaboration, communication, and creativity.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div>
          <h2 className="home-body-h2">Safe & Fun Environment</h2>
          <p className="home-body-p">
            Our programs are age-appropriate and designed to make kids feel
            safe, supported, and excited to explore tech.
          </p>
        </div>
        <img
          src="/assets/image3.jpg"
          alt="Kids learning"
          className="about-image"
        />
      </section>

      {/* Testimonials */}
      <section className="home-section testimonials">
        <h2 className="section-title">What Parents Say</h2>
        <Testimonials />
      </section>

      {/* CTA Banner */}
      <section className="home-section cta-banner">
        <h2>Ready to launch your child’s coding journey?</h2>
        <Button text="Enroll Now" link="/contact" />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
