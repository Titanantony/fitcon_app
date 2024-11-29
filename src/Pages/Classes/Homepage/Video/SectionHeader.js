import React from "react";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center my-4">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);

export default SectionHeader;
