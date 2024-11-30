import React from "react";
import styled, { keyframes } from "styled-components";
import image from "../../../images/home.png";
import "./Homepage.css";
import { Link } from 'react-router-dom';


// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
;`

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
;`

const TextContent = styled.div`
@media (min-width: 450px) {
    max-width: 50%;
}
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e64a19;
    }
  }
  @media (max-width: 450px) {
    width: 100%;
}
;`

const ImageContent = styled.div`
  img {
    height: 80%;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 2s ease-in;

    @media (max-width: 450px) {
    display: none;
}
  }
;
`


// Component
const Homepage = () => {
  return (
    <div className="homepage">
    <HeroContainer>
      <TextContent>
        <h1 className="h11">Fitness & Health Training</h1>
        <p>
          Strong is the simplest, most intuitive workout tracking experience.
          Trusted by over 3 million users worldwide.
        </p>
        <button> <Link to="/signUp" style={{ textDecoration: 'none', color: 'black'}}>Get Started</Link></button>
      </TextContent>
      <ImageContent>
        <img src={image} alt="Man exercising" />
      </ImageContent>
    </HeroContainer>
      </div>
  );
};

export default Homepage;