import React, { FC, ReactNode } from 'react';

type IconButtonProps = {
  onClick: () => void;
  className?: string;
  children: ReactNode;
};

const IconButton: FC<IconButtonProps> = ({
  onClick,
  className,
  children,
}): JSX.Element => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
