import { useNavigate } from 'react-router-dom';

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
          <div className="plan-icon">🛡️</div>
          <div>
            <p className="plan-label">CURRENT PLAN</p>
            <h3>Silver</h3>
          </div>
        </div>
        <button className="upgrade-btn" onClick={handleUpgrade}>👑 Upgrade</button>
      </div>
    </div>
  );
}
