import React from "react";
import "../styles/founder-card.css";
import adamImage from "../images/AdamBournes.jpeg";
import lukeImage from "../images/LukeBlackwell.jpeg";

const FounderCard = ({ name, expertise }) => {
  return (
    <div className="founder-card-display">
      <div className="title">Our Founders</div>
      <div className="founder-card-container">
        <div className="founder-card">
          <img src={adamImage} alt="adam" className="founder-image" />
          <div className="founder-details">
            <h3 className="founder-name">Adam Bournes</h3>
            <p className="founder-expertise">CEO</p>
          </div>
        </div>

        <div className="founder-card">
          <img src={lukeImage} alt="luke" className="founder-image" />
          <div className="founder-details">
            <h3 className="founder-name">Luke Blackwell</h3>
            <p className="founder-expertise">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
