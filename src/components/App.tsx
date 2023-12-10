import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import ManProducts from './ManProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main-page/men" element={<MainPage />} />
      <Route path="/main-page/men/products" element={<ManProducts />} />
    </Routes>
  );
}

export default App;
