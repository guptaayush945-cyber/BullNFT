import { useState } from 'react';
import '../styles/connectwallet.css';

interface ConnectWalletProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWallet({ isOpen, onClose }: ConnectWalletProps) {
  const [walletAddress, setWalletAddress] = useState('0x55a3b65063b67d926b6903591fb30eeccec586f7');

  const handleConnectWallet = () => {
    if (walletAddress.trim()) {
      console.log('Connecting wallet:', walletAddress);
      // Add your wallet connection logic here
      setWalletAddress('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="wallet-modal-header">
          <h2>Connect Wallet</h2>
          <button className="wallet-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Subtitle */}
        <p className="wallet-subtitle">Enter your wallet address to connect</p>

        {/* Wallet Address Input */}
        <div className="wallet-input-section">
          <input
            type="text"
            className="wallet-address-input"
            placeholder="Enter your wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleConnectWallet()}
          />
        </div>

        {/* Connect Button */}
        <button 
          className="wallet-connect-btn"
          onClick={handleConnectWallet}
          disabled={!walletAddress.trim()}
        >
          Connect Wallet
        </button>

        {/* Footer */}
        <p className="wallet-footer">🔒 Currently running on BNB Blockchain</p>
      </div>
    </div>
  );
}
