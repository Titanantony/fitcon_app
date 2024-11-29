import React from 'react';
import styled from 'styled-components';
import Illustration from './Illustration';
import LoginForm from './LoginForm';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1d1d1d;
  justify-content: center;
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

const LoginPage = () => {
  return (
    <Container>
      <Card>
        <IllustrationWrapper>
          <Illustration />
        </IllustrationWrapper>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </Card>
    </Container>
  );
};

export default LoginPage;
