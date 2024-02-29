import React, { FC } from 'react';
import { ImageItemProps } from 'redux/types';
import styles from './index.module.scss';

export interface ProductDetailsGalleryPanelProps {
  cardName: string;
  images?: ImageItemProps[];
  choosePicture: (index: number) => () => void;
}

const ProductDetailsGalleryPanel: FC<ProductDetailsGalleryPanelProps> = ({
  images,
  choosePicture,
  cardName,
}) => (
  <div className={styles.imageWrapper}>
    {images?.map(({ url }, index) => (
      <button
        key={url}
        className={styles.imageButton}
        onClick={choosePicture(index)}
      >
        <img className={styles.image} src={url} alt={cardName} />
      </button>
    ))}
  </div>
);

export default ProductDetailsGalleryPanel;
