import '../styles/whats-next.css';

export default function WhatsNext() {
  const nextSteps = [
    {
      id: 1,
      title: 'Upgrade Plan',
      description: 'Unlock more levels and higher earnings',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L20 12H28L21 17L24 25L16 20L8 25L11 17L4 12H12L16 4Z" stroke="#C0724D" strokeWidth="2" fill="none"/>
          <path d="M16 8V16" stroke="#C0724D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'purple'
    },
    {
      id: 2,
      title: 'Expand Network',
      description: 'Invite new users and increase your levels',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="10" cy="10" r="3" stroke="#FFB347" strokeWidth="2"/>
          <circle cx="22" cy="10" r="3" stroke="#FFB347" strokeWidth="2"/>
          <circle cx="16" cy="22" r="3" stroke="#FFB347" strokeWidth="2"/>
          <path d="M10 13V16C10 18 12 20 16 20C20 20 22 18 22 16V13" stroke="#FFB347" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      color: 'cyan'
    },
    {
      id: 3,
      title: 'Trade NFTs',
      description: 'Buy, sell & earn rewards from trading activities',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 16L14 10L20 16" stroke="#CD7F32" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 16L18 22L12 16" stroke="#CD7F32" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10V20C14 22 15 24 18 24H24" stroke="#CD7F32" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      color: 'indigo'
    }
  ];

  return (
    <section className="whats-next-section">
      <div className="whats-next-header">
        <h2>What's Next?</h2>
        <div className="chart-line"></div>
        <p>Take your next step to maximize your earnings</p>
      </div>

      <div className="next-steps-grid">
        {nextSteps.map((step) => (
          <div key={step.id} className={`next-step-card next-step-${step.color}`}>
            <div className={`next-step-icon icon-${step.color}`}>
              {step.icon}
            </div>
            <div className="next-step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
