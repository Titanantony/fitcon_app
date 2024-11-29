import React from 'react';
import './FitnessSection.css';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <span className="icon">{icon}</span>
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
