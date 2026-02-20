import { useNavigate } from 'react-router-dom';
import '../styles/welcome-section.css';
import packageLogo from '../assets/images/packageicons/packagelogo.png';

export default function WelcomeSection() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/upgrade');
  };

  return (
    <div className="welcome-section">
      <h1>Welcome back,</h1>
      <p className="wallet-address">Shivani Gupta</p>
      <p className="subtitle">Your BULL NFT Command Center</p>

      {/* Current Plan Section */}
      <div className="plan-section">
        <div className="plan-card">
          <div className="plan-icon">
            <img src={packageLogo} alt="Package Logo" width="50" height="50" />
          </div>
          <div>
            <p className="plan-label">CURRENT PLAN</p>
            <h3>NFT Start</h3>
          </div>
          <button className="plan-upgrade-btn" onClick={handleUpgrade}>👑 Upgrade</button>
        </div>
       
      </div>
    </div>
  );
}
