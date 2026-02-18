import '../styles/team-snapshot.css';

export default function TeamSnapshot() {
  return (
    <div className="team-snapshot-card">
      <div className="team-header">
        <div className="team-title-section">
          <h3>Team Snapshot</h3>
          <p>Your network stats</p>
        </div>
        <svg className="team-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="12" cy="10" r="3" fill="#fdb913" />
          <circle cx="28" cy="10" r="3" fill="#fdb913" />
          <circle cx="20" cy="25" r="3" fill="#fdb913" />
          <path d="M12 13 L20 22" stroke="#fdb913" strokeWidth="1.5" fill="none" />
          <path d="M28 13 L20 22" stroke="#fdb913" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="team-stats">
        <div className="stat-row">
          <div className="stat-icon-label">
            <svg className="stat-icon directs" width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="12" cy="10" r="2.5" fill="#00d4ff" />
              <circle cx="28" cy="10" r="2.5" fill="#00d4ff" />
              <circle cx="20" cy="24" r="2.5" fill="#00d4ff" />
              <path d="M12 12 L20 22" stroke="#00d4ff" strokeWidth="1" fill="none" />
              <path d="M28 12 L20 22" stroke="#00d4ff" strokeWidth="1" fill="none" />
            </svg>
            <span>Directs</span>
          </div>
          <span className="stat-value">4</span>
        </div>

        <div className="stat-row">
          <div className="stat-icon-label">
            <svg className="stat-icon downline" width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="12" cy="8" r="2" fill="#d946ef" />
              <circle cx="28" cy="8" r="2" fill="#d946ef" />
              <circle cx="20" cy="20" r="2" fill="#d946ef" />
              <circle cx="8" cy="32" r="2" fill="#d946ef" />
              <circle cx="32" cy="32" r="2" fill="#d946ef" />
              <path d="M12 10 L20 18" stroke="#d946ef" strokeWidth="1" fill="none" />
              <path d="M28 10 L20 18" stroke="#d946ef" strokeWidth="1" fill="none" />
              <path d="M20 22 L8 30" stroke="#d946ef" strokeWidth="1" fill="none" />
              <path d="M20 22 L32 30" stroke="#d946ef" strokeWidth="1" fill="none" />
            </svg>
            <span>Downline</span>
          </div>
          <span className="stat-value">4</span>
        </div>

        <div className="stat-row">
          <div className="stat-icon-label">
            <svg className="stat-icon active" width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M10 20 L16 26 L30 12" stroke="#00ff88" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Active %</span>
          </div>
          <span className="stat-value active-value">0%</span>
        </div>
      </div>

      <button className="matrix-btn">
        View Matrix Tree →
      </button>
    </div>
  );
}
