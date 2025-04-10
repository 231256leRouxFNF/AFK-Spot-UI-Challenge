// src/pages/Home.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import HighlightCard from "../components/HighlightCard";

import Img1 from "../assets/1.svg";
import Img2 from "../assets/5.svg";
import Img3 from "../assets/3.svg";
import Img4 from "../assets/6.svg";
import FeatureImg1 from "../assets/8.svg";
import FeatureImg2 from "../assets/7.svg";
import Blob1 from "../assets/Blob1.svg";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection data-aos="fade-up" data-aos-duration="1200" />

      {/* Mission Statement */}
      <section
        className="home-section mission highlights bg-light-wave"
        data-aos="fade-left"
        data-aos-duration="1000"
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
            <img
              src={FeatureImg2}
              alt="Coding kids"
              className="feature-image"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section
        className="home-section feature bg-light-yellow"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div className="container-narrow">
          <h2 className="section-title">What We Offer</h2>
          <div className="highlight-grid">
            <HighlightCard
              imageSrc={Img1}
              title="Program Length"
              description="10-month journey from February to November."
              borderColor="#6cafe2"
            />
            <HighlightCard
              imageSrc={Img2}
              title="Ages 8–13"
              description="Designed just for junior explorers."
              borderColor="#fbb739"
            />
            <HighlightCard
              imageSrc={Img3}
              title="Skills Taught"
              description="Game dev, web design, logic, and problem-solving."
              borderColor="#faa09e"
            />
            <HighlightCard
              imageSrc={Img4}
              title="Coding Tools"
              description="Scratch, HTML, CSS, and JavaScript."
              borderColor="#76cdac"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        className="home-section feature feature-light"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="container-split">
          {/* Left Image */}
          <img
            src={FeatureImg1}
            alt="Student coding project"
            className="feature-image-large"
          />

          {/* Right Text */}
          <div className="feature-text-block">
            <h2 className="section-title">Why Us?</h2>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="feature-number">1</span>
              <div>
                <h3>Explore Real Projects</h3>
                <p>
                  Students design and build real games, websites, and more —
                  using professional tools in a playful, step-by-step
                  environment.
                </p>
              </div>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="feature-number">2</span>
              <div>
                <h3>Team Learning, Personal Growth</h3>
                <p>
                  Our classes combine collaborative games and individual
                  missions — helping each student discover their strengths and
                  build confidence.
                </p>
              </div>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="feature-number">3</span>
              <div>
                <h3>Guided by Passionate Mentors</h3>
                <p>
                  Every class is led by instructors who are not just skilled
                  developers, but educators passionate about nurturing
                  creativity and curiosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="home-section testimonials bg-light-wave"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container-narrow">
          <h2 className="section-title">What Parents Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Call to Action Banner */}
      <section
        className="home-section cta-banner"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
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
