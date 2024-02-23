import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from 'modules/product/components/ProductCard';
import NewNowMobile from 'modules/product/components/NewNowMobile';
import styles from './index.module.scss';

import { useGetNewNowProductsQuery } from 'redux/productsApi';
import { GetProductsWithImages } from 'redux/types';
import { SwiperSlide } from 'swiper/react';

// TODO: refactor https://allalitvinenko.atlassian.net/browse/OS-185
const renderCards = (
  data?: GetProductsWithImages[],
  isMobile?: boolean,
): JSX.Element => (
  <>
    {data?.map(({ product, images }) => {
      const { id, title, price, size, quantity } = product;

      // TODO: refactor this
      return isMobile ? (
        <SwiperSlide key={id} className={styles.swiperSlide}>
          <ProductCard
            productId={id}
            key={id}
            productName={title}
            price={price}
            sizes={size}
            image={images[0].url}
            quantity={quantity}
            isMobile
          />
        </SwiperSlide>
      ) : (
        <ProductCard
          productId={id}
          key={id}
          productName={title}
          price={price}
          sizes={size}
          images={images}
          quantity={quantity}
        />
      );
    })}
  </>
);

const NewNow = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetNewNowProductsQuery();
  const renderCardsMemoized = useMemo(() => renderCards(data), [data]);
  const renderCardsMemoizedMobile: JSX.Element = useMemo(
    () => renderCards(data, true),
    [data],
  );

  return (
    <div className={styles.newNow}>
      <div className={styles.newNowBox}>
        <h1 className={styles.title}>{t('newNow')}</h1>
        {/* TODO:
          1. Create hook useGetViewportWidth
          2. renderCardsMemoized or render NewNowMobile depending on screen size
         */}
        <div className={styles.cardBox}>{renderCardsMemoized}</div>
        <div className={styles.cardBoxMobile}>
          <NewNowMobile cards={renderCardsMemoizedMobile} />
        </div>
      </div>
    </div>
  );
};

export default NewNow;
