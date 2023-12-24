import React, { useEffect, useState } from 'react';
import CategoryCards from 'components/CategoryCards';
import Header from 'components/Header';
import HomePageModal from 'components/HomePageModal';
import styles from './index.module.scss';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const serializedState = localStorage.getItem('shouldShowModal');
      const shouldShowModal = !serializedState;
      console.log(shouldShowModal);

      setShowModal(shouldShowModal);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const hideModalWindow = () => setShowModal(false);

  return (
    <div className={styles.wrapperHomePage}>
      <Header />
      <div className={styles.wrapperCategoryCards}>
        <CategoryCards />
      </div>
      {showModal ? (
        <HomePageModal showModal={showModal} hideModal={hideModalWindow} />
      ) : null}
    </div>
  );
};

export default HomePage;
