import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import EarningsOverview from '../components/EarningsOverview';
import TeamSnapshot from '../components/TeamSnapshot';
import NetworkOverview from '../components/NetworkOverview';
import { CrownIcon, SparkleIcon, CardIcon, DiamondIcon, ShieldIcon, MoneyIcon, MarketplaceIcon, WalletIcon, LightningIcon } from '../components/SvgIcons';
import '../styles/dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const dashboardData = {
    title: 'Track your earnings, team performance, and trading activity',
    memberStatus: 'Royal Member',
    solBalance: '0.000',
    usdtBalance: '0.00',
    diamonds: '0.000',
    currentLevel: 'Silver',
    totalIncome: '12.50'
  };

  const navigationCards = [
    { id: 1, title: 'Marketplace', icon: MarketplaceIcon, color: '#B13FFF', route: '/marketplace' },
    { id: 2, title: 'My NFTs', icon: WalletIcon, color: '#00A3FF', route: '/mynfts' },
    { id: 3, title: 'Upgrade Plan', icon: LightningIcon, color: '#FF6432', route: '/upgrade' },
    { id: 4, title: 'Rewards', icon: DiamondIcon, color: '#FF1493', route: '/royalty' }
  ];

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <main className="dashboard-content">
          {/* Welcome Section */}
          <div className="dashboard-welcome">
            <h1 className="dashboard-title">{dashboardData.title}</h1>
            <div className="member-badge">
              <CrownIcon color="#FFD700" />
              <span className="badge-text">{dashboardData.memberStatus}</span>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="dashboard-cards">
            {/* SOL Balance */}
            <div className="dashboard-card sol-card">
              <div className="card-header">
                <h3 className="card-title">SOL BALANCE</h3>
                <div className="card-icon">
                  <SparkleIcon color="#FFD700" />
                </div>
              </div>
              <div className="card-value">
                <span className="amount">{dashboardData.solBalance}</span>
                <span className="currency">SOL</span>
              </div>
            </div>

            {/* USDT Balance */}
            <div className="dashboard-card usdt-card">
              <div className="card-header">
                <h3 className="card-title">USDT BALANCE</h3>
                <div className="card-icon">
                  <CardIcon color="#FFD700" />
                </div>
              </div>
              <div className="card-value">
                <span className="amount">{dashboardData.usdtBalance}</span>
                <span className="currency">USDT</span>
              </div>
            </div>

            {/* Diamonds */}
            <div className="dashboard-card diamonds-card">
              <div className="card-header">
                <h3 className="card-title">DIAMONDS</h3>
                <div className="card-icon">
                  <DiamondIcon color="#FFD700" />
                </div>
              </div>
              <div className="card-value">
                <span className="amount">{dashboardData.diamonds}</span>
                <span className="currency">Diamonds</span>
              </div>
            </div>

            {/* Current Level */}
            <div className="dashboard-card level-card">
              <div className="card-header">
                <h3 className="card-title">CURRENT LEVEL</h3>
                <div className="card-icon">
                  <CrownIcon color="#FFD700" />
                </div>
              </div>
              <div className="level-content">
                <div className="level-badge">
                  <ShieldIcon color="#FFD700" />
                </div>
                <span className="level-name">{dashboardData.currentLevel}</span>
              </div>
            </div>

            {/* Total Income */}
            <div className="dashboard-card income-card">
              <div className="card-header">
                <h3 className="card-title">TOTAL INCOME</h3>
                <div className="card-icon">
                  <MoneyIcon color="#FFD700" />
                </div>
              </div>
              <div className="card-value">
                <span className="amount">{dashboardData.totalIncome}</span>
                <span className="currency">USDT</span>
              </div>
            </div>
          </div>

        

          {/* Earnings Overview Section */}
          <EarningsOverview />

          {/* Team Breakdown Section */}
          <TeamSnapshot />

          {/* Navigation Cards */}
          <div className="navigation-cards">
            {navigationCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="nav-card"
                  onClick={() => navigate(card.route)}
                >
                  <div className="nav-card-icon-wrapper">
                    <IconComponent color={card.color} />
                  </div>
                  <h3 className="nav-card-title">{card.title}</h3>
                </div>
              );
            })}
          </div>
          {/* Network Overview Section */}
          <NetworkOverview />
          
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
