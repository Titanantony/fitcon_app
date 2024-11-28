import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TestimonialCard = ({ text, name, username, image }) => {
  return (
    <div className="card testimonial-card">
      <div className="card-body">
        <p className="card-text">{text}</p>
        <div className="testimonial-user">
          <img
            src={image}
            alt={`Profile of ${name}`}
            className="rounded-circle testimonial-image"
          />
          <div>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-username text-muted">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
