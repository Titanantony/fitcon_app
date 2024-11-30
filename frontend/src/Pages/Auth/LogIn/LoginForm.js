import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333333;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #444444;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    try {
      const response = await fetch('http://localhost/fitcon/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        login(data.user);
        navigate('/'); // Redirect to OnBoardingPage
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your network and try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Welcome Back!</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <CheckboxContainer>
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
          Forgot password?
        </a>
      </CheckboxContainer>
      <Button type="submit">Log In</Button>
      <GoogleButton>Log In with Google</GoogleButton>
      <FooterText>
        Don’t have an account? <Link to="/signUp">Sign Up</Link>
      </FooterText>
    </Form>
  );
};

export default LoginForm;
