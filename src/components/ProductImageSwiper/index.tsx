import React, { FC, useMemo, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import CoreSwiper from 'components/CoreSwiper';
import ArrowSwiperCard from 'assets/svgs/ArrowSwiperCard';
import styles from './index.module.scss';
import { ImageItemProps } from 'redux/types';
import { getValidClassNames } from 'libs/helpers/helpers';

export interface ProductImageSwiperProps {
  images: ImageItemProps[];
}

const ProductImageSwiper: FC<ProductImageSwiperProps> = ({ images }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [isHidden, setIsHidden] = useState(true);

  const handleFocus = () => setIsHidden(false);
  const handleBlur = () => setIsHidden(true);

  const renderImageSlides = useMemo(() => {
    return images.map(({ id, name, url }) => (
      <SwiperSlide key={id}>
        <img src={url} alt={name} className={styles.img} />
      </SwiperSlide>
    ));
  }, [images]);

  return (
    <div
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={styles.productImageSwiper}
    >
      <CoreSwiper navigation={{ prevEl, nextEl }}>
        {renderImageSlides}
        <div className={isHidden ? styles.hide : styles.wrapperArrows}>
          <button ref={node => setPrevEl(node)} className={styles.itemArrow}>
            <ArrowSwiperCard
              className={getValidClassNames(styles.arrow, styles.arrowPrev)}
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
