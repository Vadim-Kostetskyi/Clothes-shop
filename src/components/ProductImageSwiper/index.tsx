import React, { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import CoreSwiper from 'components/CoreSwiper';
import ArrowSwiperCard from 'assets/svgs/ArrowSviperCard';
import styles from './index.module.scss';

export interface ProductImageSwiperProps {
  productName: string;
  images: string[];
}

const ProductImageSwiper: FC<ProductImageSwiperProps> = ({
  images,
  productName,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [hide, setHide] = useState<boolean>(true);

  const handleFocus = () => {
    setHide(false);
  };

  const handleBlur = () => {
    setHide(true);
  };

  return (
    <div
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={styles.productImageSwiper}
    >
      <CoreSwiper navigation={{ prevEl, nextEl }}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={productName} className={styles.img} />
          </SwiperSlide>
        ))}
        <div className={hide ? styles.hide : styles.wrapperArrows}>
          <button ref={node => setPrevEl(node)} className={styles.itemArrow}>
            <ArrowSwiperCard
              className={`${styles.arrow} ${styles.arrowPrev}`}
            />
          </button>
          <button ref={node => setNextEl(node)} className={styles.itemArrow}>
            <ArrowSwiperCard className={styles.arrow} />
          </button>
        </div>
      </CoreSwiper>
    </div>
  );
};

export default ProductImageSwiper;
