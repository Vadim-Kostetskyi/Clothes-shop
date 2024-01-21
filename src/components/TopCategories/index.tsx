import React from 'react';
import { useGetTopCategoriesByNameQuery } from 'redux/productsApi';
import { useTranslation } from 'react-i18next';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { TopCategoriesProductsProps } from 'redux/types';
import styles from './index.module.scss';

const TopCategories = () => {
  const { data } = useGetTopCategoriesByNameQuery('');
  const { t } = useTranslation();

  return (
    <div className={`${styles.swiper} topCategories-swiper`}>
      <h1 className={styles.title}>{t('topCategories')}</h1>
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
        {/* TODO: add loader in OS-177 */}
        {data?.map(({ name, url }: TopCategoriesProductsProps) => {
          return (
            <SwiperSlide key={name}>
              <img src={url} alt={name} className={styles.image} />
              <div className={styles.text}>
                <p>{name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopCategories;
