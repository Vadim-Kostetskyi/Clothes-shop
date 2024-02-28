import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  menuName,
  subcategory,
  category,
} from 'modules/core/containers/Header/menu-data';
import { HeaderMenu } from 'types/types';
import styles from './index.module.scss';

const CatalogMenu = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [showSubCategory, setShowSubCategory] = useState(false);

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const currentCategory = pathname.split('/')[1]; // "men"

  useEffect(() => {
    setSelectedCategory(currentCategory);
  }, []);

  // const handleCategoryClick = useCallback(
  //   (label: string) => () => {
  //     setShowSubCategory(label === HeaderMenu.Clothing);
  //   },
  //   [],
  // );

  const toggleCategory = useCallback(
    (shouldShow: boolean) => () => {
      setShowSubCategory(shouldShow);
    },
    [],
  );

  const getClassName = useCallback((label: string) => {
    switch (label) {
      case HeaderMenu.Clothing:
        return styles.clothing;
      case HeaderMenu.Promotion:
        return styles.promotion;
      default:
        return styles.link;
    }
  }, []);

  const handleFocus = useCallback(
    (category: string) => () => {
      setSelectedCategory(category.toLowerCase());
    },
    [],
  );

  const handleBlur = useCallback(
    (category: string) => () => {
      setSelectedCategory(category.toLowerCase());
    },
    [],
  );

  const handleSetCurrentCategory = useCallback(() => {
    setSelectedCategory(currentCategory);
  }, []);

  return (
    <nav className={styles.menu}>
      <ul>
        {menuName.map(({ id, href, label }) => (
          <li key={id}>
            <Link
              className={
                selectedCategory === label.toLowerCase() ? styles.item : ''
              }
              to={href}
              onBlur={handleBlur(label)}
              onMouseEnter={handleFocus(label)}
              onMouseLeave={handleSetCurrentCategory}
            >
              {t('listItem', { label })}
            </Link>
            <ul
              onMouseEnter={handleFocus(label)}
              onMouseLeave={handleSetCurrentCategory}
            >
              <li>
                {category[label].map(({ id, href, label }) => (
                  <Link
                    to={href}
                    key={id}
                    className={getClassName(label)}
                    // onClick={handleCategoryClick(label)}
                  >
                    {t('listItem', { label })}
                  </Link>
                ))}
              </li>
              <li
                className={
                  showSubCategory ? styles.clothingListWrapper : styles.hide
                }
                onBlur={toggleCategory(false)}
              >
                <ul className={styles.subcategoryWrapper}>
                  {subcategory[label].map(({ id, href, label }) => (
                    <Link
                      to={href}
                      key={id}
                      className={
                        id ? styles.subcategoryLink : styles.linkSeeAll
                      }
                    >
                      {t('listItem', { label })}
                    </Link>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CatalogMenu;
