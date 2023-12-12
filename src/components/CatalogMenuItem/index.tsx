import React, { useState, FC } from 'react';
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

const setClassName = (label: string) => {
  switch (label) {
    case HeaderMenu.Clothing:
      return styles.clothing;
    case HeaderMenu.Promotion:
      return styles.promotion;
    default:
      return styles.link;
  }
};

const CatalogMenuItemMobile: FC<CatalogMenuItemMobileProps> = ({
  menuItems,
  itemLabel,
  menuOptions,
}) => {
  const [showSubCategory, setShowSubCategory] = useState(false);

  const { t } = useTranslation();

  const handleCategoryClick = (label: string) => () =>
    setShowSubCategory(label === HeaderMenu.Clothing);

  const toggleCategory = (shouldShow: boolean) => () => {
    setShowSubCategory(shouldShow);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        {menuOptions[itemLabel].map(({ id, href, label }) => (
          <a
            href={href}
            key={id}
            className={setClassName(label)}
            onClick={handleCategoryClick(label)}
            onBlur={toggleCategory(false)}
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
