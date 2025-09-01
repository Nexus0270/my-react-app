import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Hello Landing Page</h1>
          <p className="landing-subtitle">
            Welcome to our amazing React application
          </p>
          <div className="landing-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="landing-features">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Built with React for optimal performance</p>
          </div>
          <div className="feature-card">
            <h3>Modern</h3>
            <p>Clean and responsive design</p>
          </div>
          <div className="feature-card">
            <h3>Reliable</h3>
            <p>Tested and production-ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
