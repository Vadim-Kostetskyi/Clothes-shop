import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { menuName, subcategory, category } from './MenuList';
import CatalogMenuItem from 'components/CatalogMenuItem';
import styles from './index.module.scss';

interface MenuLayoutProps {
  isMobile?: boolean;
}

const CatalogMenu: FC<MenuLayoutProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={isMobile ? styles.menuBoxMobile : styles.menuBox}>
        {menuName.map(({ id, href, label }) => (
          <div className={styles.menuItem} key={id}>
            <a href={href} className={styles.menuItemLink}>
              {t('listItem', { label })}
            </a>
            <div className={styles.menuListContainer}>
              <CatalogMenuItem
                menuItems={subcategory}
                itemLabel={label}
                menuOptions={category}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatalogMenu;
