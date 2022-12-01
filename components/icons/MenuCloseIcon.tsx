import { FC } from 'react';

interface Props {
  size: number;
  strokeWidth: number;
  stroke?: string;
}

export const MenuCloseIcon: FC<Props> = ({ size, strokeWidth, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke ? stroke : '#171717'}
      className={size ? `w-${size} h-${size}` : 'w-8 h-8'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
