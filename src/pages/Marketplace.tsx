import '../styles/marketplace.css';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { AllNFTsIcon, ListedNFTsIcon, AvailableNFTsIcon, TrendingIcon } from '../components/SvgIcons';
import { useState } from 'react';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('all');

  // Mock NFT data - replace with actual data from API
  const nftData = {
    all: [
      {
        id: 1,
        name: 'Royal',
        image: 'src/assets/images/NFTS/1.png',
        status: 'Already Listed',
        listed: true
      },
      {
        id: 2,
        name: 'Epic Crown',
        image: 'src/assets/images/NFTS/2.png',
        status: 'Available',
        listed: false
      },
      {
        id: 3,
        name: 'Gold Knight',
        image: 'src/assets/images/NFTS/3.png',
        status: 'Already Listed',
        listed: true
      }
    ],
    listed: [
      {
        id: 1,
        name: 'Royal',
        image: 'src/assets/images/NFTS/1.png',
        status: 'Already Listed',
        listed: true
      }
    ],
    available: [
      {
        id: 2,
        name: 'Epic Crown',
        image: 'src/assets/images/NFTS/2.png',
        status: 'Available',
        listed: false
      },
      {
        id: 3,
        name: 'Gold Knight',
        image: 'src/assets/images/NFTS/3.png',
        status: 'Available',
        listed: false
      }
    ]
  };

  const getDisplayedNFTs = () => {
    if (activeTab === 'all') return nftData.all;
    if (activeTab === 'listed') return nftData.listed;
    if (activeTab === 'available') return nftData.available;
    return nftData.all;
  };
  // Mock data - replace with actual data from API
  const planUsage = {
    planName: '25x Plan Limit Progress',
    tier: 'NFT PRO',
    currentUsed: 23.10,
    totalLimit: 625.00,
    currency: 'USDT',
    percentageUsed: 3.7,
    remaining: 601.90,
    dailyLimit: 125,
    usedToday: 0.0,
    remainingDaily: 125
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <main className="main-content-marketplace">
          {/* Marketplace Header */}
          <div className="marketplace-header">
            <h1 className="marketplace-title">NFT Marketplace</h1>
            <p className="marketplace-subtitle">
              Trade NFTs, unlock earning potential,<br/> and grow your digital portfolio
            </p>
          </div>

          {/* Plan Usage Overview */}
          <div className="marketplace-plan-usage-overview">
            <h2 className="marketplace-overview-title">Plan Usage Overview</h2>
            
            {/* Progress Card */}
            <div className="marketplace-usage-card marketplace-progress-card">
              <div className="marketplace-card-header">
                <div className="marketplace-card-icon">
                  <TrendingIcon color="#FFD700" />
                </div>
                <div className="marketplace-card-title-section">
                  <h3 className="marketplace-card-title">{planUsage.planName}</h3>
                  <span className="marketplace-tier-badge">{planUsage.tier}</span>
                </div>
              </div>

              <div className="marketplace-progress-info">
                <p className="marketplace-progress-value">
                  {planUsage.currentUsed.toFixed(2)} / {planUsage.totalLimit.toFixed(2)} {planUsage.currency}
                </p>
              </div>

              <div className="marketplace-progress-bar-container">
                <div className="marketplace-progress-bar">
                  <div 
                    className="marketplace-progress-fill" 
                    style={{ width: `${planUsage.percentageUsed}%` }}
                  ></div>
                </div>
              </div>

              <div className="marketplace-progress-stats">
                <div className="marketplace-stat-item">
                  <span className="marketplace-stat-label">% Used</span>
                  <span className="marketplace-stat-value used">{planUsage.percentageUsed.toFixed(1)}%</span>
                </div>
                <div className="marketplace-stat-item">
                  <span className="marketplace-stat-label">Remaining</span>
                  <span className="marketplace-stat-value remaining">
                    Remaining: {planUsage.remaining.toFixed(2)} {planUsage.currency}
                  </span>
                </div>
              </div>
            </div>

            {/* Daily Limit Card */}
            <div className="marketplace-usage-card marketplace-limit-card">
              <div className="marketplace-card-label">
                <span className="marketplace-label-icon">●</span>
                <span>DAILY LIMIT</span>
              </div>
              <div className="marketplace-card-value">
                <span className="marketplace-value-amount">{planUsage.dailyLimit}</span>
                <span className="marketplace-value-currency">{planUsage.currency}</span>
              </div>
            </div>

            {/* Used Today Card */}
            <div className="marketplace-usage-card marketplace-used-card">
              <div className="marketplace-card-label">
                <span className="marketplace-label-icon">●</span>
                <span>USED TODAY</span>
              </div>
              <div className="marketplace-card-value">
                <span className="marketplace-value-amount">{planUsage.usedToday.toFixed(2)}</span>
                <span className="marketplace-value-currency">{planUsage.currency}</span>
              </div>
            </div>

            {/* Remaining Card */}
            <div className="marketplace-usage-card marketplace-remaining-card">
              <div className="marketplace-card-label">
                <span className="marketplace-label-icon">●</span>
                <span>REMAINING</span>
              </div>
              <div className="marketplace-card-value">
                <span className="marketplace-value-amount">{planUsage.remainingDaily}</span>
                <span className="marketplace-value-currency">{planUsage.currency}</span>
              </div>
            </div>
          </div>

          {/* NFT Marketplace Section */}
          <div className="nft-marketplace-section">
            {/* Icon Tabs */}
            <div className="nft-icon-tabs">
              <button
                className={`nft-tab-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
                title="All NFTs"
              >
                <AllNFTsIcon color={activeTab === 'all' ? '#FFD700' : 'rgba(255, 255, 255, 0.6)'} />
              </button>
              <button
                className={`nft-tab-button ${activeTab === 'listed' ? 'active' : ''}`}
                onClick={() => setActiveTab('listed')}
                title="Listed NFTs"
              >
                <ListedNFTsIcon color={activeTab === 'listed' ? '#FFD700' : 'rgba(255, 255, 255, 0.6)'} />
              </button>
              <button
                className={`nft-tab-button ${activeTab === 'available' ? 'active' : ''}`}
                onClick={() => setActiveTab('available')}
                title="Available NFTs"
              >
                <AvailableNFTsIcon color={activeTab === 'available' ? '#FFD700' : 'rgba(255, 255, 255, 0.6)'} />
              </button>
            </div>

            {/* NFT Grid */}
            <div className="nft-grid-section">
              <div className="nft-section-header">
                <h3 className="nft-section-title">
                  {activeTab === 'all' && 'All NFTs'}
                  {activeTab === 'listed' && 'Listed NFTs'}
                  {activeTab === 'available' && 'Available NFTs'}
                </h3>
                <span className="nft-count-badge">
                  TOTAL NFTS
                  <br />
                  <strong>{getDisplayedNFTs().length}</strong>
                </span>
              </div>

              <div className="nft-cards-grid">
                {getDisplayedNFTs().map((nft) => (
                  <div key={nft.id} className="nft-card">
                    <div className="nft-card-image">
                      <img src={nft.image} alt={nft.name} />
                    </div>
                    <div className="nft-card-info">
                      <h4 className="nft-card-name">{nft.name}</h4>
                      <button
                        className={`nft-card-button ${nft.listed ? 'listed' : 'available'}`}
                        disabled={nft.listed}
                      >
                        {nft.status}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional sections can be added here */}
          
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
