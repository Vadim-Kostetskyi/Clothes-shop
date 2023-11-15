import React from 'react';

const ArrowSwiperCard = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="#333"
      strokeWidth="1"
      d="M7.293 4.707l7.293 7.293-7.293 7.293 1.414 1.414 8.707-8.707-8.707-8.707-1.414 1.414z"
    ></path>
  </svg>
);

export default ArrowSwiperCard;
