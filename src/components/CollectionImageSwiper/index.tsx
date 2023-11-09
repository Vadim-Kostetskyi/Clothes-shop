import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CoreSwiper from 'components/CoreSwiper';
import ArrowSwiper from 'assets/SVG/arrowSwiper';
import Image1 from '../../assets/images/swiper-man-image-1.png';
import Image2 from '../../assets/images/swiper-man-image-2.png';
import Image3 from '../../assets/images/swiper-man-image-3.png';
import Image4 from '../../assets/images/swiper-man-image-4.png';
import styles from './index.module.scss';
import 'swiper/scss/pagination';

export interface SlidesProps {
  id: number;
  image: string;
  text: string;
}

const slides: SlidesProps[] = [
  {
    id: 0,
    text: 'Golden Hour Glam',
    image: Image1,
  },
  {
    id: 1,
    text: 'Autumn Eleganse',
    image: Image2,
  },
  {
    id: 2,
    text: 'No Limits',
    image: Image3,
  },
  {
    id: 3,
    text: 'Symphony of clothes',
    image: Image4,
  },
];

const CollectionImageSwiper = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <>
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
        {slides.map(({ text, image, id }) => (
          <SwiperSlide key={id}>
            <img src={image} alt={text} className={styles.image} />
            <p className={styles.text}>{text}</p>
          </SwiperSlide>
        ))}
        <div className={styles.wrapperArrows}>
          <button ref={node => setPrevEl(node)} className={styles.itemArrows}>
            <ArrowSwiper className={styles.arrows} />
          </button>
          <button ref={node => setNextEl(node)} className={styles.itemArrows}>
            <ArrowSwiper className={`${styles.arrows} ${styles.arrowNext}`} />
          </button>
        </div>
        <div className={styles.wrapperButon}>
          <button className={styles.button}>View collection</button>
        </div>
      </CoreSwiper>
    </>
  );
};

export default CollectionImageSwiper;
