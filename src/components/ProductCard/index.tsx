import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import { Size } from 'types';
import styles from './index.module.scss';
import { ImageItemProps } from 'redux/types';

export interface ProductCardProps {
  productId: string;
  productName: string;
  price: string;
  sizes: Size[];
  images: ImageItemProps[];
}

const ProductCard: FC<ProductCardProps> = ({
  productId,
  price,
  productName,
  sizes,
  images,
}) => (
  <div className={styles.productCard}>
    <ProductImageSwiper images={images} />
    <ProductInfo
      productId={productId}
      productName={productName}
      price={Number.parseFloat(price)}
      sizes={sizes}
    />
  </div>
);

export default ProductCard;
