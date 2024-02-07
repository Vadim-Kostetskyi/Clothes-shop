import React from 'react';
import FooterList from '../../components/FooterList';
import CompanyInfo from '../../components/CompanyInfo';
import Copyright from 'modules/core/components/Copyright';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.shadowBorder}></div>
      <div className={styles.box}>
        <FooterList className={styles.columnDesktop} />
        <div className={styles.info}>
          <CompanyInfo />
          <FooterList className={styles.columnMobile} />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
