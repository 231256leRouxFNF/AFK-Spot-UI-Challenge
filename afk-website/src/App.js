import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomNavbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import CurriculumPage from "./pages/Curriculum";
import ContactPage from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
