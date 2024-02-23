import React from 'react';
import ProductDetails from 'modules/product/containers/ProductDetails';
import VisitedProducts from 'components/VisitedProducts';
import MainLayout from 'modules/core/components/MainLayout';
import styles from './index.module.scss';

const ProductDetailsPage = () => (
  <MainLayout>
    <div className={styles.contentWrapper}>
      <ProductDetails />
      <VisitedProducts />
    </div>
  </MainLayout>
);

export default ProductDetailsPage;
