import '../styles/upgrade-confirm-modal.css';

interface UpgradeConfirmModalProps {
  isOpen: boolean;
  planName: string;
  price: string;
  dailyLimit: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function UpgradeConfirmModal({
  isOpen,
  planName,
  price,
  dailyLimit,
  onConfirm,
  onCancel
}: UpgradeConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button */}
        <button className="modal-close-btn" onClick={onCancel}>
          ✕
        </button>

        {/* Modal header with crown icon */}
        <div className="modal-header">
          <span className="crown-icon">👑</span>
          <h2>Confirm Upgrade</h2>
        </div>

        {/* Subtitle */}
        <p className="modal-subtitle">You are about to upgrade to <span className="highlight">{planName}</span></p>

        {/* Plan details */}
        <div className="modal-details">
          <div className="detail-item">
            <span className="detail-label">Plan Name</span>
            <span className="detail-value">{planName}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Price</span>
            <span className="detail-value price">{price}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Daily Limit</span>
            <span className="detail-value daily-limit">{dailyLimit}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
