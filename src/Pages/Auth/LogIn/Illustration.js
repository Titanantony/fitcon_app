import React from 'react';
import styled from 'styled-components';

const ShapesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Shape = styled.div`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  background-color: ${(props) => props.color || '#000'};
  border-radius: ${(props) => (props.round ? '50%' : '0')};
`;

const Illustration = () => {
  return (
    <ShapesContainer>
      <Shape size="100px" color="#FFA500" round />
      <Shape size="60px" color="#9B59B6" />
      <Shape size="80px" color="#34495E" />
      <Shape size="70px" color="#F1C40F" />
    </ShapesContainer>
  );
};

export default Illustration;
