import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    { icon: "🏋️‍♂️", title: "Strengthen with Expert Guidance" },
    { icon: "❤️", title: "Boost Cardiovascular Health" },
    { icon: "🤸‍♀️", title: "Enhance Flexibility and Balance" },
  ];

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 mb-4">
            <FeatureCard icon={feature.icon} title={feature.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
