// src/components/Navbar.js

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand / Home button */}
        <span
          className="navbar-brand"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          Smart Food Saver
        </span>

        {/* Navigation links */}
        <ul className="navbar-nav">
          <li>
            <NavLink to="/" end>
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Home</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Donate</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Dashboard</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Contact</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>About</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
