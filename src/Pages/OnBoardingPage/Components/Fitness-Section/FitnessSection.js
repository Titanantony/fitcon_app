import React from 'react';
import './FitnessSection.css';
import FeatureItem from './FeatureItem';
import fitnessImage from '../../../../images/image.png';

const FitnessSection = () => {
    return (
        <div>
            <h1 className='Heading live'> Live, On-Demand, Personalized Classes</h1>
            <div className="fitness-section">
                <img src={fitnessImage} alt="Woman exercising in a gym" className="fitness-image" />
                <div className="content">
                    <h2 className="title">Unlock Your Potential</h2>
                    <h1 className="heading">Diverse Fitness Classes</h1>
                    <p className="description">
                        Discover a variety of classes from yoga to strength training, all designed to fit your lifestyle and goals.
                    </p>
                    <FeatureItem
                        icon="📹"
                        title="Live Sessions"
                        description="Engage with live classes and connect with instructors in real-time."
                    />
                    <FeatureItem
                        icon="▶️"
                        title="On-Demand Workouts"
                        description="Access a library of workouts anytime, anywhere."
                    />
                    <FeatureItem
                        icon="🏋️‍♀️"
                        title="Personalized Plans"
                        description="Get custom workout plans tailored to your fitness level."
                    />
                </div>
            </div>
        </div>
    );
};

export default FitnessSection;
