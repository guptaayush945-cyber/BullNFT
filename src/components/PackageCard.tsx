import '../styles/package-card.css';

interface Feature {
  icon: string;
  text: string;
}

interface PackageCardProps {
  id: number;
  name: string;
  level: string;
  price: string;
  tier: string;
  features: Feature[];
  color: string;
  isActive?: boolean;
  buttonText?: string;
  onButtonClick: () => void;
}

export default function PackageCard({
  name,
  level,
  price,
  tier,
  features,
  color,
  isActive = false,
  buttonText = 'Upgrade Now',
  onButtonClick
}: PackageCardProps) {
  return (
    <div className="package-card" style={{ borderColor: color }}>
      {/* Card Header */}
      <div className="package-card-header">
        <div className="package-icon-wrapper" style={{ borderColor: color }}>
          <div className="package-icon" style={{ backgroundColor: color }}>
            <span className="icon-symbol">◆</span>
          </div>
        </div>
        <div className="package-info">
          <h3 className="package-name" style={{ color: color }}>
            {name}
          </h3>
          <p className="package-level">{level}</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="package-price-section">
        <span className="price-currency">$</span>
        <span className="price-amount">{price}</span>
        <span className="price-tier">{tier}</span>
      </div>

      {/* Features List */}
      <div className="package-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span className="feature-icon" style={{ color: color }}>
              {feature.icon}
            </span>
            <span className="feature-text">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button
        className={`package-action-btn ${isActive ? 'active' : ''}`}
        style={{
          borderColor: color,
          color: isActive ? color : 'inherit'
        }}
        onClick={onButtonClick}
      >
        {isActive ? 'Active' : buttonText}
      </button>
    </div>
  );
}
