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
