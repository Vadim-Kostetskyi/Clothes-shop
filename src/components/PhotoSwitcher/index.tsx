import React, { FC, useCallback, useEffect, useState } from 'react';
import ArrowSwiperCard from 'assets/svgs/ArrowSwiperCard';
import PicturePanel from 'components/PicturePanel';
import { useGetProductImagesQuery } from 'redux/productsApi';
import styles from './index.module.scss';

export interface PhotoSwitcherProps {
  files: string[];
  title: string;
}

const PhotoSwitcher: FC<PhotoSwitcherProps> = ({ files, title }) => {
  const { data } = useGetProductImagesQuery(files);

  const [images, setImages] = useState<string[] | undefined>();
  const smallImages = images?.slice(1);

  useEffect(() => {
    const productImages = data?.images.map(el => el.result) || [];
    setImages(productImages);
  }, [data]);

  const moveImageToStart = useCallback(
    (index: number) => () => {
      if (!images || index < 0 || index >= images.length - 1) {
        return;
      }

      const clickedImage = images[index + 1];
      const startIndex = images.indexOf(clickedImage);

      if (startIndex === -1) {
        return;
      }

      const rotatedImages = [
        ...images.slice(startIndex),
        ...images.slice(0, startIndex),
      ];
      setImages(rotatedImages);
    },
    [images],
  );

  const onNextImage = useCallback(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const [firstElement, ...restOfArray] = images;
    const newArray = [...restOfArray, firstElement];
    setImages(newArray);
  }, [images]);

  const onPrevImage = useCallback(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const lastElement = images[images.length - 1];
    const restOfArray = images.slice(0, -1);
    const newArray = [lastElement, ...restOfArray];
    setImages(newArray);
  }, [images]);

  return (
    <div className={styles.wrapper}>
      <PicturePanel
        images={smallImages}
        choosePicture={moveImageToStart}
        cardName={title}
      />
      <div className={styles.largeImageWrapper}>
        <img
          className={styles.largeImage}
          src={images && images[0]}
          alt={title}
        />
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
