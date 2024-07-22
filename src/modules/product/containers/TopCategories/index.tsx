import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { clsx } from 'clsx';
import Loader from 'modules/core/components/Loader';
import { useGetTopCategoriesByNameQuery } from 'redux/productsApi';
import { TopCategoriesProductsProps } from 'redux/types';
import styles from './index.module.scss';

const TopCategories = () => {
  const { data, isLoading } = useGetTopCategoriesByNameQuery();
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.swiper, 'topCategories-swiper')}>
      <h2 className={styles.title}>{t('topCategories')}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={2}
        navigation={true}
        breakpoints={{
          960: {
            slidesPerView: 4,
          },
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data?.map(({ name, url }: TopCategoriesProductsProps) => (
              <SwiperSlide key={name}>
                <img src={url} alt={name} className={styles.image} />
                <div className={styles.text}>
                  <p>{name}</p>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

export default TopCategories;
