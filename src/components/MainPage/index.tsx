import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import FormSubscription from 'components/FormSubscription';
import styles from './index.module.scss';

const MainPage = () => (
  <>
    <div className={styles.wrapper}>
      <CollectionImageSwiper />
      <FormSubscription />
    </div>
  </>
);

export default MainPage;
