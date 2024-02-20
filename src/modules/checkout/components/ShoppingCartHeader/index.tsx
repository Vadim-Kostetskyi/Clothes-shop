import React, { FC } from 'react';
import IconButton from 'modules/core/components/IconButton';
import Cross from 'assets/svgs/Cross';
import styles from './index.module.scss';

type ShoppingCartHeaderProps = {
  title: string;
  onClose: () => void;
};

const ShoppingCartHeader: FC<ShoppingCartHeaderProps> = ({
  onClose,
  title,
}): JSX.Element => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
    <IconButton className={styles.closeButton} onClick={onClose}>
      <Cross />
    </IconButton>
  </div>
);

export default ShoppingCartHeader;
