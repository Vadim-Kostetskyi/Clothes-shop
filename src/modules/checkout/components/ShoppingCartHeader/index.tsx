import React from 'react';
import Cross from 'assets/svgs/Cross';
import styles from './index.module.scss';

type ShoppingCartHeaderProps = {
  title: string;
  onClose: () => void;
};

const ShoppingCartHeader: React.FC<ShoppingCartHeaderProps> = ({
  onClose,
  title,
}) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    <button className={styles.closeButton} onClick={onClose}>
      <Cross className={styles.crossIcon} />
    </button>
  </div>
);

export default ShoppingCartHeader;
