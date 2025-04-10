// src/pages/AboutPage.js
import React from "react";
import MeetTheInstructors from "../components/MeetTheInstructors";
import Footer from "../components/Footer"; // ✅ Import the Footer
import "./About.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        {/* Our Story */}
        <section className="about-section our-story">
          <h2>Our Story</h2>
          <p>
            Future Coders was founded to inspire the next generation of
            programmers by making coding accessible, fun, and creative. We
            believe every child should have the opportunity to explore the
            exciting world of technology, no matter their background or
            experience.
          </p>
        </section>

        {/* Meet Our Instructors */}
        <MeetTheInstructors />

        {/* Our Approach to Teaching */}
        <section className="about-section teaching-approach">
          <h2>Our Approach to Teaching</h2>
          <p>
            At Future Coders, we believe the best way to learn is by doing.
            That’s why every class is packed with interactive projects, games,
            and creative challenges. We turn ideas into action — whether it’s
            coding a character to dance or building a robot that follows
            commands!
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="about-section why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Personalized Learning:</strong> We meet every student
              where they are, helping them grow at their own pace.
            </li>
            <li>
              <strong>Small Class Sizes:</strong> Our instructors can give each
              child the attention and encouragement they need.
            </li>
            <li>
              <strong>Age-Appropriate Content:</strong> We use tools and
              languages designed for kids, making it easy and exciting to learn.
            </li>
            <li>
              <strong>Confidence Building:</strong> We celebrate curiosity,
              creativity, and progress — not perfection.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
