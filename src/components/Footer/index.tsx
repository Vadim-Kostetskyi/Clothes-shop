import React, { useState } from 'react';
import FooterList from './FooterList';
import CompanyInfo from './CompanyInfo';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  const [listVisible, setListVisible] = useState([false, false, false]);
    
  const openList = (number: number) => {
    setListVisible((prev) =>
      prev.map((value, index) => (index === number ? !value : value)));
  };
    
  return (
    <footer className={styles.footer}>
      <div className={styles.shadowBorder}></div>
      <div className={styles.box}>
        <FooterList className={styles.columnDesktop} />
        <div className={styles.info}>
          <CompanyInfo/>
          <FooterList
            className={styles.columnMobile}
            listVisible={listVisible} openList={openList} />
        </div>
      </div>
      <p className={styles.copyright}>© 2023 by NOVA. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
