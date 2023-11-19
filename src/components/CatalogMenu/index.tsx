import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { menuName, category, subcategory } from './MenuList';
// import Menu from 'assets/svgs/Menu';
import styles from './index.module.scss';

interface MenuLayoutProps {
  isMobile?: boolean;
}

const CatalogMenu: FC<MenuLayoutProps> = ({ isMobile }) => {
  const [showSubCategory, setShowSubCategory] = useState(false);

  const { t } = useTranslation();

  const handleCategoryHover = (label: string) => () => {
    if (label === 'Clothing') {
      setShowSubCategory(true);
    }
  };

  const setClassName = (label: string) => {
    if (label === 'Clothing') {
      return styles.clothing;
    } else if (label === 'Promotion') {
      return styles.promotion;
    } else {
      return styles.link;
    }
  };

  const toggleCategory = (shouldShow: boolean) => () =>
    setShowSubCategory(shouldShow);

  return (
    <>
      <div className={isMobile ? styles.menuBoxMobile : styles.menuBox}>
        {menuName.map(({ id, href, label }) => (
          <div className={styles.menuItem} key={id}>
            <a href={href} className={styles.menuItemLink}>
              {t('listItem', { label })}
            </a>
            <div className={styles.menuListContainer}>
              <div className={styles.menListBox}>
                <div className={styles.menuCategory}>
                  {category[label].map(({ id, href, label }) => (
                    <a
                      href={href}
                      key={id}
                      className={setClassName(label)}
                      onMouseEnter={handleCategoryHover(label)}
                      onMouseLeave={toggleCategory(false)}
                      onFocus={handleCategoryHover(label)}
                      onBlur={toggleCategory(false)}
                    >
                      {t('listItem', { label })}
                    </a>
                  ))}
                </div>
                <div
                  className={
                    showSubCategory
                      ? styles.subCategory
                      : styles.subCategoryHide
                  }
                  onMouseEnter={toggleCategory(true)}
                  onMouseLeave={toggleCategory(false)}
                  onFocus={toggleCategory(true)}
                  onBlur={toggleCategory(false)}
                >
                  {subcategory[label].map(({ id, href, label }) => (
                    <a
                      href={href}
                      key={id}
                      className={
                        id ? styles.linkSubCategory : styles.linkSeeAll
                      }
                    >
                      {t('listItem', { label })}{' '}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatalogMenu;
