import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import ProductsGridPage from './ProductsGridPage';
import ProductOrderPage from './ProductOrderPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main-page/men" element={<MainPage />} />
      <Route path="/main-page/men/products" element={<ProductsGridPage />} />
      <Route path="/product-order" element={<ProductOrderPage />} />
      <Route path="/product-order/:productId" element={<ProductOrderPage />} />
    </Routes>
  );
}

export default App;
