import React from 'react';
import CategoryCards from 'components/CategoryCards';
import { useGetProductsWithImagesQuery } from 'redux/productsApi';
import Header from 'components/Header';
import HomePageModal from 'components/HomePageModal';
import styles from './index.module.scss';

const HomePage = () => {
  const { data } = useGetProductsWithImagesQuery({ page: 0, size: 9 });
  console.log(data);
  return (
    <div className={styles.wrapperHomePage}>
      <Header />
      <div className={styles.wrapperCategoryCards}>
        <CategoryCards />
      </div>
      <HomePageModal />
    </div>
  );
};

export default HomePage;
