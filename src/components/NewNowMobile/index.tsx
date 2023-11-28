import React, { FC, useState } from 'react';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowSwiperCard from 'assets/svgs/ArrowSwiperCard';
// TODO: load pics from backend
import ProductCard from 'components/ProductCard';
import { CardProps } from 'components/NewNow';
import styles from './index.module.scss';

export interface NewNowMobile {
  cards: CardProps[];
}

const NewNowMobile: FC<NewNowMobile> = ({ cards }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // // TODO: load info from backend
  // const cards = [
  //   {
  //     productName: 'Shearling denim jacket',
  //     price: '119.99 €',
  //     sizes: [Size.XS, Size.S, Size.XL],
  //     image: img1,
  //   },
  //   {
  //     productName: 'Ribbed wool-blend sweater',
  //     price: '89 €',
  //     sizes: [Size.XS, Size.M, Size.L],
  //     image: img2,
  //   },
  //   {
  //     productName: '100% cotton bomber jacket',
  //     price: '54.59 €',
  //     sizes: [Size.S, Size.M, Size.XL],
  //     image: img3,
  //   },
  // ];

  return (
    <>
      <Swiper
        modules={[Navigation, Virtual]}
        navigation={{ prevEl, nextEl }}
        spaceBetween={10}
        slidesPerView={2}
        virtual
        onRealIndexChange={({ activeIndex }: { activeIndex: number }) =>
          setActiveIndex(activeIndex)
        }
      >
        {cards.map(({ productName, price, sizes, images }, index) => (
          <SwiperSlide key={index} style={{ width: 220, marginRight: 10 }}>
            <ProductCard
              productName={productName}
              price={price}
              sizes={sizes}
              isMobile={true}
              image={images[0]}
            />
          </SwiperSlide>
        ))}
        <div className={styles.wrapperArrows}>
          <button
            ref={node => setPrevEl(node)}
            className={activeIndex ? styles.itemArrow : styles.invisible}
          >
            <ArrowSwiperCard
              className={`${styles.arrow} ${styles.arrowPrev}`}
            />
          </button>
          <button
            ref={node => setNextEl(node)}
            className={activeIndex ? styles.invisible : styles.itemArrow}
          >
            <ArrowSwiperCard className={styles.arrow} />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default NewNowMobile;
