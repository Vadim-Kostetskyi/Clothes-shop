import React, { useCallback, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CatalogMenu from 'components/CatalogMenu';
import TopBar from 'modules/core/components/TopBar';
import Input from 'modules/core/components/Input';
import logo from 'assets/images/logo.png';
import Search from 'assets/svgs/Search';
import Menu from 'assets/svgs/Menu';
import Cross from 'assets/svgs/Cross';
import styles from './index.module.scss';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCheckoutPage = location.pathname.startsWith('/checkout');
  const isProductsGridPage = /\/(men|women|children)\/products-grid/.test(
    location.pathname,
  );
  console.log(isProductsGridPage);

  const isProductsGrid = (gridClass: string, defaultClass: string): string => {
    return isProductsGridPage ? gridClass : defaultClass;
  };

  const toggleOpenMenu = useCallback(
    () => () => setIsMenuOpen(prev => !prev),
    [],
  );

  return (
    <div className={isCheckoutPage ? styles.checkoutHeader : styles.header}>
      {isHomePage || isCheckoutPage ? (
        <div className={isCheckoutPage ? styles.logoBox : styles.logoContainer}>
          <img src={logo} className={styles.logo} alt="Logo" />
        </div>
      ) : (
        <div className={styles.headerContainer}>
          <div
            className={
              isHomePage ? styles.headerWrapperHomePage : styles.headerWrapper
            }
          >
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
            <Link to="/men">
              <img src={logo} className={styles.logo} alt="Logo" />
            </Link>
            <div className={isProductsGrid(styles.userBoxGrid, styles.userBox)}>
              <TopBar />
            </div>
          </div>
          <div
            className={isProductsGrid(
              styles.wrapperMenuMobileGrid,
              styles.wrapperMenuMobile,
            )}
          >
            {isMenuOpen ? (
              <CatalogMenu />
            ) : (
              <div
                className={isProductsGrid(
                  styles.wrapperInputGrid,
                  styles.wrapperInput,
                )}
              >
                <Input
                  Icon={<Search className={styles.inputIcon} />}
                  className={styles.inputMobile}
                  placeholder={t('searchPlaceholder')}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
export { menuName, category, subcategory } from './menu-data';
