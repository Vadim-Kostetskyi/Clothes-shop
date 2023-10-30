import { FC } from "react";
import styles from './index.module.scss';

export interface CategoryCardProps {
  id: number,
  image: string,
  imageSmall: string,
  category: string,
}

const CategoryCard: FC<CategoryCardProps> = ({ id, image, category, imageSmall }) => {
  return (
    <div className={styles.categoryImageWrapper}>
      <picture>
        <source media="(max-width: 960px)" srcSet={imageSmall} />
        <img src={image} alt={category} className={styles.image} />
      </picture>
      <div className={styles.categoryTextWrapper}>
        <p className={styles.categorylink}>Go to fashion</p>
        <p className={styles.categoryTitle}>{category}</p>
      </div>
    </div>
  )
}

export default CategoryCard;