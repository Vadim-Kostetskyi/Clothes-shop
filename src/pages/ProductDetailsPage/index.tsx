import React from 'react';
import ProductDetails from 'modules/product/containers/ProductDetails';
import VisitedProducts from 'components/VisitedProducts';
import MainLayout from 'modules/core/components/MainLayout';

const ProductDetailsPage = () => (
  <MainLayout>
    <ProductDetails />
    <VisitedProducts />
  </MainLayout>
);

export default ProductDetailsPage;
