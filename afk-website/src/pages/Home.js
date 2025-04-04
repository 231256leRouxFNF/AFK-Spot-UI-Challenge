// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      
      <HeroSection />
      
      <section className="about-section" style={{ display: "flex", alignItems: "center", padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <div>
          <h2>Feature</h2>
          <p>
            Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
        </div>
        <img 
          src="/path/to/your/image.jpg" 
          alt="Description of the image" 
          style={{ width: "40%", marginRight: "2rem", borderRadius: "8px" }} 
        />
      </section>

      <section className="about-section" style={{ display: "flex", alignItems: "center", padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <img 
          src="/path/to/your/image.jpg" 
          alt="Description of the image" 
          style={{ width: "40%", marginRight: "2rem", borderRadius: "8px" }} 
        />
        <div>
          <h2>Feature</h2>
          <p>
            Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
        </div>
      </section>

      <section className="about-section" style={{ display: "flex", alignItems: "center", padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <div>
          <h2>Feature</h2>
          <p>
            Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit. id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
        </div>
        <img 
          src="/path/to/your/image.jpg" 
          alt="Description of the image" 
          style={{ width: "40%", marginRight: "2rem", borderRadius: "8px" }} 
        />
      </section>     
      
      <Footer />

    </main>
  );
};

export default Home;
