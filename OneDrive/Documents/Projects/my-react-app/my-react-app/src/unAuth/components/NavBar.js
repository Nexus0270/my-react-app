import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side */}
        <div className="navbar-brand">
          <h2>Hakeem's PLAYGROUND</h2>
        </div>

        {/* Right side */}
        <div className="navbar-actions">
          <a href="#signup" className="signup-link">Sign up</a>
          <a href="#login" className="login-button">Log in</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
