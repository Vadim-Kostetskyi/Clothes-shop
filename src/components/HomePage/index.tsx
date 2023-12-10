import React from 'react';
import CategoryCards from 'components/CategoryCards';
import Header from 'components/Header';
import styles from './index.module.scss';
import { useGetProductsWithImagesQuery } from 'redux/productsApi';

const HomePage = () => {
  const { data } = useGetProductsWithImagesQuery({ page: 0, size: 9 });
  console.log(data);
  return (
    <>
      <div className={styles.wrapperHomePage}>
        <Header />
        <div className={styles.wrapperCategoryCards}>
          <CategoryCards />
        </div>
      </div>
    </>
  );
};

export default HomePage;
