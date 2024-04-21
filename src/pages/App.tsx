import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import ProductsGridPage from 'pages/ProductsGridPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';
import OrderCheckoutPage from './OrderCheckoutPage';
import OrderCheckoutAuthorization from 'modules/product/containers/OrderCheckoutAuthorization';
import PaymentDetail from 'modules/order/conteiners/PaymentDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<CategoryPage />} />
      <Route path="/men/products-grid" element={<ProductsGridPage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<OrderCheckoutPage />}>
        <Route path="details" element={<OrderCheckoutAuthorization />} />
        <Route path="delivery" />
        <Route path="payment" element={<PaymentDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
