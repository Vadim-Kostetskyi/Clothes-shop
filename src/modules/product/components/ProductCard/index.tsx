import React, { FC } from 'react';
import ProductImageSwiper from 'modules/product/components/ProductImageSwiper';
import ProductInfo from 'modules/product/components/ProductInfo';
import { Size } from 'types/types';
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
  quantity: number;
}

const ProductCard: FC<ProductCardProps> = ({
  productId,
  price,
  productName,
  sizes,
  images = [],
  isMobile,
  image,
  quantity,
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
      price={parseFloat(price)}
      sizes={sizes}
      quantity={Number(quantity)}
    />
  </div>
);

export default ProductCard;
