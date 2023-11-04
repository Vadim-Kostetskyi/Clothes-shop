import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import styles from './index.module.scss';
import Subscribe from 'components/Subscribe';

const MainPage = () => (
  <>
    <div className={styles.wrapper}>
      <CollectionImageSwiper />
    </div>
    <Subscribe />
  </>
);

export default MainPage;
