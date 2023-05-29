import type { SVGProps } from 'react';
import { memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#2F3542"
      d="m14.763 12.666 3.983 3.83a.811.811 0 0 1 0 1.18.89.89 0 0 1-1.225 0l-3.983-3.832a7.959 7.959 0 0 1-4.867 1.64c-4.306 0-7.797-3.357-7.797-7.5 0-4.142 3.49-7.5 7.797-7.5 4.306 0 7.797 3.358 7.797 7.5 0 1.771-.638 3.399-1.705 4.682Zm-6.092 1.152c3.35 0 6.065-2.612 6.065-5.833 0-3.222-2.716-5.834-6.065-5.834-3.35 0-6.065 2.612-6.065 5.833 0 3.222 2.716 5.834 6.065 5.834Z"
    />
  </svg>
);
const SearchIcon = memo(SvgComponent);
export default SearchIcon;
