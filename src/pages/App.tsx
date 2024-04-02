import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import ProductsGridPage from 'pages/ProductsGridPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';

import Delivery from 'modules/order/conteiners/Delivery';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Delivery />} />
      <Route path="/men" element={<CategoryPage />} />
      <Route path="/men/products-grid" element={<ProductsGridPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
