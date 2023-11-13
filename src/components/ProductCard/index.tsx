import React, { FC } from 'react';
// import ImageSwiper from './ImageSwiper';
import ProductImageSwiper from 'components/ProductImageSwiper';
// import Info from './Info';
import ProductInfo from 'components/ProductInfo';
import styles1 from './index.module.scss';

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
    <div className={styles1.mainBox}>
      <ProductImageSwiper {...imageProps} />
      <ProductInfo {...infoProps} />
    </div>
  );
};

export default ProductCard;
