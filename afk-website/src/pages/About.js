// src/pages/AboutPage.js
import React from "react";
import MeetTheInstructors from "../components/MeetTheInstructors";
import Footer from "../components/Footer";
import HighlightCardAbout from "../components/HighlightCardAbout";
import HeroGraphic from "../assets/10.svg";
import "./About.css";

import Icon1 from "../assets/2.svg"; // you can swap these with new SVGs too
import Icon2 from "../assets/15.svg";
import Icon3 from "../assets/6.svg";
import FeatureImg1 from "../assets/14.svg";


const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section Styled Like Home */}
        <section className="about-hero-section">
          <div className="about-hero-container">
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
              <img
                src={HeroGraphic}
                alt="Our Story Illustration"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Instructors */}
        <MeetTheInstructors />

        {/* Why Choose Us */}
        <section className="about-section feature feature-light">
          <div className="container-split reverse">
            {/* Left Text */}
            <div className="feature-text-block">
              <h2 className="section-title">Why Choose Us?</h2>

              <div className="feature-item">
                <span className="feature-number">1</span>
                <div>
                  <h3>Personalized Learning</h3>
                  <p>
                    We meet every student where they are, helping them grow at
                    their own pace.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-number">2</span>
                <div>
                  <h3>Small Class Sizes</h3>
                  <p>
                    Our instructors can give each child the attention and
                    encouragement they need.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-number">3</span>
                <div>
                  <h3>Confidence Building</h3>
                  <p>
                    We celebrate curiosity, creativity, and progress — not
                    perfection.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <img
              src={FeatureImg1}
              alt="Happy student working on laptop"
              className="feature-image-large"
            />
          </div>
        </section>
      </div>
      
      {/* Our approach section */}
      <section className="about-section approach-section">
        <h2>Our Approach to Teaching</h2>
        <p>
          At Future Coders, we believe the best way to learn is by doing. Our
          interactive classes combine creativity, logic, and hands-on
          exploration.
        </p>

        <div className="highlight-about-grid">
          <HighlightCardAbout
            imageSrc={Icon1}
            title="Interactive Projects"
            description="Each lesson ends in a creative project — from animated stories to playable games."
            borderColor="#6cafe2"
          />
          <HighlightCardAbout
            imageSrc={Icon2}
            title="Game-Based Challenges"
            description="Level-up style missions motivate kids to explore coding concepts with confidence."
            borderColor="#fbb739"
          />
          <HighlightCardAbout
            imageSrc={Icon3}
            title="Real Coding Tools"
            description="Students use Scratch, HTML, CSS, and JavaScript to bring their ideas to life."
            borderColor="#76cdac"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
