import React from "react";
import "./Service.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Service = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="#37b6ff" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Service;
