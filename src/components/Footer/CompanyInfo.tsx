import React from 'react';
// import FooterList from './FooterList';
import InstagramImg from 'assets/SVG/Footer/Instagram';
import FacebookImg from 'assets/SVG/Footer/Facebook';
import TwitterImg from 'assets/SVG/Footer/Twitter';
import PinterestImg from 'assets/SVG/Footer/Pinterest';
import EarthImg from 'assets/SVG/Footer/Earth';
import PhoneImg from 'assets/SVG/Footer/Phone';
import styles from './Footer.module.scss';

const CompanyInfo = (): JSX.Element => {
  const socialIcons = [InstagramImg, FacebookImg, TwitterImg, PinterestImg];

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
        <p className={styles.language}>Ukraine | English</p>
      </button>
      <button className={styles.infoBox} style={{ marginBottom: 8 }}>
        <PhoneImg className={styles.img} />
        <p className={styles.number}>Call 900 456 003</p>
        <span className={styles.active}>Online</span>
      </button>
      <p className={styles.workDays}>
        From Mondays to Fridays from 09:00 to 19:00
      </p>
    </>
  );
};

export default CompanyInfo;