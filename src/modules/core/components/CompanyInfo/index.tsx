import React from 'react';
import { useTranslation } from 'react-i18next';
import InstagramImg from 'assets/svgs/Instagram';
import FacebookImg from 'assets/svgs/Facebook';
import TwitterImg from 'assets/svgs/Twitter';
import PinterestImg from 'assets/svgs/Pinterest';
import EarthImg from 'assets/svgs/Earth';
import PhoneImg from 'assets/svgs/Phone';
import styles from 'modules/core/containers/Footer/Footer.module.scss';

const socialIcons = [InstagramImg, FacebookImg, TwitterImg, PinterestImg];

const CompanyInfo = (): JSX.Element => {
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
