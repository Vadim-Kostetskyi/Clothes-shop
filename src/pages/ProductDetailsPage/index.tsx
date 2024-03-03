import React from 'react';
import ProductDetails from 'modules/product/containers/ProductDetails';
import MainLayout from 'modules/core/components/MainLayout';
import styles from './index.module.scss';

const ProductDetailsPage = () => (
  <MainLayout>
    <div className={styles.contentWrapper}>
      <ProductDetails />
    </div>
  </MainLayout>
);

export default ProductDetailsPage;
