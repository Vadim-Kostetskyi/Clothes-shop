import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import { Size } from 'types';
import styles from './index.module.scss';
import { ImageItemProps } from 'redux/types';

export interface ProductCardProps {
  productName: string;
  price: string;
  sizes: Size[];
  images: ImageItemProps[];
}

const ProductCard: FC<ProductCardProps> = ({
  price,
  productName,
  sizes,
  images,
}) => (
  <div className={styles.productCard}>
    <ProductImageSwiper images={images} />
    <ProductInfo productName={productName} price={price} sizes={sizes} />
  </div>
);

export default ProductCard;
