import { useState } from 'react';
import logoImg from '../assets/logo.png';
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src={logoImg} alt="BULL NFT Logo" className="logo" style={{ height: '40px', width: 'auto' }} />
        </div>
        <button className="wallet-btn">Gvch..rtb</button>
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="menu-items">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="#" onClick={closeMenu}>Dashboard</a>
            <a href="#" onClick={closeMenu}>Marketplace</a>
            <a href="#" onClick={closeMenu}>Upgrade Plan</a>
            <a href="#" onClick={closeMenu}>Bull Pass</a>
            <a href="#" onClick={closeMenu}>Team Tree</a>
          </nav>
        </div>
      )}
    </header>
  );
}
