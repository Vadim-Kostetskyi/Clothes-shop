import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CatalogMenu from 'components/CatalogMenu';
import CatalogMenuMobile from 'components/CatalogMenuMobile';
import TopBar from 'components/TopBar';
import Input from 'components/Input';
import logo from '../../assets/images/logo.png';
import Search from 'assets/svgs/Search';
import Menu from 'assets/svgs/Menu';
import Cross from 'assets/svgs/Cross';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const MediaQueryCatalogMenu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        {isHomePage ? null : (
          <nav className={styles.navigation}>
            <button
              className={styles.openMenuButton}
              onClick={toggleOpenMenu()}
            >
              {isMenuOpen ? (
                <Cross className={styles.crossIcon} />
              ) : (
                <Menu className={styles.menuIconMobile} />
              )}
            </button>
            <div className={styles.wrapperMenu}>
              <CatalogMenu />
            </div>
          </nav>
        )}
        {isHomePage ? (
          <img src={logo} className={styles.logo} alt="Logo" />
        ) : (
          <Link to="/men">
            <img src={logo} className={styles.logo} alt="Logo" />
          </Link>
        )}
        {isHomePage ? null : (
          <div className={styles.userBox}>
            <TopBar />
          </div>
        )}
      </div>
      {isHomePage ? null : (
        <div className={styles.wrapperMenuMobile}>
          {isMenuOpen ? <CatalogMenuMobile /> : null}
          {isMenuOpen ? null : (
            <div className={styles.wrapperInput}>
              <Input
                Icon={<Search className={styles.inputIcon} />}
                className={styles.inputMobile}
                placeholder={t('searchPlaceholder')}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaQueryCatalogMenu;
