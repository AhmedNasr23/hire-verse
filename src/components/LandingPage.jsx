import heroImage from '../assets/Ai-intervie.png'; // make sure this matches your file name exactly
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="header-text">&lt;//HIREVERSE//&gt;</div>

      <div className="image-container">
        <img src={heroImage} alt="AI Interview" className="ai-image" />
      </div>
      <Link to={'/auth'}>
        <button className="start-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
