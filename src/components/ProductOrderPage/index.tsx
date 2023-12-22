import React, { FC } from 'react';
import ProductOrder from 'components/ProductOrder';
// import styles from './index.module.scss';

export interface ProductOrderPageProps {}

const ProductOrderPage: FC<ProductOrderPageProps> = () => {
  return (
    <>
      <ProductOrder />
    </>
  );
};

export default ProductOrderPage;
