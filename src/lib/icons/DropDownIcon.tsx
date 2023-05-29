import type { SVGProps } from 'react';

const DropDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#061257"
      fillRule="evenodd"
      d="M6.528 8.333 10 12.5l3.472-4.167H6.528Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DropDownIcon;
