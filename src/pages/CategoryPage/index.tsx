import React from 'react';
import CollectionImageSwiper from 'modules/product/components/CollectionImageSwiper';
import NewsletterSubscription from 'modules/core/containers/NewsletterSubscription';
import NewNow from 'modules/product/containers/NewNow';
import ScrollToTop from 'modules/core/components/ScrollToTop';
import Collection from 'modules/product/components/Collection';
import TopCategories from 'modules/product/containers/TopCategories';
import MainLayout from 'modules/core/components/MainLayout';

const CategoryPage = () => (
  <MainLayout>
    <CollectionImageSwiper />
    <NewNow />
    <Collection />
    <TopCategories />
    <NewsletterSubscription />
    <ScrollToTop />
  </MainLayout>
);

export default CategoryPage;
