import type { SVGProps } from 'react';
import { memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#FDD500"
      d="m7.108.369 1.48 2.896a.67.67 0 0 0 .517.358l3.308.464c.56.077.787.745.379 1.124l-2.397 2.25a.656.656 0 0 0-.197.583l.568 3.183c.095.541-.488.95-.99.696L6.816 10.42a.718.718 0 0 0-.634 0l-2.958 1.504c-.503.253-1.086-.155-.991-.696l.568-3.183a.65.65 0 0 0-.197-.584L.208 5.211c-.408-.38-.182-1.047.38-1.124l3.307-.464a.687.687 0 0 0 .517-.358L5.892.369c.247-.492.976-.492 1.224 0h-.008Z"
    />
  </svg>
);
const StarIcon = memo(SvgComponent);
export default StarIcon;
