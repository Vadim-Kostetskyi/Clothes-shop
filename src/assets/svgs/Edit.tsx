import React, { FC, SVGProps } from 'react';

const Edit: FC<SVGProps<SVGSVGElement>> = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Edit;
