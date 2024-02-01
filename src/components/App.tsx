import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import ProductsGridPage from 'pages/ProductsGridPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<CategoryPage />} />
      <Route path="/men/products-grid" element={<ProductsGridPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
