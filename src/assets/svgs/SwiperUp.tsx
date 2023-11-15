import React from 'react';

const SwiperUp = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M0 12c0-6.627 5.373-12 12-12s12 5.373 12 12c0 6.627-5.373 12-12 12s-12-5.373-12-12z"></path>
    <path
      fill="none"
      stroke="#fdfdfd"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="4"
      strokeWidth="0.8571"
      d="M6.857 12l5.143-5.143 5.143 5.143"
    ></path>
    <path
      fill="none"
      stroke="#fdfdfd"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="4"
      strokeWidth="0.8571"
      d="M8.143 15.857l3.857-3.857 3.857 3.857"
    ></path>
  </svg>
);

export default SwiperUp;
