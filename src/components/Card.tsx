import type { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  label?: string;
  isRoyal?: boolean;
  amount: string;
  title: string;
  showChart?: boolean;
  chartType?: 'dots' | 'line' | 'wave' | 'wave-line';
  colorType?: 'gold' | 'blue' | 'green' | 'pink';
}

export default function Card({
  icon,
  label,
  isRoyal = false,
  amount,
  title,
  showChart = true,
  chartType = 'dots',
  colorType = 'gold'
}: CardProps) {
  return (
    <div className={`card card-${colorType}`}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        {label && (
          <span className={`card-label ${isRoyal ? 'royal' : ''}`}>
            {label}
          </span>
        )}
      </div>
      <div className="card-content">
        <h2>{amount}</h2>
        <p>{title}</p>
      </div>
      {showChart && (
        <div className="card-chart">
          {chartType === 'dots' ? (
            <>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </>
          ) : chartType === 'wave' ? (
            <>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
            </>
          ) : chartType === 'wave-line' ? (
            <svg className="wave-line" viewBox="0 0 200 60" preserveAspectRatio="xMidYMid meet">
              <path className="wave-path" d="M0,30 Q50,10 100,30 T200,30" />
            </svg>
          ) : (
            <div className="chart-line"></div>
          )}
        </div>
      )}
    </div>
  );
}
