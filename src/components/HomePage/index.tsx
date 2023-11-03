import React from 'react';
import CategoryCards from 'components/CategoryCards';
import Header from 'components/Header';
import styles from './index.module.scss';

import Footer from 'components/Footer';

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapperHomePage}>
        <Header />
        <div className={styles.wrapperCategoryCards}><CategoryCards />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;