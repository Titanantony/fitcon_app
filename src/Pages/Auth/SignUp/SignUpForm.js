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

const FooterText = styled.p`
  text-align: center;
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const SignUpForm = () => {
  return (
    <Form>
      <Title>Create an Account</Title>
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="Password" required />
      <Input type="password" placeholder="Confirm Password" required />
      <Button>Sign Up</Button>
      <GoogleButton>Sign Up with Google</GoogleButton>
      <FooterText>
        Already have an account? <a href="#">Log In</a>
      </FooterText>
    </Form>
  );
};

export default SignUpForm;
