import React from 'react';
import { useTranslation } from 'react-i18next';
import InstagramImg from 'assets/SVG/Instagram';
import FacebookImg from 'assets/SVG/Facebook';
import TwitterImg from 'assets/SVG/Twitter';
import PinterestImg from 'assets/SVG/Pinterest';
import EarthImg from 'assets/SVG/earth';
import PhoneImg from 'assets/SVG/phone';
import InstagramImg from 'assets/svg/Instagram';
import FacebookImg from 'assets/svg/Facebook';
import TwitterImg from 'assets/svg/Twitter';
import PinterestImg from 'assets/svg/Pinterest';
import EarthImg from 'assets/svg/Earth';
import PhoneImg from 'assets/svg/Phone';
import styles from './Footer.module.scss';

const CompanyInfo = (): JSX.Element => {
  const socialIcons = [InstagramImg, FacebookImg, TwitterImg, PinterestImg];
  const { t } = useTranslation();
  const phone: string = '900 456 003';

  return (
    <>
      <div className={styles.social}>
        {socialIcons.map((SocialIcon, index) => (
          <button className={styles.socialBtn} key={index}>
            <SocialIcon />
          </button>
        ))}
      </div>
      <button className={styles.infoBtn}>
        <EarthImg className={styles.img} />
        <p className={styles.language}>
          {t('country')} | {t('language')}
        </p>
      </button>
      <div className={styles.infoBox}>
        <PhoneImg className={styles.img} />
        <p className={styles.number}>{t('call', { phone })}</p>
        <span className={styles.active}>{t('online')}</span>
      </div>
      <p className={styles.workDays}>{t('workDays')}</p>
    </>
  );
};

export default CompanyInfo;
