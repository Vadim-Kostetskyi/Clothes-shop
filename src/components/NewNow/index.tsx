import React from 'react';
import { useTranslation } from 'react-i18next';
//pics from backend
import img1 from 'assets/images/product/Rectangle 41.png';
import img2 from 'assets/images/product/Rectangle 42.png';
import img3 from 'assets/images/product/Rectangle 43.png';
import img4 from 'assets/images/product/Rectangle 44.png';
import img5 from 'assets/images/product/Rectangle 45.png';
import img6 from 'assets/images/product/Rectangle 46.png';
import img7 from 'assets/images/product/Rectangle 47.png';
import ProductCard from 'components/ProductCard';
import styles from './index.module.scss';

const NewNow = (): JSX.Element => {
  const { t } = useTranslation();

  //info from backend
  const cards = [
    {
      productName: 'Shearling denim jacket',
      price: '119.99 €',
      sizes: ['XS', 'S', 'XL'],
      images: [img1, img2, img3, img4, img5, img6, img7],
    },
    {
      productName: 'Ribbed wool-blend sweater',
      price: '89 €',
      sizes: ['XS', 'M', 'L'],
      images: [img3, img4, img5],
    },
    {
      productName: '100% cotton bomber jacket',
      price: '54.59 €',
      sizes: ['S', 'M', 'XL'],
      images: [img2, img7],
    },
  ];

  return (
    <div className={styles.newNow}>
      <div className={styles.newNowBox}>
        <h1 className={styles.title}>{t('newNow')}</h1>
        <div className={styles.cardBox}>
          {cards.map(({ productName, price, sizes, images }, index) => (
            <ProductCard
              key={index}
              productName={productName}
              price={price}
              sizes={sizes}
              images={images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewNow;
