import React from 'react';
import { useTranslation } from 'react-i18next';
import img from 'assets/images/Rectangle 41.png';
import ProductCard from 'components/ProductCard';
import styles from './index.module.scss';

const NewNow = (): JSX.Element => {
  const { t } = useTranslation();

  const productName = 'Shearling denim jacket';
  const price = '119.99 €';
  const sizes: string[] = ['XS', 'S', 'XL'];

  const props = {
    productName,
    price,
    sizes,
    image: img,
  };

  return (
    <div>
      <h1 className={styles.title}>{t('newNow')}</h1>
      <div className={styles.cardBox}>
        <ProductCard {...props} />
      </div>
    </div>
  );
};

export default NewNow;
