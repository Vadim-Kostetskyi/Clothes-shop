import React, { FC, useState } from 'react';
import ArrowSwiperCard from 'assets/svgs/ArrowSwiperCard';
import PicturePanel from 'components/PicturePanel';
import styles from './index.module.scss';

import img1 from '../../assets/images/product/man-gallery-1.png';
import img2 from '../../assets/images/product/man-gallery-2.png';
import img3 from '../../assets/images/product/man-gallery-3.png';
import img4 from '../../assets/images/product/man-gallery-4.png';
import img5 from '../../assets/images/product/man-gallery-5.png';
import img6 from '../../assets/images/product/man-gallery-6.png';
import img7 from '../../assets/images/product/man-gallery-7.png';

export interface PhotoSwitcherProps {
  productImages?: string[];
}

const PhotoSwitcher: FC<PhotoSwitcherProps> = () => {
  const productImages = [img1, img2, img3, img4, img5, img6, img7];
  const [images, setImages] = useState<string[]>(productImages);
  const smallImages = images.slice(1);

  const moveImageToStart = (index: number) => () => {
    const clickedImage = images[index + 1];
    const startIndex = images.indexOf(clickedImage);
    const rotatedImages = [
      ...images.slice(startIndex),
      ...images.slice(0, startIndex),
    ];
    setImages(rotatedImages);
  };

  const onNextImage = () => {
    const [firstElement, ...restOfArray] = images;
    const newArray = [...restOfArray, firstElement];
    setImages(newArray);
  };

  const onPrevImage = () => {
    const lastElement = images[images.length - 1];
    const restOfArray = images.slice(0, -1);
    const newArray = [lastElement, ...restOfArray];
    setImages(newArray);
  };

  return (
    <div className={styles.wrapper}>
      <PicturePanel images={smallImages} choosePicture={moveImageToStart} />
      <div className={styles.largeImageWrapper}>
        <img className={styles.largeImage} src={images[0]} alt="" />
        <div className={styles.arrowsWrapper}>
          <button className={styles.itemArrow} onClick={onPrevImage}>
            <ArrowSwiperCard
              className={`${styles.arrow} ${styles.arrowPrev}`}
            />
          </button>
          <button className={styles.itemArrow} onClick={onNextImage}>
            <ArrowSwiperCard className={styles.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoSwitcher;
