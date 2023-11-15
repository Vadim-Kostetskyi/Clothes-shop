import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import styles from './index.module.scss';

export interface ProductCardProps {
  productName: string;
  price: string;
  sizes: string[];
  images: string[];
}

const ProductCard: FC<ProductCardProps> = ({
  price,
  productName,
  sizes,
  images,
}) => (
  <div className={styles.productCard}>
    <ProductImageSwiper images={images} productName={productName} />
    <ProductInfo productName={productName} price={price} sizes={sizes} />
  </div>
);

export default ProductCard;
