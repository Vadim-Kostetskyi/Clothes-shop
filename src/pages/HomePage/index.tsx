import React, { useEffect, useState } from 'react';
import CategoryCards from 'modules/core/components/CategoryCards';
import PreferencesModal from 'modules/core/components/PreferencesModal';
import styles from './index.module.scss';
import MainLayout from 'modules/core/components/MainLayout';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const serializedState = localStorage.getItem('shouldShowModal');
      const shouldShowModal = !serializedState;

      setShowModal(shouldShowModal);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const hideModalWindow = () => setShowModal(false);

  return (
    <MainLayout showFooter={false}>
      <div className={styles.wrapperHomePage}>
        <div className={styles.wrapperCategoryCards}>
          <CategoryCards />
        </div>
        {showModal ? (
          <PreferencesModal showModal={showModal} hideModal={hideModalWindow} />
        ) : null}
      </div>
    </MainLayout>
  );
};

export default HomePage;
