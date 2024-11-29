import React from "react";
import "../Classes.css"

const FeatureCard = ({ icon, title }) => (
  <div className="card border-0 text-center">
    <div className="card-body">
      <div className="feature-icon mb-2">{icon}</div>
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default FeatureCard;
