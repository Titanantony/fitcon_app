import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #333333;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #4285f4;
`;

const LoginForm = () => {
  return (
    <Form>
      <Title>Welcome back!</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <CheckboxContainer>
        <label>
          <input type="checkbox" /> Remember for 30 days
        </label>
        <a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>
          Forgot password?
        </a>
      </CheckboxContainer>
      <Button>Log In</Button>
      <GoogleButton>Log In with Google</GoogleButton>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Don’t have an account? <a href="#">Sign Up</a>
      </p>
    </Form>
  );
};

export default LoginForm;
