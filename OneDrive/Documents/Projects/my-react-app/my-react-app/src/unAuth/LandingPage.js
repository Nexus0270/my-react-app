import React from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Bumpups from './components/Bumpups';
import Footer from './components/Footer';
import Timestamp from './components/Timestamp';

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <Timestamp />
      <Bumpups />
      <Footer />
    </div>
  );
}

export default LandingPage;
