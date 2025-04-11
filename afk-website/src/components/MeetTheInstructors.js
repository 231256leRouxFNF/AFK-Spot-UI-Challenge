import React from "react";
import InstructorCard from "./InstructorCard";
import { motion } from "framer-motion";
import "./MeetTheInstructors.css";

import msJamie from "../assets/ms-jamie.png";
import mrAlex from "../assets/mr-tsungai.png";
import msPriya from "../assets/ms-priya.png";

const instructors = [
  {
    image: msJamie,
    name: "Ms. Jamie",
    bio: "A passionate Pythonista and Scratch wizard, Ms. Jamie loves helping kids turn code into games, stories, and animations!",
  },
  {
    image: mrAlex,
    name: "Mr. Tsungai",
    bio: "The legend himself. Enough Said.",
  },
  {
    image: msPriya,
    name: "Ms. Priya",
    bio: "With a background in robotics and digital art, Ms. Priya encourages creativity, exploration, and thinking like an inventor.",
  },
];

const MeetTheInstructors = () => {
  return (
    <div className="instructors-section">
      <div className="instructors-wrapper">
        <h2 className="instructors-title">Meet Our Instructors</h2>
        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <InstructorCard
                image={instructor.image}
                name={instructor.name}
                bio={instructor.bio}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheInstructors;
