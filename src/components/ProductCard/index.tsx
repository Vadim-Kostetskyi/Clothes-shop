import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import { Size } from 'types';
import styles from './index.module.scss';
import { ImageItemProps } from 'redux/types';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  id?: string;
  productName: string;
  price: string;
  sizes: Size[];
  images?: ImageItemProps[];
  isMobile?: boolean;
  image?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  price,
  productName,
  sizes,
  images = [],
  isMobile,
  image,
}) => (
  <div className={styles.productCard}>
    {isMobile ? (
      <img src={image} alt={productName} className={styles.image} />
    ) : (
      <Link to={`/product-order/${id}`}>
        <ProductImageSwiper images={images} cardName={productName} />
      </Link>
    )}
    <ProductInfo productName={productName} price={price} sizes={sizes} />
  </div>
);

export default ProductCard;
