import { StarIcon, RocketIcon, UsersInsightIcon, StackIcon, TeamIcon } from './SvgIcons';
import '../styles/team-analytics.css';

export default function TeamAnalytics() {
  const analyticsData = {
    teamStrength: {
      active: 0,
      inactive: 0
    },
    retention: 'Needs Attention',
    retentionColor: '#FF5252',
    depthLevels: [
      { label: 'Depth 1 (Direct)', value: 4, max: 10 },
      { label: 'Depth 2', value: 0, max: 10 },
      { label: 'Depth 3', value: 0, max: 10 },
      { label: 'Depth 4+', value: 0, max: 10 }
    ],
    insights: [
      {
        id: 1,
        title: 'Best Performer',
        value: 'Chfs...buRZ',
        icon: StarIcon,
        color: '#00C8FF',
        borderColor: 'rgba(0, 200, 255, 0.3)'
      },
      {
        id: 2,
        title: 'Fastest Growi...',
        value: '4 → 4',
        icon: RocketIcon,
        color: '#FF1493',
        borderColor: 'rgba(255, 20, 147, 0.3)'
      },
      {
        id: 3,
        title: 'Most Referrals',
        value: '4',
        icon: UsersInsightIcon,
        color: '#B13FFF',
        borderColor: 'rgba(177, 63, 255, 0.3)'
      },
      {
        id: 4,
        title: 'Max Depth',
        value: '1 Levels',
        icon: StackIcon,
        color: '#FF9D00',
        borderColor: 'rgba(255, 157, 0, 0.3)'
      }
    ]
  };

  return (
    <div className="team-analytics-container">
      {/* Section Header */}
      <div className="analytics-header">
        <div className="analytics-header-icon">
          <TeamIcon color="#00C8FF" />
        </div>
        <div className="analytics-header-content">
          <h2 className="analytics-title">Team Analytics</h2>
          <p className="analytics-subtitle">Detailed performance overview</p>
        </div>
      </div>

      {/* Team Strength Ratio */}
      <div className="strength-section">
        <h3 className="section-subtitle">Team Strength Ratio</h3>
        <div className="strength-bar-container">
          <div className="strength-bar">
            <div className="strength-bar-fill active" style={{ width: '50%' }}></div>
            <div className="strength-bar-fill inactive" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="strength-labels">
          <span className="strength-label active">Active {analyticsData.teamStrength.active}%</span>
          <span className="strength-label inactive">Inactive {analyticsData.teamStrength.inactive}%</span>
        </div>
      </div>

      {/* Retention Status */}
      <div className="retention-section">
        <h3 className="section-subtitle">RETENTION</h3>
        <p className="retention-status" style={{ color: analyticsData.retentionColor }}>
          {analyticsData.retention}
        </p>
      </div>

      {/* Depth Overview */}
      <div className="depth-section">
        <h3 className="section-subtitle">Depth Overview</h3>
        <div className="depth-items">
          {analyticsData.depthLevels.map((level, index) => (
            <div key={index} className="depth-item">
              <span className="depth-label">{level.label}</span>
              <div className="depth-bar-wrapper">
                <div className="depth-bar">
                  <div 
                    className="depth-bar-fill" 
                    style={{ 
                      width: `${(level.value / level.max) * 100}%`,
                      backgroundColor: index === 0 ? '#00C8FF' : 'rgba(0, 200, 200, 0.3)'
                    }}
                  ></div>
                </div>
              </div>
              <span className="depth-value">{level.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Overview */}
      <div className="insights-section">
        <h3 className="section-subtitle">Insights Overview</h3>
        <div className="insights-grid">
          {analyticsData.insights.map((insight) => {
            const IconComponent = insight.icon;
            return (
              <div
                key={insight.id}
                className="insight-card"
                style={{ borderColor: insight.borderColor }}
              >
                <div className="insight-icon" style={{ color: insight.color }}>
                  <IconComponent color={insight.color} />
                </div>
                <h4 className="insight-title" style={{ color: insight.color }}>
                  {insight.title}
                </h4>
                <p className="insight-value">{insight.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
