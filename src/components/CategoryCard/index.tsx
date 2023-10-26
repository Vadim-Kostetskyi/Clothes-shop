import { FC } from "react";
import styles from './index.module.css';

export interface CategoryCardProps {
  id: number,
  image: string,
  category: string,
}

const CategoryCard: FC<CategoryCardProps> = ({ id, image, category }) => {
  return (
      <div className={styles.categoryImageWrapper}>
        <img className={styles.image}
          src={image}
          alt={category} />
        <div className={styles.categoryTextWrapper}>
          <p className={styles.categorylink}>Go to fashion</p>
          <p className={styles.categoryTitle}>{category}</p>
        </div>
      </div>
  )
}

export default CategoryCard;