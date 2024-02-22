import React from 'react';
import { FC } from 'react';
import styles from './index.module.scss';

export interface CategoryCardProps {
  id: number;
  image: string;
  imageSmall: string;
  category: string;
  href: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  image,
  category,
  imageSmall,
  href,
}) => {
  return (
    <a href={href} className={styles.categoryImageWrapper}>
      <picture>
        <source media="(max-width: 960px)" srcSet={imageSmall} />
        <img src={image} alt={category} className={styles.image} />
      </picture>
      <div className={styles.categoryTextWrapper}>
        <p className={styles.categoryLink}>Go to fashion</p>
        <p className={styles.categoryTitle}>{category}</p>
      </div>
    </a>
  );
};

export default CategoryCard;
