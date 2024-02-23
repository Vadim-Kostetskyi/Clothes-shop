import React, { FC, ReactNode } from 'react';
import Header from 'modules/core/containers/Header';
import Footer from 'modules/core/containers/Footer';

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, showFooter = true }) => (
  <>
    <Header />
    {children}
    {showFooter ? <Footer /> : null}
  </>
);

export default MainLayout;
