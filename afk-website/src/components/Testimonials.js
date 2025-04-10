// src/components/Testimonials.js
import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "My daughter absolutely loves FutureCoders!",
    author: "– Sarah M., Parent",
  },
  {
    quote: "We’ve tried other programs, but this one keeps our son excited!",
    author: "– Jason L., Parent",
  },
  {
    quote: "The content is engaging and age-appropriate.",
    author: "– Lerato K., Parent",
  },
  {
    quote: "FutureCoders sparked my daughter’s interest in tech.",
    author: "– Nina P., Parent",
  },
  {
    quote: "He learned more here than an entire semester of school coding.",
    author: "– Sam R., Parent",
  },
  {
    quote: "A structured way to introduce kids to programming.",
    author: "– Pieter V., Parent",
  },
];

const Testimonials = () => {
const settings = {
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true, 
  autoplaySpeed: 3000, 
  infinite: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
};

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-slide">
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-quote">{t.quote}</p>
              <p className="testimonial-author">{t.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
