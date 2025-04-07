import React from 'react';
import './MeetTheInstructors.css';

const InstructorCard = ({ image, name, bio }) => {
  return (
    <div className="instructor-card">
      <img src={image} alt={name} className="instructor-image" />
      <h3 className="instructor-name">{name}</h3>
      <p className="instructor-bio">{bio}</p>
    </div>
  );
};

export default InstructorCard;
