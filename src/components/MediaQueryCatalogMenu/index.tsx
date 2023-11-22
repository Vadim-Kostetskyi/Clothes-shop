import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CatalogMenu from 'components/CatalogMenu';
import CatalogMenuMobile from 'components/CatalogMenuMobile';
import TopBar from 'components/TopBar';
import Input from 'components/Input';
import logo from '../../assets/images/logo.png';
import Search from 'assets/svgs/Search';
import Menu from 'assets/svgs/Menu';
import styles from './index.module.scss';

const MediaQueryCatalogMenu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleOpenMenu = () => () => setIsMenuOpen(prev => !prev);

  return (
    <div className={styles.header}>
      <div
        className={
          isHomePage ? styles.headerWrapperHomePage : styles.headerWrapper
        }
      >
        <nav className={isHomePage ? styles.invisible : styles.navigation}>
          <button className={styles.openMenuButton} onClick={toggleOpenMenu()}>
            <Menu className={styles.menuIconMobile} />
          </button>
          <div className={styles.wrapperMenu}>
            <CatalogMenu />
          </div>
        </nav>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="Logo" />
        </Link>
        <div className={isHomePage ? styles.invisible : styles.userBox}>
          <TopBar />
        </div>
      </div>
      <div className={styles.wrapperMenuMobile}>
        <div className={isMenuOpen ? styles.invisible : ''}>
          <CatalogMenuMobile />
        </div>
        <div className={isMenuOpen ? styles.wrapperInput : styles.invisible}>
          <Input
            Icon={<Search className={styles.inputIcon} />}
            className={styles.inputMobile}
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaQueryCatalogMenu;
