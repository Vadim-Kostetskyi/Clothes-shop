import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import FormSubscription from 'components/FormSubscription';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './index.module.scss';

const MainPage = () => (
  <>
    <Header/>
    <div className={styles.wrapper}>
      <CollectionImageSwiper />
      <FormSubscription />
      <Footer />
    </div>
  </>
);

export default MainPage;
