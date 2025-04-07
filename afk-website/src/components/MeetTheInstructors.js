import React from 'react';
import InstructorCard from './InstructorCard';
import './MeetTheInstructors.css';

// Make sure you place these images in /src/assets/
import msJamie from '../assets/ms-jamie.png';
import mrAlex from '../assets/mr-tsungai.png';
import msPriya from '../assets/ms-priya.png';

const MeetTheInstructors = () => {
  return (
    <div className="instructors-section">
      <h2 className="instructors-title">Meet Our Instructors</h2>
      <div className="instructors-grid">
        <InstructorCard
          image={msJamie}
          name="Ms. Jamie"
          bio="A passionate Pythonista and Scratch wizard, Ms. Jamie loves helping kids turn code into games, stories, and animations!"
        />
        <InstructorCard
          image={mrAlex}
          name="Mr. Tsungai"
          bio="The legend himself. Enough Said."
        />
        <InstructorCard
          image={msPriya}
          name="Ms. Priya"
          bio="With a background in robotics and digital art, Ms. Priya encourages creativity, exploration, and thinking like an inventor."
        />
      </div>
    </div>
  );
};

export default MeetTheInstructors;
