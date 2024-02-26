import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchProductsByParameterQuery } from 'redux/productsApi';
import { BodySearchProducts } from 'redux/types';
import ProductCardRequest from 'components/ProductCardRequest';
import { Subcategory } from 'types/types';
import { PageNumbers, SIMILAR_PRODUCTS_SIZE } from 'utils/constants';

import styles from '../VisitedProducts/index.module.scss';

// TODO: refactor https://allalitvinenko.atlassian.net/browse/OS-185
const SameStyleProducts: FC<BodySearchProducts> = ({
  subcategory = Subcategory.JACKETS,
}) => {
  const { t } = useTranslation();
  const { data } = useSearchProductsByParameterQuery({
    body: { subcategory },
    page: Number(PageNumbers.FIRST_PAGE),
    size: SIMILAR_PRODUCTS_SIZE,
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('similarProducts')}</h1>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardWrapper}>
          {Array.isArray(data?.products) &&
            data?.products.map(({ id }) => (
              <div className={styles.card} key={id}>
                <ProductCardRequest id={id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SameStyleProducts;
