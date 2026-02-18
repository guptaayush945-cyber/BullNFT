import '../styles/insights-grow-faster.css';

export default function InsightsToGrowFaster() {
  const insights = [
    {
      id: 1,
      title: 'Higher Plan = More Earnings',
      description: 'Upgrading unlocks deeper income levels.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 24L12 16L16 20L24 8" stroke="#fdb913" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8H24V12" stroke="#fdb913" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'purple'
    },
    {
      id: 2,
      title: 'NFT Trading Gives Bonus',
      description: 'Trade to boost your overall rewards.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 12L14 6L20 12" stroke="#ff7f50" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 8V20C14 22 15 24 18 24H24" stroke="#ff7f50" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M24 20L18 26L12 20" stroke="#ff7f50" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 24V12C18 10 17 8 14 8H8" stroke="#ff7f50" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      color: 'cyan'
    },
    {
      id: 3,
      title: 'Active Team = Passive Income',
      description: 'Team engagement multiplies your payouts.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="10" cy="10" r="3" stroke="#d4a574" strokeWidth="2"/>
          <circle cx="22" cy="10" r="3" stroke="#d4a574" strokeWidth="2"/>
          <circle cx="16" cy="24" r="3" stroke="#d4a574" strokeWidth="2"/>
          <path d="M10 13V16C10 18 12 20 16 20C20 20 22 18 22 16V13" stroke="#d4a574" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M13 22C13 22 14 24 16 24C18 24 19 22 19 22" stroke="#d4a574" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      color: 'indigo'
    }
  ];

  return (
    <section className="insights-section">
      <div className="insights-header">
        <h2>Insights to Grow Faster</h2>
        <p>Simple strategies to maximize your Web3 income</p>
      </div>

      <div className="insights-grid">
        {insights.map((insight) => (
          <div key={insight.id} className={`insight-card insight-${insight.color}`}>
            <div className={`insight-icon icon-${insight.color}`}>
              {insight.icon}
            </div>
            <div className="insight-content">
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
