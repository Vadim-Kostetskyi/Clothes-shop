import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterList from './FooterList';
import CompanyInfo from './CompanyInfo';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {

  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.shadowBorder}></div>
      <div className={styles.box}>
        <FooterList className={styles.columnDesktop} />
        <div className={styles.info}>
          <CompanyInfo/>
          <FooterList className={styles.columnMobile}/>
        </div>
      </div>
      <p className={styles.copyright}>{t('copyright', {year})}</p>
    </footer>
  );
};

export default Footer;
