import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import ProductsGridPage from './ProductsGridPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main-page/men" element={<MainPage />} />
      <Route path="/main-page/men/products" element={<ProductsGridPage />} />
    </Routes>
  );
}

export default App;
