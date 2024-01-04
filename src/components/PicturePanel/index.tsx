import React, { FC } from 'react';
import styles from './index.module.scss';

export interface ItemPageProps {
  cardName: string;
  images: string[] | undefined;
  choosePicture: (index: number) => () => void;
}

const PicturePanel: FC<ItemPageProps> = ({
  images,
  choosePicture,
  cardName,
}) => (
  <div className={styles.imageWrapper}>
    {images?.map((path, index) => (
      <button
        key={path}
        className={styles.imageButton}
        onClick={choosePicture(index)}
      >
        <img className={styles.image} src={path} alt={cardName} />
      </button>
    ))}
  </div>
);

export default PicturePanel;
