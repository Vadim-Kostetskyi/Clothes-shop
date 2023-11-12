import React, { FC } from 'react';
import Info from './Info';
import styles from './index.module.scss';

export interface ProductCardProps {
  productName: string,
  price: string,
  sizes: string[]
  image: string
}

const ProductCard: FC<ProductCardProps> = ({price, productName, sizes, image}) => {

  const props = {
    productName,
    price,
    sizes,
  };

  return (
    <div className={styles.mainBox}>
      <img src={image} alt="" className={styles.img} />
      <Info {...props} />
    </div>
  );
};

export default ProductCard;
