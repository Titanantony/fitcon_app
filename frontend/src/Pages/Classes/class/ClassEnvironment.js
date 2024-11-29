import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../../images/3.jpeg";
import image2 from "../../../images/4.jpeg";
import image3 from "../../../images/5.jpeg";
import image4 from "../../../images/6.jpeg";
import image5 from "../../../images/8.jpeg"

const ClassEnvironment = () => {
  const classes = [
    { image: image1, title: "Group Energy", alt: "Group Energy Class" },
    { image: image2, title: "Peaceful Yoga", alt: "Peaceful Yoga Class" },
    { image: image3, title: "Strength Training", alt: "Strength Training Class" },
    { image: image4, title: "Cardio Blast", alt: "Cardio Blast Equipment" },
    
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3">Vibrant Class Environments</h1>
      <p className="text-center text-muted">
        Take a glimpse into our lively class settings that make fitness fun and engaging.
      </p>
      <div className="row mt-4">
        {classes.map((cls, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <EnvironmentCard image={cls.image} title={cls.title} alt={cls.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

const EnvironmentCard = ({ image, title, alt }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default ClassEnvironment;
