import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchProductsByParameterQuery } from 'redux/productsApi';
import { BodySearchProducts } from 'redux/types';
import ProductCardRequest from 'components/ProductCardRequest';
import { Subcategory } from 'types';
import { FIRST_PAGE, SIMILAR_PRODUCTS_SIZE } from 'utils/constants';

import styles from '../VisitedProducts/index.module.scss';

const SameStyleProducts: FC<BodySearchProducts> = ({
  subcategory = Subcategory.JACKETS,
}) => {
  const { t } = useTranslation();
  const { data } = useSearchProductsByParameterQuery({
    body: { subcategory },
    page: FIRST_PAGE,
    size: SIMILAR_PRODUCTS_SIZE,
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('similarProducts')}</p>
      <div className={styles.cardWrapper}>
        {Array.isArray(data?.products) &&
          data?.products.map(({ id }) => {
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
