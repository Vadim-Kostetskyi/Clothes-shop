import React, { useState, useEffect } from 'react';
import SwiperUp from 'assets/svgs/SwiperUp';
import styles from './index.module.scss';

const PageSwiper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 860) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={isVisible ? styles.button : styles.hide}
      onClick={scrollToTop}
    >
      <SwiperUp className={styles.img} />
    </button>
  );
};

export default PageSwiper;
