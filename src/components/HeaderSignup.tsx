import { useState } from 'react';
import logoImg from '../assets/logo.png';
import '../styles/header-signup.css';

interface HeaderSignupProps {
  onSigninClick?: () => void;
}

export default function HeaderSignup({ onSigninClick }: HeaderSignupProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-signup">
      <div className="header-signup-content">
        <div className="logo-section">
          <img src={logoImg} alt="BullNFTs Logo" className="logo" />
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-signup">
          <nav className="menu-items-signup">
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/signup" onClick={closeMenu} className="btn-signup">Signup</a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                onSigninClick?.();
              }} 
              className="btn-signin"
            >
              Signin
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
