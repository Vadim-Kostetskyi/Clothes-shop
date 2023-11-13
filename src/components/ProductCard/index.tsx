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
}) => {
  const imageProps = {
    images,
    productName,
  };

  const infoProps = {
    productName,
    price,
    sizes,
  };

  return (
    <div className={styles.productCard}>
      <ProductImageSwiper {...imageProps} />
      <ProductInfo {...infoProps} />
    </div>
  );
};

export default ProductCard;
