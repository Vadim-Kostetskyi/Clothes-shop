import React, { FC, ReactNode } from 'react';
import Header from 'modules/core/containers/Header';
import Footer from 'modules/core/containers/Footer';
import styles from './index.module.scss';

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  isLoading?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  showFooter = true,
  isLoading,
}) => (
  <>
    <Header />
    <div className={`${styles.main} ${isLoading ? styles.mainMaxHeight : ''}`}>
      {children}
    </div>
    {showFooter ? <Footer /> : null}
  </>
);

export default MainLayout;
