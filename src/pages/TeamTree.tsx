import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { TeamIcon, CheckCircleIcon, ClockIcon, StackIcon, DiamondIcon, DepthViewIcon, TreeViewIcon } from '../components/SvgIcons';
import '../styles/team-tree.css';

interface TeamMember {
  id: string;
  number: number;
  status: 'active' | 'inactive';
  level: string;
  truncatedId: string;
}

interface LevelData {
  level: number;
  members: number;
  active: number;
  membersList: TeamMember[];
}

export default function TeamTree() {
  const navigate = useNavigate();
  const [expandedLevels, setExpandedLevels] = useState<number[]>([1]);

  // Mock data - Replace with actual API data
  const teamStats = {
    totalTeam: 4,
    active: 0,
    inactive: 4,
    strongestLevel: 'Level 1',
    health: 0
  };

  const levelData: LevelData[] = [
    {
      level: 1,
      members: 2,
      active: 0,
      membersList: [
        { id: 'H1AL24...ESC1', number: 1, status: 'inactive', level: 'L1', truncatedId: 'H1AL24...ESC1' },
        { id: 'A2BC56...FGH2', number: 2, status: 'inactive', level: 'L1', truncatedId: 'A2BC56...FGH2' }
      ]
    },
    {
      level: 2,
      members: 2,
      active: 0,
      membersList: [
        { id: 'X9LM34...IJK3', number: 3, status: 'inactive', level: 'L2', truncatedId: 'X9LM34...IJK3' },
        { id: 'Y7OP78...LMN4', number: 4, status: 'inactive', level: 'L2', truncatedId: 'Y7OP78...LMN4' }
      ]
    }
  ];

  const toggleLevelExpansion = (level: number) => {
    setExpandedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  return (
    <>
      <Header />
      <div className="team-tree-container">
        <main className="team-tree-content">
          {/* Header Section */}
          <div className="team-tree-header-section">
            <h1 className="team-tree-header-title">Team Tree</h1>
            <p className="team-tree-header-subtitle">Hierarchical view of your network</p>
          </div>

          {/* Stats Grid */}
          <div className="team-tree-stats">
            {/* Total Team */}
            <div className="stat-card total-team-card">
              <div className="stat-header">
                <TeamIcon color="#D946EF" />
                <span className="stat-label">TOTAL TEAM</span>
              </div>
              <div className="stat-value">{teamStats.totalTeam}</div>
            </div>

            {/* Active */}
            <div className="stat-card active-card">
              <div className="stat-header">
                <CheckCircleIcon color="#00FF88" />
                <span className="stat-label">ACTIVE</span>
              </div>
              <div className="stat-value active-value">{teamStats.active}</div>
            </div>

            {/* Inactive */}
            <div className="stat-card inactive-card">
              <div className="stat-header">
                <ClockIcon color="#FF4444" />
                <span className="stat-label">INACTIVE</span>
              </div>
              <div className="stat-value inactive-value">{teamStats.inactive}</div>
            </div>

            {/* Strongest */}
            <div className="stat-card strongest-card">
              <div className="stat-header">
                <StackIcon color="#00FFFF" />
                <span className="stat-label">STRONGEST</span>
              </div>
              <div className="stat-value level-value">{teamStats.strongestLevel}</div>
            </div>

            {/* Health */}
            <div className="stat-card health-card">
              <div className="stat-header">
                <DiamondIcon color="#FF1493" />
                <span className="stat-label">Health</span>
              </div>
              <div className="stat-value health-value">{teamStats.health}%</div>
            </div>
          </div>

          {/* View Toggle Buttons */}
          <div className="view-toggle-container">
            <button
              className="view-toggle-btn active"
              disabled
              style={{ cursor: 'default' }}
            >
              <DepthViewIcon color="#ffffff" />
              Depth View
            </button>
            <button
              className="view-toggle-btn"
              onClick={() => navigate('/treeview')}
            >
              <TreeViewIcon color="rgba(255, 255, 255, 0.6)" />
              Tree View
            </button>
          </div>

          {/* Content Area */}
          <div className="depth-view-content">
            {/* Levels */}
            {levelData.map((level) => (
              <div key={level.level} className="level-section">
                <div
                  className="level-header"
                  onClick={() => toggleLevelExpansion(level.level)}
                >
                  <div className="level-info">
                    <button className="expand-toggle">
                      {expandedLevels.includes(level.level) ? '▼' : '▶'}
                    </button>
                    <h3 className="level-title">
                      Level <span className="level-number">{level.level}</span>
                    </h3>
                  </div>
                </div>

                {/* Members Table */}
                {expandedLevels.includes(level.level) && (
                  <div className="members-table-wrapper">
                    <table className="members-table">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Name</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {level.membersList.map((member) => (
                          <tr key={member.id} className="table-row">
                            <td className="table-srno">#{member.number}</td>
                            <td className="table-name">{member.truncatedId}</td>
                            <td className="table-status">
                              <span className={`status-badge ${member.status}`}>
                                {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}
