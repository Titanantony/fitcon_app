import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  max-width: 300px;
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StatIcon = styled.div`
  margin-right: 1rem;
  font-size: 2rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StatTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  color: #333;
`;

export const StatDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #555;
`;
