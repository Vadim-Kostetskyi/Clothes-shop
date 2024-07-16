import React from 'react';
import { useTranslation } from 'react-i18next';
import ManCollection1 from 'assets/images/collection-man-image-1.png';
import ManCollection2 from 'assets/images/colection-man-image-2.png';
import CollectionItem from '../CollectionItem';
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
  const { t } = useTranslation();
  return (
    <div className={styles.collectionWrapper}>
      <h2 className={styles.title}>{t('collections')}</h2>
      <div className={styles.cardWrapper}>
        {collections.map(({ id, image, text }) => (
          <CollectionItem
            key={id}
            image={image}
            text={text}
            buttonText={t('viewCollection')}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
