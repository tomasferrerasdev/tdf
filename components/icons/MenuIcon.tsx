import { FC } from 'react';

interface Props {
  size: number;
  strokeWidth: number;
  stroke?: string;
}

export const MenuIcon: FC<Props> = ({ size, strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke ? stroke : '#E9EBEA'}
      className={size ? `w-${size} h-${size}` : 'w-8 h-8'}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
