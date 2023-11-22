import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import Header from 'components/Header';
import FormSubscription from 'components/FormSubscription';
import NewNow from 'components/NewNow';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import styles from './index.module.scss';

const MainPage = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <CollectionImageSwiper />
      <NewNow />
      <FormSubscription />
      <Footer />
      <ScrollToTop />
    </div>
  </>
);

export default MainPage;
