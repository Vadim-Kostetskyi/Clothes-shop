import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from 'components/ProductCard';
import styles from './index.module.scss';

const NewNow = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className={styles.title}>{t('newNow')}</h1>
      <div className={styles.cardBox}>
        <ProductCard />
      </div>
    </div>
  );
};

export default NewNow;
