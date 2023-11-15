import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import Header from 'components/Header';
import FormSubscription from 'components/FormSubscription';
import NewNow from 'components/NewNow';
import Footer from 'components/Footer';
import PageSwiper from 'components/PageSwiper';
import styles from './index.module.scss';

const MainPage = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <CollectionImageSwiper />
      <NewNow />
      <FormSubscription />
      <Footer />
      <PageSwiper />
    </div>
  </>
);

export default MainPage;
