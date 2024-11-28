import React from 'react'
import "./Objectives.css"

function Objectives() {
  return (
   <div className="container">
      {/* Header */}
      <h1 className="header">Achieve your Health Objectives in 1-2-3</h1>

      {/* Cards Section */}
      <div className="cards">
        <div className='left'>
            {/* Card 1 */}
            <Card
            icon="🎯"
            title="Turn your phone or smartwatch into your coach"
            description="Track your workouts and get tons of data and tips to help you run better."
            />

            {/* Card 2 */}
            <Card
            icon="🏃‍♂️"
            title="Marathon? 5K?"
            description="Get tailored training plans created specifically for you and your objectives, no matter where you are at."
            />
        </div>

        <div className='right'>
            {/* Card 3 (Custom Challenges) */}
            <CustomCard />
        </div>
      </div>
    </div>
  );
}

const Card = ({ icon, title, description }) => (
  <div className="card">
    <span className="icon">{icon}</span>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

const CustomCard = () => (
  <div className="card custom-card">
    <span className="icon" role="img" aria-label="right">✅</span>
    <h3 className="card-title">Create Your Own Custom Challenges</h3>
    <p className="card-description">
      Push yourself and your friends. For extra motivation, reach out and find
      support from the entire community.
    </p>
    <div className="entries">
      <div className="entry">
        <span role="img" aria-label="sun">☀️ Morning Entry</span>
        <span>Added</span>
      </div>
      
      {/* <div className="entry">
        <span>☀️ Morning Entry</span>
        <span>Added</span>
      </div> */}
      <div className="entry">
        <span role="img" aria-label="sun">☀️ Morning Entry</span>

        <span>Added</span>
      </div>
      <div className="entry">
        <span role="img" aria-label="crescent moon">🌙 Evening Reflection</span>
        <span className="add-button">+ Add Now</span>
      </div>
    </div>
  </div>
  )


export default Objectives