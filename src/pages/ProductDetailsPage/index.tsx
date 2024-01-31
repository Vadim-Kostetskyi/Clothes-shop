import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProductDetails from 'components/ProductDetails';
import VisitedProducts from 'components/VisitedProducts';

const ProductDetailsPage = () => (
  <>
    <Header />
    <ProductDetails />
    <VisitedProducts />
    <Footer />
  </>
);

export default ProductDetailsPage;
