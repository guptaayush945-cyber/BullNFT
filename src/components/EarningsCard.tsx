import { useState } from 'react';
import '../styles/earnings-card.css';

export default function EarningsCard() {
  const [period, setPeriod] = useState('7');

  return (
    <div className="earnings-card">
      <div className="earnings-header">
        <div className="earnings-title-section">
          <h2>Earnings</h2>
          <h2>Performance</h2>
          <p>Your earnings over time</p>
        </div>
        <div className="time-buttons">
          <button
            className={`time-btn ${period === '7' ? 'active' : ''}`}
            onClick={() => setPeriod('7')}
          >
            {period === '7' ? '7' : ''}<br />Days
          </button>
          <button
            className={`time-btn ${period === '30' ? 'active' : ''}`}
            onClick={() => setPeriod('30')}
          >
            {period === '30' ? '30' : ''}<br />Days
          </button>
        </div>
      </div>

      <div className="chart-container">
        <div className="y-axis-labels">
          <span>0.01</span>
          <span>0.01</span>
          <span>0.00</span>
          <span>0.00</span>
        </div>

        <div className="chart-area">
          <svg viewBox="0 0 320 120" className="chart-svg">
            {/* Grid lines with gold tint */}
            <line x1="0" y1="30" x2="320" y2="30" stroke="rgba(253, 185, 19, 0.12)" strokeWidth="1" />
            <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(253, 185, 19, 0.12)" strokeWidth="1" />
            <line x1="0" y1="90" x2="320" y2="90" stroke="rgba(253, 185, 19, 0.12)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="x-axis-labels">
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
      </div>
    </div>
  );
}
