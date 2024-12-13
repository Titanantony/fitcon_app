import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the user is authenticated
  const [user, setUser] = useState(null); // Stores user details (optional)

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Store user info
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const signup = async (signupData) => {
    try {
      const response = await fetch('http://localhost/fitcon/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setUser(data.user); // Assuming the backend returns user data upon successful registration
        return { success: true, message: 'Signup successful' };
      } else {
        return { success: false, message: data.message || 'Signup failed. Please try again.' };
      }
    } catch (err) {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
