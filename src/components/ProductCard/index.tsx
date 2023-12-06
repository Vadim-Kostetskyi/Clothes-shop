import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import { Size } from 'types';
import styles from './index.module.scss';

export interface ProductCardProps {
  productName: string;
  price: string;
  sizes: Size[];
  images?: string[];
  isMobile?: boolean;
  image?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  price,
  productName,
  sizes,
  images,
  isMobile,
  image,
}) => (
  <div className={styles.productCard}>
    {isMobile ? (
      <img src={image} alt={productName} className={styles.image} />
    ) : (
      <ProductImageSwiper images={images} productName={productName} />
    )}
    <ProductInfo productName={productName} price={price} sizes={sizes} />
  </div>
);

export default ProductCard;
