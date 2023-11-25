import React from 'react';
import ManCollection1 from '../../assets/images/collection-man-image-1.png';
import ManCollection2 from '../../assets/images/colection-man-image-2.png';
import styles from './index.module.scss';

const collections: CollectionCardProps[] = [
  {
    id: 0,
    image: ManCollection1,
    text: 'ESSENTIALS',
  },
  {
    id: 1,
    image: ManCollection2,
    text: 'Antoine Griezmann',
  },
];

export interface CollectionCardProps {
  id: number;
  image: string;
  text: string;
}

const Collection = () => {
  return (
    <>
      <p className={styles.title}>Collections</p>
      <div className={styles.cardWrapper}>
        {collections.map(({ id, image, text }) => (
          <div key={id} className={styles.itemsWrapper}>
            <img src={image} alt={text} className={styles.image} />
            <p className={styles.text}>{text}</p>
            <div className={styles.wrapperButon}>
              <button className={styles.button}>View collection</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
