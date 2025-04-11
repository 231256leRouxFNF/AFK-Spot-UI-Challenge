
import React from "react";
import PropTypes from "prop-types";
import "./HighlightCardAbout.css";

const HighlightCardAbout = ({ imageSrc, title, description, borderColor }) => {
  return (
    <div
      className="highlight-card-about"
      style={{ borderTop: `6px solid ${borderColor}` }}
    >
      <img src={imageSrc} alt={title} className="highlight-about-icon" />
      <div className="highlight-about-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

HighlightCardAbout.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

HighlightCardAbout.defaultProps = {
  borderColor: "#6cafe2",
};

export default HighlightCardAbout;
