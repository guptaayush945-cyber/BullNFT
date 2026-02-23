import { useState } from 'react';
import { ShareNetworkIcon, CopyIcon } from './SvgIcons';
import '../styles/network-overview.css';

export default function NetworkOverview() {
  const [copied, setCopied] = useState(false);
  
  const referralLink = 'https://www.royalnfts.com?ref={userID}';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Referral Program',
        text: 'Share your link and earn rewards',
        url: referralLink
      });
    }
  };

  return (
    <div className="network-overview-container">
      {/* Section Title */}
      <div className="network-section-header">
        <h2 className="network-section-title">NETWORK OVERVIEW</h2>
      </div>

      {/* Referral Program Card */}
      <div className="referral-card">
        {/* Card Header */}
        <div className="referral-header">
          <div className="referral-icon-wrapper">
            <ShareNetworkIcon color="#B13FFF" />
          </div>
          <div className="referral-header-content">
            <h3 className="referral-title">Referral Program</h3>
            <p className="referral-subtitle">Share your link and earn rewards</p>
            <p className="referral-level">Earn up to 12 levels</p>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="referral-link-section">
          <label className="referral-link-label">YOUR REFERRAL LINK</label>
          <div className="referral-link-container">
            <input 
              type="text" 
              value={referralLink} 
              readOnly 
              className="referral-link-input"
            />
            <button 
              className="copy-button"
              onClick={handleCopyLink}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              <CopyIcon color="#FFD700" />
            </button>
          </div>
        </div>

        {/* Share Button */}
        <button 
          className="share-link-button"
          onClick={handleShareLink}
        >
          <span className="share-icon">↗</span>
          Share Link
        </button>
      </div>
    </div>
  );
}
