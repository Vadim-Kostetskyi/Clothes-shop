import React from 'react';
import CollectionImageSwiper from 'modules/product/components/CollectionImageSwiper';
import NewsletterSubscription from 'modules/core/containers/NewsletterSubscription';
import NewNow from 'modules/product/containers/NewNow';
import ScrollToTop from 'modules/core/components/ScrollToTop';
import Collection from 'modules/product/components/Collection';
import TopCategories from 'modules/product/containers/TopCategories';
import MainLayout from 'modules/core/components/MainLayout';
import styles from './index.module.scss';

const CategoryPage = () => (
  <MainLayout>
    <div className={styles.wrapperSections}>
      <CollectionImageSwiper />
      <NewNow />
      <Collection />
      <TopCategories />
    </div>
    <div className={styles.wrapperNewsletterSubscription}>
      <NewsletterSubscription />
    </div>
    <ScrollToTop />
  </MainLayout>
);

export default CategoryPage;
