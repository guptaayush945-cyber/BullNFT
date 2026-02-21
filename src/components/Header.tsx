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

  const handleMenuClick = (path: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
            <a href="/" onClick={(e) => handleMenuClick('/home', e)}>Home</a>
            <a href="/" onClick={(e) => handleMenuClick('/marketplace', e)}>Marketplace</a>
            <a href="/" onClick={(e) => handleMenuClick('/upgrade', e)}>Upgrade Plan</a>
            <a href="/" onClick={(e) => handleMenuClick('/about', e)}>Bull Pass</a>
            <a href="/" onClick={(e) => handleMenuClick('/contact', e)}>Team Tree</a>
          </nav>
        </div>
      )}
    </header>
  );
}
