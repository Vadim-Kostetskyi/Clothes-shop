import React from 'react';
import CrossButton from 'modules/core/components/CrossButton';
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
    <CrossButton className={styles.closeButton} onClick={onClose} />
  </div>
);

export default ShoppingCartHeader;
