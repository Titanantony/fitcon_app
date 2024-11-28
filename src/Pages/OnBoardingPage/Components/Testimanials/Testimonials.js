import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css"; // Optional for custom styles
import image from "../../../../images/1.jpeg"
import image1 from "../../../../images/2.jpeg"
import image2 from "../../../../images/7.jpeg"

const testimonials = [
  {
    text: "FitCon has transformed my fitness routine! The variety of classes keeps me motivated.",
    name: "Alex Johnson",
    username: "@alexjohnson",
    image: image2, // Replace with actual image URL or placeholder
  },
  {
    text: "The instructors are amazing and the community is so supportive!",
    name: "Jamie Lee",
    username: "@jamielee",
    image: image, // Replace with actual image URL or placeholder
  },
  {
    text: "I love the flexibility of on-demand workouts. FitCon fits perfectly into my busy schedule.",
    name: "Morgan Smith",
    username: "@morgansmith",
    image: image1, // Replace with actual image URL or placeholder
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Members Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            username={testimonial.username}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
