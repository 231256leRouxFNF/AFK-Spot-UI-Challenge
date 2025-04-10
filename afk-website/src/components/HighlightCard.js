// src/components/HighlightCard.js
import React from "react";
import PropTypes from "prop-types";
import "./HighlightCard.css";

const HighlightCard = ({ imageSrc, title, description, borderColor }) => {
  return (
    <div
      className="highlight-card"
      style={{ borderTop: `6px solid ${borderColor}` }}
    >
      <img src={imageSrc} alt={title} className="highlight-icon" />
      <div className="highlight-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

HighlightCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

HighlightCard.defaultProps = {
  borderColor: "#6cafe2",
};

export default HighlightCard;
