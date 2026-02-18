import '../styles/how-it-works.css';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Connect Wallet',
      description: 'Link your Solana wallet securely to get started',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="16" rx="2" stroke="#fdb913" strokeWidth="2"/>
          <path d="M10 8V6C10 5.44772 10.4477 5 11 5H21C21.5523 5 22 5.44772 22 6V8" stroke="#fdb913" strokeWidth="2"/>
          <circle cx="16" cy="16" r="2" fill="#fdb913"/>
        </svg>
      ),
      color: 'purple'
    },
    {
      number: 2,
      title: 'Choose Plan',
      description: 'Select a plan that fits your earning goals',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 10L16 6L24 10V22C24 23.1046 23.1046 24 22 24H10C8.89543 24 8 23.1046 8 22V10Z" stroke="#ff7f50" strokeWidth="2"/>
          <path d="M16 6V24" stroke="#ff7f50" strokeWidth="2"/>
          <circle cx="16" cy="16" r="2" fill="#ff7f50"/>
        </svg>
      ),
      color: 'blue'
    },
    {
      number: 3,
      title: 'Build Network',
      description: 'Invite friends and grow your team network',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="10" cy="10" r="2" fill="#d4a574"/>
          <circle cx="22" cy="10" r="2" fill="#d4a574"/>
          <circle cx="16" cy="24" r="2" fill="#d4a574"/>
          <path d="M10 12L16 22" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
          <path d="M22 12L16 22" stroke="#d4a574" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      color: 'green'
    },
    {
      number: 4,
      title: 'Earn NFTs',
      description: 'Collect passive income from your network activity',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke="#C0724D" strokeWidth="2"/>
          <circle cx="16" cy="16" r="6" fill="#C0724D" opacity="0.3"/>
          <path d="M16 11V21M11 16H21" stroke="#C0724D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'orange'
    },
    {
      number: 5,
      title: 'Trade NFTs',
      description: 'Buy, sell, and exchange NFTs on the platform',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="10" height="10" stroke="#FFB347" strokeWidth="2" rx="2"/>
          <rect x="16" y="14" width="10" height="10" stroke="#FFB347" strokeWidth="2" rx="2"/>
          <path d="M16 13L16 12" stroke="#FFB347" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 20L16 21" stroke="#FFB347" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'cyan'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-header">
        <h2>How It Works</h2>
        <div className="chart-line"></div>
        <p>Start earning in 5 simple steps</p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className={`step-card step-${step.color}`}>
            <div className="step-number" data-color={step.color}>
              {step.number}
            </div>
            <div className="step-content">
              <div className={`step-icon icon-${step.color}`}>
                {step.icon}
              </div>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
