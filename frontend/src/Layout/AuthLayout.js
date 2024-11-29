import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-content">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default AuthLayout;
