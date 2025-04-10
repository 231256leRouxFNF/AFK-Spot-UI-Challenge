// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-card">
        <p className="testimonial-quote">
          “My daughter absolutely loves FutureCoders! She’s built games,
          websites, and made new friends — all while learning to code.”
        </p>
        <p className="testimonial-author">– Sarah M., Parent</p>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-quote">
          “We’ve tried other programs, but this one keeps our son excited week
          after week. The instructors are incredible!”
        </p>
        <p className="testimonial-author">– Jason L., Parent</p>
      </div>
    </div>
  );
};

export default Testimonials;
