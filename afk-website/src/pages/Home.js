// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"; 

const Home = () => {
  return (
    <main>
      <HeroSection />
      
      {/* New section added directly */}
      <section className="about-section" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2>Feature</h2>
        <p>
        Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </section>

      <section className="about-section" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2>Feature</h2>
        <p>
        Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </section>

      <section className="about-section" style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2>Get started!</h2>
        <p>
        Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
        </p>
      </section>
      
      {/* Add more sections as needed */}
      <Footer />
    </main>
  );
};

export default Home;
