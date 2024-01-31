import React from 'react';
import WomenCategoryImage from 'assets/images/women-category-image.png';
import KidsCategoryImage from 'assets/images/kids-category-image.png';
import MenCategoryImage from 'assets/images/men-category-image.png';
import WomenImageSmall from 'assets/images/women-category-image-small.png';
import KidsImageSmall from 'assets/images/kids-category-image-small.png';
import MenImageSmall from 'assets/images/men-category-image-small.png';
import CategoryCard from 'components/CategoryCard';
import { CategoryCardProps } from 'components/CategoryCard';
import styles from './index.module.scss';

const categories: CategoryCardProps[] = [
  {
    id: 0,
    image: WomenCategoryImage,
    imageSmall: WomenImageSmall,
    category: 'Women',
    href: '#',
  },
  {
    id: 1,
    image: MenCategoryImage,
    imageSmall: MenImageSmall,
    category: 'Men',
    href: '/men',
  },
  {
    id: 2,
    image: KidsCategoryImage,
    imageSmall: KidsImageSmall,
    category: 'Kids',
    href: '#',
  },
];

const CategoryCards = () => (
  <div className={styles.cardsWrapper}>
    {categories.map(({ id, image, imageSmall, category, href }) => (
      <CategoryCard
        id={id}
        key={id}
        image={image}
        imageSmall={imageSmall}
        category={category}
        href={href}
      />
    ))}
  </div>
);

export default CategoryCards;
