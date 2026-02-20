import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/upgrade-package.css';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

interface Plan {
  id: number;
  name: string;
  earnings: string;
  dailyProfit: string;
  color: string;
  progress: number;
}

export default function UpgradePackage() {
  const navigate = useNavigate();
  const [selectedPlan] = useState<Plan>({
    id: 1,
    name: 'Silver',
    earnings: 'Up to 25x',
    dailyProfit: '$125',
    color: '#00ff88',
    progress: 2
  });

  const upgradePlans: Plan[] = [
    {
      id: 2,
      name: 'Gold',
      earnings: 'Up to 50x',
      dailyProfit: '$250',
      color: '#FFD700',
      progress: 0
    },
    {
      id: 3,
      name: 'Platinum',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      color: '#E5E4E2',
      progress: 0
    },
    {
      id: 4,
      name: 'Diamond',
      earnings: 'Up to 200x',
      dailyProfit: '$1000',
      color: '#00BFFF',
      progress: 0
    }
  ];

  return (
    <>
      <Header />
      <div className="home-container">
        <main className="main-content-upgrade">
          <div className="upgrade-container">
            {/* Header Section */}
            <div className="upgrade-header">
              <div className="premium-badge">
                <span className="badge-icon">✨</span>
                <span>Premium Plans</span>
              </div>
              <h1 className="upgrade-title">Upgrade Your Plan</h1>
              <p className="upgrade-subtitle">
                Unlock higher earning limits, exclusive benefits, and maximize your trading potential
              </p>
            </div>

            {/* Current Plan Section */}
            <div className="plan-section">
              <h2 className="section-title">CURRENT PLAN</h2>
              <div className="current-plan-card" style={{ borderColor: selectedPlan.color }}>
                <div className="plan-icon-wrapper">
                  <div className="plan-icon" style={{ borderColor: selectedPlan.color }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7V12C3 18.627 7.477 23.966 12 24C16.523 23.966 21 18.627 21 12V7L12 2Z" 
                        stroke={selectedPlan.color} strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                <h3 className="plan-name">{selectedPlan.name}</h3>
                <p className="plan-description">Your active trading tier</p>

                <div className="plan-stats">
                  <div className="stat">
                    <div className="stat-icon">📈</div>
                    <div className="stat-content">
                      <p className="stat-value" style={{ color: selectedPlan.color }}>
                        {selectedPlan.earnings}
                      </p>
                      <p className="stat-label">MAX EARNINGS</p>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-content">
                      <p className="stat-value" style={{ color: '#FFD700' }}>
                        {selectedPlan.dailyProfit}
                      </p>
                      <p className="stat-label">DAILY PROFIT RATE</p>
                    </div>
                  </div>
                </div>

                <div className="progress-section">
                  <svg className="progress-circle" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      style={{
                        strokeDasharray: `${(selectedPlan.progress / 8) * 282.7} 282.7`
                      }}
                    />
                  </svg>
                  <div className="progress-text">{selectedPlan.progress}/8</div>
                </div>
              </div>
            </div>

            {/* Upgrade Options Section */}
            <div className="upgrade-options-section">
              <h2 className="section-title">UPGRADE OPTIONS</h2>
              <div className="plans-grid">
                {upgradePlans.map((plan) => (
                  <div key={plan.id} className="upgrade-plan-card" style={{ borderColor: plan.color }}>
                    <div className="plan-icon-wrapper small">
                      <div className="plan-icon" style={{ borderColor: plan.color }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L3 7V12C3 18.627 7.477 23.966 12 24C16.523 23.966 21 18.627 21 12V7L12 2Z" 
                            stroke={plan.color} strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="plan-name small">{plan.name}</h4>
                    <div className="plan-benefits">
                      <p className="benefit">
                        <span className="benefit-icon">📈</span>
                        {plan.earnings}
                      </p>
                      <p className="benefit">
                        <span className="benefit-icon">⚡</span>
                        {plan.dailyProfit}
                      </p>
                    </div>
                    <button className="upgrade-btn" style={{ borderColor: plan.color }} onClick={() => navigate('/home')}>
                      Upgrade Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
