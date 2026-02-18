import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import HeaderSignup from './HeaderSignup';
import packageLogo from '../assets/PackageLogo.png';

export default function SignUp() {
  const [inviterAddress, setInviterAddress] = useState('');
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    // Navigate to home page directly without showing modal
    navigate('/home');
  };

  return (
    <>
      <HeaderSignup onSigninClick={() => navigate('/home')} />
      <div className="signup-container">
      {/* Main Content */}
      <div className="signup-content">
        <div className="signup-main">
          {/* Title Section */}
          <div className="signup-title-section">
            <h1 className="signup-title">Create your account</h1>
            <p className="signup-subtitle">Start your journey with Bull NFT</p>
          </div>

          {/* Inviter Address Input */}
          <div className="inviter-section">
            <label className="inviter-label">
              Inviter Address (Required)
              <input
                type="text"
                placeholder="Enter inviter wallet address"
                value={inviterAddress}
                onChange={(e) => setInviterAddress(e.target.value)}
                className="inviter-input"
              />
            </label>
            <p className="inviter-hint">BULL NFT SUBSCRIPTION PACKAGES</p>
          </div>

          {/* Bull Pass Section */}
          <div className="royal-pass-section">
            <h3 className="section-title">Bull Pass Signup</h3>

            <div className="pass-card">
                 <h4 className="pass-name">Bull Pass</h4>
              <div className="pass-icon">
                <img src={packageLogo} alt="Package Logo" className="pass-icon-img" />
              </div>
              <div className="pass-header">
                <div className="pass-info">
                  <p className="pass-price">$10</p>
                  <p className="pass-tier">Standard</p>
                </div>
              </div>

              <div className="pass-content">
               
                <p className="pass-description">
                  Get started with Bull Pass membership and unlock exclusive benefits, priority
                  access, and premium rewards
                </p>
              </div>

              <button className="connect-wallet-btn" onClick={handleConnectWallet}>
                Connect Wallet to Sign Up
              </button>
            </div>

            {/* Footer Links */}
            <div className="signup-footer">
              <div className="signin-link">
                <p>Already have an account?</p>
                <a href="#" onClick={(e) => { e.preventDefault(); handleConnectWallet(); }} className="signin-btn">Sign in</a>
              </div>
              <div className="recover-link">
                Paid but signup didn't complete? <a href="/recover">Recover here</a>
              </div>
              <div className="mainnet-note">
                🔒 All transactions run on BNB Blockchain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
