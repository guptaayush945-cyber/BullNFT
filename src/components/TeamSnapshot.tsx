import { UserIcon, TeamIcon, CheckCircleIcon, ClockIcon } from './SvgIcons';
import '../styles/team-snapshot.css';

export default function TeamSnapshot() {
  const teamData = [
    {
      id: 1,
      title: 'DIRECT REFERRALS',
      value: 4,
      description: 'Your direct invites',
      icon: UserIcon,
      color: '#00C8FF',
      bgColor: 'rgba(0, 200, 255, 0.1)',
      borderColor: 'rgba(0, 200, 255, 0.3)'
    },
    {
      id: 2,
      title: 'TOTAL TEAM',
      value: 4,
      description: 'All network members',
      icon: TeamIcon,
      color: '#B13FFF',
      bgColor: 'rgba(177, 63, 255, 0.1)',
      borderColor: 'rgba(177, 63, 255, 0.3)'
    },
    {
      id: 3,
      title: 'ACTIVE',
      value: 0,
      description: 'Currently engaged',
      icon: CheckCircleIcon,
      color: '#00C896',
      bgColor: 'rgba(0, 200, 150, 0.1)',
      borderColor: 'rgba(0, 200, 150, 0.3)',
      showEmoji: true
    },
    {
      id: 4,
      title: 'INACTIVE',
      value: 0,
      description: 'View Details',
      icon: ClockIcon,
      color: '#ff9d00',
      bgColor: 'rgba(255, 157, 0, 0.1)',
      borderColor: 'rgba(255, 157, 0, 0.3)',
      showEmoji: true
    }
  ];

  return (
    <div className="team-snapshot-container">
      {/* Section Header */}
      <div className="team-section-header">
        <h2 className="team-section-title">TEAM BREAKDOWN</h2>
      </div>

      {/* Team Cards */}
      <div className="team-cards">
        {teamData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="team-card"
              style={{
                backgroundColor: item.bgColor,
                borderColor: item.borderColor
              }}
            >
              {/* Card Header */}
              <div className="team-card-header">
                <div className="team-card-title-section">
                  <h3 className="team-card-title">
                    {item.showEmoji && <span className="active-emoji">✨ </span>}
                    {item.title}
                  </h3>
                </div>
                <div className="team-card-icon">
                  <IconComponent color={item.color} />
                </div>
              </div>

              {/* Card Value */}
              <div className="team-card-value" style={{ color: item.color }}>
                {item.value}
              </div>

              {/* Card Description */}
              <p className="team-card-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
