import { FC } from 'react';

const Logo: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="100"
    height="24"
    viewBox="0 0 100 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="18"
      fill="currentColor"
      fontFamily="Inter, sans-serif"
      fontSize="20"
      fontWeight="600"
      letterSpacing="-0.03em"
    >
      Yu<tspan fill="#C9F299">m</tspan>i
    </text>
  </svg>
);

export default Logo; 