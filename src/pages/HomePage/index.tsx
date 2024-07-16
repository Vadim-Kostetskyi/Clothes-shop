import React, { useEffect, useState } from 'react';
import CategoryCards from 'modules/core/components/CategoryCards';
import PreferencesModal from 'modules/core/components/PreferencesModal';
import MainLayout from 'modules/core/components/MainLayout';
import { useLocalStorage } from 'hooks';
import styles from './index.module.scss';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const { getItem } = useLocalStorage<boolean>('shouldShowModal', true);
    try {
      const shouldShowModal = getItem();

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
