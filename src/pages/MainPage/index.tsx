import React from 'react';
import CollectionImageSwiper from 'components/CollectionImageSwiper';
import Header from 'components/Header';
import FormSubscription from 'components/FormSubscription';
import NewNow from 'components/NewNow';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Collection from 'components/Collection';
import TopCategories from 'components/TopCategories';

const MainPage = () => (
  <>
    <Header />
    <CollectionImageSwiper />
    <NewNow />
    <Collection />
    <TopCategories />
    <FormSubscription />
    <Footer />
    <ScrollToTop />
  </>
);

export default MainPage;
