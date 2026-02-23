import { ChartIcon, TrendUpIcon, TrendDownIcon, BarChartIconSmall, PulseIcon } from './SvgIcons';
import '../styles/earnings-overview.css';

interface DayData {
  day: string;
  value: number;
  maxValue: number;
}

export default function EarningsOverview() {
  // 7-day earnings data
  const earningsData: DayData[] = [
    { day: 'Tue', value: 2.4, maxValue: 5 },
    { day: 'Wed', value: 1.8, maxValue: 5 },
    { day: 'Thu', value: 3.2, maxValue: 5 },
    { day: 'Fri', value: 2.7, maxValue: 5 },
    { day: 'Sat', value: 2.1, maxValue: 5 },
    { day: 'Sun', value: 1.5, maxValue: 5 },
    { day: 'Mon', value: 3.8, maxValue: 5 }
  ];

  const stats = {
    total7d: '17.50',
    avgPerDay: '2.50',
    peakDay: '3.80',
    bestDay: 'Monday',
    bestDayValue: '3.80',
    lowestDay: 'Sunday',
    lowestDayValue: '1.50',
    avgEarnings: '0.00',
    stability: '100%',
    stabilityStatus: 'Consistent'
  };

  return (
    <div className="earnings-overview-container">
      {/* Section Title */}
      <div className="earnings-section-header">
        <h2 className="earnings-section-title">EARN OVERVIEW</h2>
      </div>

      {/* Main Earnings Card */}
      <div className="earnings-card">
        <div className="earnings-card-header">
          <div className="earnings-header-content">
            <h3 className="earnings-card-title">7-Day Earnings Overview</h3>
            <p className="earnings-card-subtitle">Your earnings performance in USDT</p>
          </div>
          <div className="earnings-icon">
            <ChartIcon color="#FFD700" />
          </div>
        </div>

        {/* Chart Section */}
        <div className="earnings-chart">
          <div className="chart-bars">
            {earningsData.map((day, index) => {
              const height = (day.value / day.maxValue) * 100;
              return (
                <div key={index} className="chart-bar-container">
                  <div className="chart-bar-wrapper">
                    <div 
                      className="chart-bar" 
                      style={{ height: `${height}%` }}
                    >
                      <div className="bar-glow"></div>
                    </div>
                  </div>
                  <span className="chart-day">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="earnings-stats">
          <div className="stat-box">
            <span className="stat-label">TOTAL (7D)</span>
            <span className="stat-amount">{stats.total7d}</span>
            <span className="stat-currency">USDT</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">AVG / DAY</span>
            <span className="stat-amount">{stats.avgPerDay}</span>
            <span className="stat-currency">USDT</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">PEAK DAY</span>
            <span className="stat-amount">{stats.peakDay}</span>
            <span className="stat-currency">USDT</span>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="earnings-insights">
        <h3 className="insights-title">7-DAY INSIGHTS</h3>
        
        <div className="insights-cards">
          {/* Best Day Card */}
          <div className="insight-card best-day-card">
            <div className="insight-icon-wrapper best-day">
              <TrendUpIcon color="#00C896" />
            </div>
            <div className="insight-content">
              <span className="insight-label">BEST DAY</span>
              <span className="insight-value">{stats.bestDayValue}</span>
              <span className="insight-currency">USDT</span>
              <span className="insight-day">{stats.bestDay}</span>
            </div>
          </div>

          {/* Lowest Day Card */}
          <div className="insight-card lowest-day-card">
            <div className="insight-icon-wrapper lowest-day">
              <TrendDownIcon color="#FF6432" />
            </div>
            <div className="insight-content">
              <span className="insight-label">LOWEST DAY</span>
              <span className="insight-value">{stats.lowestDayValue}</span>
              <span className="insight-currency">USDT</span>
              <span className="insight-day">{stats.lowestDay}</span>
            </div>
          </div>

          {/* Avg Earnings Card */}
          <div className="insight-card avg-earnings-card">
            <div className="insight-icon-wrapper avg-earnings">
              <BarChartIconSmall color="#9B6FE6" />
            </div>
            <div className="insight-content">
              <span className="insight-label">AVG EARNINGS</span>
              <span className="insight-value">{stats.avgEarnings}</span>
              <span className="insight-currency">USDT</span>
              <span className="insight-subtitle">per day</span>
            </div>
          </div>

          {/* Stability Card */}
          <div className="insight-card stability-card">
            <div className="insight-icon-wrapper stability">
              <PulseIcon color="#00C896" />
            </div>
            <div className="insight-content">
              <span className="insight-label">STABILITY</span>
              <span className="insight-value">{stats.stability}</span>
              <span className="insight-subtitle">{stats.stabilityStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
