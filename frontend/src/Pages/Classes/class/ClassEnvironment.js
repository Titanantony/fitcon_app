import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../../images/3.jpeg";
import image2 from "../../../images/1.jpeg";
import image3 from "../../../images/5.jpeg";
import image4 from "../../../images/6.jpeg";

const ClassEnvironment = () => {
  const classes = [
    {
      image: image1,
      title: "Group Energy",
      alt: "Group Energy Class",
      link: "https://youtu.be/TYZEcAADwzc?si=o0Lt3xJ6GAZ6IGD-",
    },
    {
      image: image2,
      title: "Peaceful Yoga",
      alt: "Peaceful Yoga Class",
      link: "https://youtu.be/8TuRYV71Rgo?si=Ux_iURppEJsicC8B",
    },
    {
      image: image3,
      title: "Strength Training",
      alt: "Strength Training Class",
      link: "https://youtu.be/bYFR3jlTeWw?si=RunWVMd5QmsKleog",
    },
    {
      image: image4,
      title: "Cardio Blast",
      alt: "Cardio Blast Equipment",
      link: "https://youtu.be/ZllXIKITzfg?si=S1NFnQV2TkqyfSI7",
    },
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
            <EnvironmentCard
              image={cls.image}
              title={cls.title}
              alt={cls.alt}
              link={cls.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const EnvironmentCard = ({ image, title, alt, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </a>
  );
};

export default ClassEnvironment;
