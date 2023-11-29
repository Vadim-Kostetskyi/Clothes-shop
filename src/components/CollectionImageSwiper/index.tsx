import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CoreSwiper from 'components/CoreSwiper';
import ArrowSwiper from 'assets/svgs/ArrowSwiper';
import Image1 from '../../assets/images/swiper-man-image-1.png';
import Image2 from '../../assets/images/swiper-man-image-2.png';
import Image3 from '../../assets/images/swiper-man-image-3.png';
import Image4 from '../../assets/images/swiper-man-image-4.png';
import ImageSmall1 from '../../assets/images/swiper-man-image-small-1.png';
import ImageSmall2 from '../../assets/images/swiper-man-image-small-2.png';
import ImageSmall3 from '../../assets/images/swiper-man-image-small-3.png';
import ImageSmall4 from '../../assets/images/swiper-man-image-small-4.png';
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
    image: Image1,
    imageSmall: ImageSmall1,
  },
  {
    id: 1,
    text: 'Autumn Eleganse',
    image: Image2,
    imageSmall: ImageSmall2,
  },
  {
    id: 2,
    text: 'No Limits',
    image: Image3,
    imageSmall: ImageSmall3,
  },
  {
    id: 3,
    text: 'Symphony of clothes',
    image: Image4,
    imageSmall: ImageSmall4,
  },
];

const CollectionImageSwiper = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={styles.swiper}>
      <CoreSwiper
        modules={[Pagination, Autoplay]}
        navigation={{
          prevEl,
          nextEl,
        }}
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
              <picture className={styles.imagesWrapper}>
                <source media="(max-width: 960px)" srcSet={imageSmall} />
                <img src={image} alt={text} className={styles.image} />
                <div className={styles.wrapperArrows}>
                  <button
                    ref={node => setPrevEl(node)}
                    className={styles.itemArrows}
                  >
                    <ArrowSwiper className={styles.arrow} />
                  </button>
                  <button
                    ref={node => setNextEl(node)}
                    className={styles.itemArrows}
                  >
                    <ArrowSwiper
                      className={`${styles.arrow} ${styles.arrowNext}`}
                    />
                  </button>
                </div>
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
