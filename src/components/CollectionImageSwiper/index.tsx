import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CoreSwiper from 'components/CoreSwiper';
import ManImage1 from 'assets/images/swiper-man-image-1.png';
import ManImage2 from 'assets/images/swiper-man-image-2.png';
import ManImage3 from 'assets/images/swiper-man-image-3.png';
import ManImage4 from 'assets/images/swiper-man-image-4.png';
import ManImageSmall1 from 'assets/images/swiper-man-image-small-1.png';
import ManImageSmall2 from 'assets/images/swiper-man-image-small-2.png';
import ManImageSmall3 from 'assets/images/swiper-man-image-small-3.png';
import ManImageSmall4 from 'assets/images/swiper-man-image-small-4.png';
import { clsx } from 'clsx';
import styles from './index.module.scss';
import 'swiper/scss/pagination';

export interface SlidesProps {
  id: number;
  image: string;
  imageSmall: string;
  text: string;
}

const slides: SlidesProps[] = [
  {
    id: 0,
    text: 'Golden Hour Glam',
    image: ManImage1,
    imageSmall: ManImageSmall1,
  },
  {
    id: 1,
    text: 'Autumn Eleganse',
    image: ManImage2,
    imageSmall: ManImageSmall2,
  },
  {
    id: 2,
    text: 'No Limits',
    image: ManImage3,
    imageSmall: ManImageSmall3,
  },
  {
    id: 3,
    text: 'Symphony of clothes',
    image: ManImage4,
    imageSmall: ManImageSmall4,
  },
];

const CollectionImageSwiper = () => {
  return (
    <div className={clsx(styles.swiper, 'collection-swiper')}>
      <CoreSwiper
        modules={[Pagination, Autoplay]}
        navigation={true}
        pagination={{
          clickable: true,
          enabled: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {slides.map(({ text, image, imageSmall, id }) => (
          <SwiperSlide key={id}>
            <div className={styles.itemsWrapper}>
              <picture>
                <source media="(max-width: 480px)" srcSet={imageSmall} />
                <img src={image} alt={text} className={styles.image} />
              </picture>
              <p className={styles.text}>{text}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.wrapperButton}>
          <button className={styles.button}>View collection</button>
        </div>
      </CoreSwiper>
    </div>
  );
};

export default CollectionImageSwiper;
