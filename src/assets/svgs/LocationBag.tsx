import React from 'react';

const LocationBag = ({ className }: { className?: string }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17.5 6H6.5C5.67157 6 5 6.67157 5 7.5V19.5C5 20.3284 5.67157 21 6.5 21H17.5C18.3284 21 19 20.3284 19 19.5V7.5C19 6.67157 18.3284 6 17.5 6Z"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M15 9V5C15 3.34315 13.6568 2 12 2C10.3432 2 9 3.34315 9 5V9"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LocationBag;
