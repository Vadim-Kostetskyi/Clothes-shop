import React from 'react';
import CategoryCards from 'components/CategoryCards';
import Header from 'components/Header';
import styles from './index.module.scss';

import Footer from "components/Footer"; //del

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapperHomePage}>
        <Header />
        <div className={styles.wrapperCategoryCards}><CategoryCards />
        </div>
      <Footer/> {/* del */}
      </div>
    </>
  )
}

export default HomePage;