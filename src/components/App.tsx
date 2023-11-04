import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main-page/men" element={<MainPage />} />
    </Routes>
  );
}

export default App;
