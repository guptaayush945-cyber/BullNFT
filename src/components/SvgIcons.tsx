interface SvgIconProps {
  color: string;
}

export const EarningsIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28L12 16L18 22L28 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="10" r="3" fill={color} />
  </svg>
);

export const ChartIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="4" height="10" fill={color} />
    <rect x="14" y="16" width="4" height="16" fill={color} />
    <rect x="20" y="10" width="4" height="22" fill={color} />
    <rect x="26" y="14" width="4" height="18" fill={color} />
  </svg>
);

export const CalendarIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="28" height="24" rx="2" stroke={color} strokeWidth="2" />
    <line x1="6" y1="14" x2="34" y2="14" stroke={color} strokeWidth="2" />
    <line x1="12" y1="6" x2="12" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="6" x2="28" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="20" r="1.5" fill={color} />
    <circle cx="20" cy="20" r="1.5" fill={color} />
    <circle cx="28" cy="20" r="1.5" fill={color} />
    <circle cx="12" cy="26" r="1.5" fill={color} />
    <circle cx="20" cy="26" r="1.5" fill={color} />
  </svg>
);

export const CrownIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20L12 10L16 16L20 8L24 16L28 10L32 20L8 20Z" fill={color} />
    <rect x="8" y="20" width="24" height="12" rx="2" stroke={color} strokeWidth="2" />
  </svg>
);
export const AllNFTsIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="2" />
    <rect x="22" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="2" />
    <rect x="6" y="22" width="12" height="12" rx="2" stroke={color} strokeWidth="2" />
    <rect x="22" y="22" width="12" height="12" rx="2" stroke={color} strokeWidth="2" />
  </svg>
);

export const ListedNFTsIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="2" />
    <path d="M13 20L18 25L27 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AvailableNFTsIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L24 12H28C29.1 12 30 12.9 30 14V28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28V14C10 12.9 10.9 12 12 12H16L20 6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="21" r="4" stroke={color} strokeWidth="2" />
  </svg>
);

export const TrendingIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 32L14 18L22 24L34 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 10H36V14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SparkleIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L23 12H31L25 16L27 24L20 20L13 24L15 16L9 12H17L20 4Z" fill={color} />
    <circle cx="8" cy="10" r="2" fill={color} />
    <circle cx="32" cy="28" r="2" fill={color} />
    <circle cx="6" cy="32" r="1.5" fill={color} />
  </svg>
);

export const CardIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="28" height="20" rx="2" stroke={color} strokeWidth="2" />
    <line x1="6" y1="18" x2="34" y2="18" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="28" r="2" fill={color} />
    <line x1="18" y1="27" x2="26" y2="27" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const DiamondIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L28 12L34 26C34 28 32 30 30 30H10C8 30 6 28 6 26L12 12L20 4Z" fill={color} opacity="0.3" stroke={color} strokeWidth="2" />
    <line x1="20" y1="4" x2="12" y2="12" stroke={color} strokeWidth="2" />
    <line x1="20" y1="4" x2="28" y2="12" stroke={color} strokeWidth="2" />
  </svg>
);

export const ShieldIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L10 10V18C10 26 20 32 20 32C20 32 30 26 30 18V10L20 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 22L18 24L24 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MoneyIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="24" height="16" rx="2" stroke={color} strokeWidth="2" />
    <circle cx="20" cy="20" r="4" stroke={color} strokeWidth="2" />
    <line x1="10" y1="10" x2="6" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="30" x2="34" y2="34" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TrendUpIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 28L16 16L24 22L32 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 10H32V16" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrendDownIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10L16 22L24 16L32 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 28H32V22" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BarChartIconSmall = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="4" height="12" fill={color} />
    <rect x="14" y="16" width="4" height="18" fill={color} />
    <rect x="20" y="10" width="4" height="24" fill={color} />
    <rect x="26" y="18" width="4" height="16" fill={color} />
  </svg>
);

export const PulseIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20L10 20L14 10L16 28L20 16L24 26L28 20L36 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" opacity="0.3" />
  </svg>
);

export const ShareNetworkIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="8" r="4" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="28" r="4" stroke={color} strokeWidth="2" />
    <circle cx="30" cy="28" r="4" stroke={color} strokeWidth="2" />
    <path d="M18 11L12 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M22 11L28 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CopyIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="18" height="20" rx="2" stroke={color} strokeWidth="2" />
    <path d="M26 18H28C29.1 18 30 18.9 30 20V32C30 33.1 29.1 34 28 34H16C14.9 34 14 33.1 14 32V30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShareIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 10L12 22L28 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="10" r="4" stroke={color} strokeWidth="2.5" />
    <circle cx="12" cy="22" r="4" stroke={color} strokeWidth="2.5" />
    <circle cx="28" cy="34" r="4" stroke={color} strokeWidth="2.5" />
  </svg>
);

export const MarketplaceIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14L10 8H30L32 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14L12 32H28L30 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="20" r="1.5" fill={color} />
    <circle cx="24" cy="20" r="1.5" fill={color} />
  </svg>
);

export const WalletIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="28" height="20" rx="2" stroke={color} strokeWidth="2.5" />
    <path d="M6 16H34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="28" cy="25" r="2.5" stroke={color} strokeWidth="2" />
  </svg>
);

export const LightningIcon = ({ color }: SvgIconProps) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L24 14H34L26 20L30 30L20 24L10 30L14 20L6 14H16L20 4Z" fill={color} />
  </svg>
);