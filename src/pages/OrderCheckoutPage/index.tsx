import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from 'modules/core/components/MainLayout';
import TotalPurchase from 'modules/product/components/TotalPurchase';
import styles from './index.module.scss';

const OrderCheckoutPage = () => {
  return (
    <MainLayout showFooter={false}>
      <div className={styles.wrapper}>
        <Outlet />
        <TotalPurchase />
      </div>
    </MainLayout>
  );
};

export default OrderCheckoutPage;
