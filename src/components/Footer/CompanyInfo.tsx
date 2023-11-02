import React from 'react';
import { useTranslation } from 'react-i18next';
import InstagramImg from 'assets/SVG/Footer/Instagram';
import FacebookImg from 'assets/SVG/Footer/Facebook';
import TwitterImg from 'assets/SVG/Footer/Twitter';
import PinterestImg from 'assets/SVG/Footer/Pinterest';
import EarthImg from 'assets/SVG/Footer/Earth';
import PhoneImg from 'assets/SVG/Footer/Phone';
import styles from './Footer.module.scss';

const CompanyInfo = (): JSX.Element => {
  const socialIcons = [InstagramImg, FacebookImg, TwitterImg, PinterestImg];

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.social}>
        {socialIcons.map((SocialIcon, index) => (
          <button className={styles.socialBtn} key={index}>
            <SocialIcon />
          </button>
        ))}
      </div>
      <button className={styles.infoBox}>
        <EarthImg className={styles.img} />
        <p className={styles.language}>{t('language')}</p>
      </button>
      <button className={styles.infoBox} style={{ marginBottom: 8 }}>
        <PhoneImg className={styles.img} />
        <p className={styles.number}>{t('call')}</p>
        <span className={styles.active}>{t('online')}</span>
      </button>
      <p className={styles.workDays}>{t('work days')}</p>
    </>
  );
};

export default CompanyInfo;