import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'; // Assuming React Router
import './RootLayout.css';
import logo from '../images/logo.png';

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Athleticon Logo" className="logo-image" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/auth">Join Us</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* React Router will render child routes here */}
      </main>
    </div>
  );
};

export default RootLayout;
