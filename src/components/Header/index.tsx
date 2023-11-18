import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MenuLayout from 'components/MenuLayout';
import TopBar from 'components/TopBar';
import Input from 'components/Input';
import logo from '../../assets/images/logo.png';
import Search from 'assets/svgs/Search';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.header}>
      <div
        className={
          isHomePage ? styles.headerWrapperHomePage : styles.headerWrapper
        }
      >
        <nav className={isHomePage ? styles.invisible : styles.navigation}>
          <MenuLayout />
        </nav>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Logo" />
        </Link>
        <div className={isHomePage ? styles.invisible : styles.userBox}>
          <TopBar />
        </div>
      </div>
      <div className={styles.wrapperInput}>
        <Input
          Icon={<Search className={styles.inputIcon} />}
          className={styles.inputMobile}
          placeholder={t('searchPlaceholder')}
        />
      </div>
    </div>
  );
};

export default Header;
