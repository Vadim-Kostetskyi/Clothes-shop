import React, { FC } from 'react';
import ProductImageSwiper from 'components/ProductImageSwiper';
import ProductInfo from 'components/ProductInfo';
import { Size } from 'types';
import styles from './index.module.scss';
import { ImageItemProps } from 'redux/types';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  productId: string;
  productName: string;
  price: string;
  sizes: Size[];
  images?: ImageItemProps[];
  isMobile?: boolean;
  image?: string;
}

const ProductCard: FC<ProductCardProps> = ({
  productId,
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
      <Link to={`/product/${productId}`}>
        <ProductImageSwiper images={images} />
      </Link>
    )}
    <ProductInfo
      productId={productId}
      productName={productName}
      price={Number.parseFloat(price)}
      sizes={sizes}
    />
  </div>
);

export default ProductCard;
