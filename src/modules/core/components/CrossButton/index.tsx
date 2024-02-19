import React from 'react';
import Cross from 'assets/svgs/Cross';
import styles from './index.module.scss';

type CrossButtonProps = {
  onClick: () => void;
  className?: string;
};

const CrossButton: React.FC<CrossButtonProps> = ({ onClick, className }) => (
  <button className={className} onClick={onClick}>
    <Cross className={styles.crossIcon} />
  </button>
);

export default CrossButton;
