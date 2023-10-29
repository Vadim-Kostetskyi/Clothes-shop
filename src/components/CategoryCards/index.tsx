import React from 'react';
import WomenCategoryImage from '../../assets/images/women-category-image.png';
import KidsCategoryImage from '../../assets/images/kids-category-image.png';
import MenCategoryImage from '../../assets/images/men-category-image.png';
import CategoryCard from 'components/CategoryCard';
import { CategoryCardProps } from 'components/CategoryCard';
import styles from './index.module.scss';

const categories: CategoryCardProps[] = [
  {
    id: 0,
    image: WomenCategoryImage,
    category: 'Women',
  },
 
  {
    id: 1,
    image: MenCategoryImage,
    category: 'Men',
  },
  {
    id: 2,
    image: KidsCategoryImage,
    category: 'Kids',
  },
];

const CategoryCards = () => {
  return (
    <div className={styles.cardsWrapper}>
      {categories.map(({id, image, category}) => 
        <CategoryCard id={id} key={id} image={image} category={category}/>
      )}
    </div>
  );
};

export default CategoryCards;