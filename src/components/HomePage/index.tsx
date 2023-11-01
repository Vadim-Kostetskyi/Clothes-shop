import React from 'react';
import CategoryCards from 'components/CategoryCards';
import Header from 'components/Header';
import styles from './index.module.scss';
import CoreSwiper from 'components/CoreSwiper';

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapperHomePage}>
        <Header />
        <div className={styles.wrapperCategoryCards}><CategoryCards />
        </div>
      </div>
    </>
  );
};

export default HomePage;