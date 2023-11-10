import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { menuName, category, subcategory } from './MenuList';
import styles from './index.module.scss';

const MenuLayout = (): JSX.Element => {
  const [showSubCategory, setShowSubCategory] = useState(false);

  const { t } = useTranslation();

  const classDefinition = (label: string) => () => {
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

  const toggleSubcategory = (shouldShow: boolean) => () =>
    setShowSubCategory(shouldShow);

  return (
    <div className={styles.menuBox}>
      {menuName.map(({ id, href, label }) => (
        <div className={styles.menuName} key={id}>
          <a href={href} className={styles.menuNameLink}>
            {t('listItem', { label })}
          </a>
          <div className={styles.menList}>
            <div className={styles.menListBox}>
              <div className={styles.category}>
                {category[label].map(({ id, href, label }) => (
                  <a
                    href={href}
                    key={id}
                    className={setClassName(label)}
                    onMouseEnter={classDefinition(label)}
                    onMouseLeave={toggleSubcategory(false)}
                    onFocus={classDefinition(label)}
                    onBlur={toggleSubcategory(false)}
                  >
                    {t('listItem', { label })}
                  </a>
                ))}
              </div>
              <div
                className={
                  showSubCategory ? styles.subCategory : styles.subCategoryHide
                }
                onMouseEnter={toggleSubcategory(true)}
                onMouseLeave={toggleSubcategory(false)}
                onFocus={toggleSubcategory(true)}
                onBlur={toggleSubcategory(false)}
              >
                {subcategory[label].map(({ id, href, label }) => (
                  <a
                    href={href}
                    key={id}
                    className={id ? styles.linkSub : styles.linkSeeAll}
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
  );
};

export default MenuLayout;
