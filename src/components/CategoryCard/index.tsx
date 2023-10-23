import { FC } from "react";
import styles from './index.module.css';

export interface CategoryCardProps {
  id: number,
  image: string,
  category: string,
}

const CategoryCard: FC<CategoryCardProps> = ({ id, image, category }) => {
  return (
    <>
      <img className= {styles.image}
        src={image}
        alt={category} />
    </>
  )
}

export default CategoryCard;