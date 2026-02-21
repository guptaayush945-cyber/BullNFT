import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/upgrade-package.css';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import UpgradeConfirmModal from '../components/UpgradeConfirmModal';
import PackageCard from '../components/PackageCard';
import packageLogo from '../assets/images/packageicons/PackageLogo.png';

interface Feature {
  icon: string;
  text: string;
}

interface Plan {
  id: number;
  name: string;
  level: string;
  earnings: string;
  dailyProfit: string;
  price: string;
  dailyLimit: string;
  tier: string;
  features: Feature[];
  color: string;
  progress: number;
}

export default function UpgradePackage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState<Plan | null>(null);

  const [selectedPlan] = useState<Plan>({
    id: 1,
    name: 'NFT Start',
    level: 'Level 1',
    earnings: 'Up to 25x',
    dailyProfit: '$125',
    price: '25',
    dailyLimit: '$125',
    tier: 'Entry Tier',
    features: [
      { icon: '●', text: 'Daily trading limit: $125 USDT' },
      { icon: '●', text: 'Perfect for beginners' },
      { icon: '●', text: 'Basic marketplace access' }
    ],
    color: '#00ff88',
    progress: 2
  });

  const upgradePlans: Plan[] = [
    {
      id: 2,
      name: 'NFT Pro',
      level: 'Level 2',
      earnings: 'Up to 50x',
      dailyProfit: '$250',
      price: '50',
      dailyLimit: '$250',
      tier: 'Standard Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $250 USDT' },
        { icon: '●', text: 'Good for active traders' },
        { icon: '●', text: 'Full marketplace access' }
      ],
      color: '#FFD700',
      progress: 0
    },
    {
      id: 3,
      name: 'NFT Plus',
      level: 'Level 3',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      price: '100',
      dailyLimit: '$500',
      tier: 'Premium Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $500 USDT' },
        { icon: '●', text: 'Premium marketplace features' },
        { icon: '●', text: 'Priority support' }
      ],
      color: '#E8B4B8',
      progress: 0
    },
    {
      id: 4,
      name: 'NFT Grow',
      level: 'Level 4',
      earnings: 'Up to 200x',
      dailyProfit: '$1000',
      price: '200',
      dailyLimit: '$1000',
      tier: 'Elite Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $1000 USDT' },
        { icon: '●', text: 'Advanced analytics included' },
        { icon: '●', text: 'Dedicated account manager' }
      ],
      color: '#DAA520',
      progress: 0
    },
    {
      id: 5,
      name: 'NFT Max',
      level: 'Level 5',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      price: '150',
      dailyLimit: '$500',
      tier: 'Advanced Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $500 USDT' },
        { icon: '●', text: 'Advanced trading tools' },
        { icon: '●', text: 'Priority API access' }
      ],
      color: '#CD7F32',
      progress: 0
    },
    {
      id: 6,
      name: 'NFT Ultra',
      level: 'Level 6',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      price: '175',
      dailyLimit: '$500',
      tier: 'VIP Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $500 USDT' },
        { icon: '●', text: 'VIP marketplace access' },
        { icon: '●', text: '24/7 premium support' }
      ],
      color: '#B87333',
      progress: 0
    },
    {
      id: 7,
      name: 'NFT Elite',
      level: 'Level 7',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      price: '250',
      dailyLimit: '$500',
      tier: 'Exclusive Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $500 USDT' },
        { icon: '●', text: 'Exclusive NFT drops' },
        { icon: '●', text: 'Private trading rooms' }
      ],
      color: '#F7E98E',
      progress: 0
    },
    {
      id: 8,
      name: 'NFT Legend',
      level: 'Level 8',
      earnings: 'Up to 100x',
      dailyProfit: '$500',
      price: '300',
      dailyLimit: '$500',
      tier: 'Legendary Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $500 USDT' },
        { icon: '●', text: 'Legendary perks unlocked' },
        { icon: '●', text: 'Custom trading strategies' }
      ],
      color: '#FFBF00',
      progress: 0
    },
    {
      id: 9,
      name: 'NFT Supreme',
      level: 'Level 9',
      earnings: 'Up to 250x',
      dailyProfit: '$1250',
      price: '500',
      dailyLimit: '$1250',
      tier: 'Supreme Tier',
      features: [
        { icon: '●', text: 'Daily trading limit: $1250 USDT' },
        { icon: '●', text: 'Supreme luxury benefits' },
        { icon: '●', text: 'Lifetime premium status' }
      ],
      color: '#FFFACD',
      progress: 0
    }
  ];

  const handleUpgradeClick = (plan: Plan) => {
    setSelectedUpgradePlan(plan);
    setShowModal(true);
  };

  const handleConfirmUpgrade = () => {
    // Add your upgrade logic here
    console.log('Upgrading to:', selectedUpgradePlan?.name);
    setShowModal(false);
    // You can add navigation or API calls here
    navigate('/home');
  };

  const handleCancelUpgrade = () => {
    setShowModal(false);
    setSelectedUpgradePlan(null);
  };

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
                    <img src={packageLogo} alt="Package Logo" width="40" height="40" />
                  </div>
                </div>

                <h3 className="plan-name">{selectedPlan.name}</h3>
                <p className="plan-description">Your active trading tier</p>

                <div className="plan-stats">
                  <div className="stat">
                    <div className="stat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <p className="stat-value" style={{ color: selectedPlan.color }}>
                        {selectedPlan.earnings}
                      </p>
                      <p className="stat-label">MAX EARNINGS</p>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
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
                    <p className="plan-description">Your active trading tier</p>
                    <div className="plan-stats">
                      <div className="stat">
                        <div className="stat-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                          </svg>
                        </div>
                        <div className="stat-content">
                          <p className="stat-value" style={{ color: plan.color }}>
                            {plan.earnings}
                          </p>
                          <p className="stat-label">MAX EARNINGS</p>
                        </div>
                      </div>
                      <div className="stat">
                        <div className="stat-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                        </div>
                        <div className="stat-content">
                          <p className="stat-value" style={{ color: plan.color }}>
                            {plan.dailyProfit}
                          </p>
                          <p className="stat-label">DAILY PROFIT RATE</p>
                        </div>
                      </div>
                    </div>
                    <button className="upgrade-btn" style={{ borderColor: plan.color }} onClick={() => handleUpgradeClick(plan)}>
                      Upgrade Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Cards Section */}
            <div className="packages-cards-section">
              <h2 className="section-title">ALL PACKAGES</h2>
              <div className="packages-container">
                {upgradePlans.map((plan) => (
                  <PackageCard
                    key={plan.id}
                    id={plan.id}
                    name={plan.name}
                    level={plan.level}
                    price={plan.price}
                    tier={plan.tier}
                    features={plan.features}
                    color={plan.color}
                    buttonText="Upgrade Now"
                    onButtonClick={() => handleUpgradeClick(plan)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      {selectedUpgradePlan && (
        <UpgradeConfirmModal
          isOpen={showModal}
          planName={selectedUpgradePlan.name}
          price={selectedUpgradePlan.price}
          dailyLimit={selectedUpgradePlan.dailyLimit}
          onConfirm={handleConfirmUpgrade}
          onCancel={handleCancelUpgrade}
        />
      )}
      <BottomNavigation />
    </>
  );
}
