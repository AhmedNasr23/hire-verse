import React from 'react';
import heroImage from '../assets/Ai-intervie.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      {/* === Top-left Logo + Brand Name === */}
      <div className="logo-container">
        <img src={logo} alt="Hireverse Logo" className="logo-img" />
        <span className="brand-name">&lt;//HIREVERSE//&gt;</span>
      </div>

      {/* === Hero Image === */}
      <div className="image-container">
        <img src={heroImage} alt="AI Interview" className="ai-image" />
      </div>

      {/* === Call-to-Action Button === */}
      <Link to="/auth">
        <button className="start-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
