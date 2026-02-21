import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    closeMenu();
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
            <a href="/" onClick={() => { handleMenuClick('/home'); }}>Home</a>
            <a href="/" onClick={() => { handleMenuClick('/marketplace'); }}>Marketplace</a>
            <a href="/" onClick={() => { handleMenuClick('/upgrade'); }}>Upgrade Plan</a>
            <a href="/" onClick={() => { handleMenuClick('/about'); }}>Bull Pass</a>
            <a href="/" onClick={() => { handleMenuClick('/contact'); }}>Team Tree</a>
          </nav>
        </div>
      )}
    </header>
  );
}
