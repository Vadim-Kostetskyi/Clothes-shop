import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchProductsByParameterQuery } from 'redux/productsApi';
import ProductCardRequest from 'components/ProductCardRequest';
import styles from '../VisitedProducts/index.module.scss';

interface SameStyleProductsProps {
  subcategory: string[];
}

const SameStyleProducts: FC<SameStyleProductsProps> = ({ subcategory }) => {
  const { t } = useTranslation();
  const { data } = useSearchProductsByParameterQuery({
    body: { subcategory },
    page: 1,
    size: 3,
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('similarProducts')}</p>
      <div className={styles.cardWrapper}>
        {Array.isArray(data?.products) &&
          data?.products.map(({ id }: { id: string }) => {
            return (
              <div className={styles.card} key={id}>
                <ProductCardRequest id={id} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SameStyleProducts;
