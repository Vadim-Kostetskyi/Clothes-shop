import React from 'react';

const Success = ({ className }: { className?: string }): JSX.Element => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 117.333C78.7275 117.333 92.0608 111.363 101.712 101.712C111.364 92.0602 117.333 78.7268 117.333 63.9994C117.333 49.2719 111.364 35.9385 101.712 26.287C92.0608 16.6356 78.7275 10.666 64 10.666C49.2726 10.666 35.9392 16.6356 26.2876 26.287C16.6362 35.9385 10.6667 49.2719 10.6667 63.9994C10.6667 78.7268 16.6362 92.0602 26.2876 101.712C35.9392 111.363 49.2726 117.333 64 117.333Z"
      fill="#00CA8D"
    />
    <path
      d="M42.6667 64L58.6667 80L90.6667 48"
      stroke="#FDFDFD"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Success;
