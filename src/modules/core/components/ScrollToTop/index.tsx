import React, { useState, useEffect } from 'react';
import SwiperUp from 'assets/svgs/SwiperUp';
import styles from './index.module.scss';
import useScrollToTop from 'hooks/use-scroll-to-top';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      onClick={useScrollToTop}
    >
      <SwiperUp className={styles.img} />
    </button>
  );
};

export default ScrollToTop;
