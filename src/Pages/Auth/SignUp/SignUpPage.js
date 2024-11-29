import React from 'react';
import styled from 'styled-components';
import Illustration from '../LogIn/Illustration';
import SignUpForm from './SignUpForm';
import background from "../../../images/4.jpeg"

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 900px;
  max-width: 100%;
`;

const IllustrationWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 40px;
`;

const SignUpPage = () => {
  return (
    <Container>
      <Card>
        <IllustrationWrapper>
          <Illustration />
        </IllustrationWrapper>
        <FormWrapper>
          <SignUpForm />
        </FormWrapper>
      </Card>
    </Container>
  );
};

export default SignUpPage;
