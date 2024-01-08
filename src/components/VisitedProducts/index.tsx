import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCardRequest from 'components/ProductCardRequest';
import styles from './index.module.scss';

const VisitedProducts = () => {
  const { t } = useTranslation();
  const { productId } = useParams();

  const visitedProduct = useMemo(() => localStorage.getItem('visited'), []);
  const visitedProductArray = useMemo(
    () => (visitedProduct ? JSON.parse(visitedProduct) : []),
    [visitedProduct],
  );

  const filteredVisitedProductArray = useMemo(
    () =>
      visitedProductArray
        ?.filter((item: string) => item !== productId)
        .slice(0, 3),
    [productId],
  );

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('viewedProducts')}</p>
      <div className={styles.cardWrapper}>
        {filteredVisitedProductArray.map((id: string) => (
          <div className={styles.card} key={id}>
            <ProductCardRequest id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VisitedProducts;
