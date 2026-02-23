import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/dashboard.css';

export default function Dashboard() {
  const dashboardData = {
    title: 'Track your earnings, team performance, and trading activity',
    memberStatus: 'Royal Member',
    solBalance: '0.000',
    usdtBalance: '0.00',
    diamonds: '0.000',
    currentLevel: 'Silver',
    totalIncome: '12.50'
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <main className="dashboard-content">
          {/* Welcome Section */}
          <div className="dashboard-welcome">
            <h1 className="dashboard-title">{dashboardData.title}</h1>
            <div className="member-badge">
              <span className="badge-icon">👑</span>
              <span className="badge-text">{dashboardData.memberStatus}</span>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="dashboard-cards">
            {/* SOL Balance */}
            <div className="dashboard-card sol-card">
              <div className="card-header">
                <h3 className="card-title">SOL BALANCE</h3>
                <div className="card-icon">✨</div>
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
                <div className="card-icon">💳</div>
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
                <div className="card-icon">💎</div>
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
                <div className="card-icon">👑</div>
              </div>
              <div className="level-content">
                <div className="level-badge">
                  <div className="shield-icon">🛡️</div>
                </div>
                <span className="level-name">{dashboardData.currentLevel}</span>
              </div>
            </div>

            {/* Total Income */}
            <div className="dashboard-card income-card">
              <div className="card-header">
                <h3 className="card-title">TOTAL INCOME</h3>
                <div className="card-icon">💵</div>
              </div>
              <div className="card-value">
                <span className="amount">{dashboardData.totalIncome}</span>
                <span className="currency">USDT</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
