import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCardRequest from 'components/ProductCardRequest';
import styles from './index.module.scss';

const VisitedProducts = () => {
  const [visitedProducts, setVisitedProducts] = useState([]);
  const { t } = useTranslation();
  const { productId } = useParams();

  /* eslint-disable */
  useEffect(() => {
    const visitedProduct = localStorage.getItem('visited');
    const visitedProductArray = visitedProduct
      ? JSON.parse(visitedProduct)
          .filter((item: string) => item !== productId)
          .slice(0, 3)
      : [];
    setVisitedProducts(visitedProductArray);
  }, [productId]);
  /* eslint-enable */

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('viewedProducts')}</p>
      <div className={styles.cardWrapper}>
        {visitedProducts.map((id: string) => (
          <div className={styles.card} key={id}>
            <ProductCardRequest id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VisitedProducts;
