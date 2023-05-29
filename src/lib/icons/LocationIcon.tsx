import type { SVGProps } from 'react';
import { memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#6A719A"
      d="M13 8c0 3.21-3.367 5.416-4.575 6.105a.85.85 0 0 1-.85 0C6.367 13.416 3 11.209 3 8c0-3 2.423-5 5-5 2.667 0 5 2 5 5Z"
    />
    <circle cx={8} cy={8} r={2.167} stroke="#6A719A" />
  </svg>
);
const LocationIcon = memo(SvgComponent);
export default LocationIcon;
