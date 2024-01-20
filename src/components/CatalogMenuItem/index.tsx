import React, { useState, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'components/Footer/MenuList';
import { HeaderMenu } from 'types';
import ClothingList from 'components/ClothingList';
import styles from './index.module.scss';

interface CatalogMenuItemMobileProps {
  menuItems: Record<string, MenuItem[]>;
  itemLabel: string;
  menuOptions: Record<string, MenuItem[]>;
}

const CatalogMenuItemMobile: FC<CatalogMenuItemMobileProps> = ({
  menuItems,
  itemLabel,
  menuOptions,
}) => {
  const [showSubCategory, setShowSubCategory] = useState(false);

  const { t } = useTranslation();

  const handleCategoryClick = useCallback(
    (label: string) => () => {
      setShowSubCategory(label === HeaderMenu.Clothing);
    },
    [],
  );

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        {menuOptions[itemLabel].map(({ id, href, label }) => (
          <a
            href={href}
            key={id}
            className={getClassName(label)}
            onClick={handleCategoryClick(label)}
          >
            {t('listItem', { label })}
          </a>
        ))}
      </div>
      <div
        className={showSubCategory ? styles.clothingListWrapper : styles.hide}
        onBlur={toggleCategory(false)}
      >
        <ClothingList items={menuItems[itemLabel]} />
      </div>
    </div>
  );
};

export default CatalogMenuItemMobile;
