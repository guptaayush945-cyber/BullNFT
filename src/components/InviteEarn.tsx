import { useState } from 'react';
import '../styles/invite-earn.css';

export default function InviteEarn() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://www.bullnft.com/signup?...';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Invite & Earn',
        text: 'Join me and earn together!',
        url: referralLink,
      });
    } else {
      alert('Referral Link: ' + referralLink);
    }
  };

  return (
    <div className="invite-earn-card">
      <div className="invite-header">
        <svg className="invite-icon" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="10" y="12" width="30" height="26" rx="2" stroke="#fdb913" strokeWidth="2"/>
          <path d="M15 12V8C15 6.89543 15.8954 6 17 6H33C34.1046 6 35 6.89543 35 8V12" stroke="#fdb913" strokeWidth="2"/>
          <circle cx="22" cy="24" r="2" fill="#fdb913"/>
          <path d="M28 20L28 28M24 24L32 24" stroke="#fdb913" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div className="invite-title-section">
          <h3>Invite & Earn</h3>
          <p>Share and grow together</p>
        </div>
      </div>

      <div className="invite-description">
        <p>
          Share your unique referral link and earn <span className="highlight">up to 12 levels</span> deep on your team's activity. Build your network and unlock passive income streams.
        </p>
      </div>

      <div className="referral-link-box">
        <input
          type="text"
          className="referral-input"
          value={referralLink}
          readOnly
        />
        <button className="copy-btn" onClick={handleCopy} title="Copy link">
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.5 5L8 13L3.5 8.5" stroke="#fdb913" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="7" width="6" height="8" stroke="#fdb913" strokeWidth="1.5"/>
              <path d="M9 6V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V11C15 11.5523 14.5523 12 14 12H13" stroke="#fdb913" strokeWidth="1.5"/>
            </svg>
          )}
        </button>
      </div>

      <button className="share-link-btn" onClick={handleShare}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="18" cy="5" r="3" fill="currentColor"/>
          <circle cx="6" cy="12" r="3" fill="currentColor"/>
          <circle cx="18" cy="19" r="3" fill="currentColor"/>
          <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Share Link
      </button>
    </div>
  );
}
