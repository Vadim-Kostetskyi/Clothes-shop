import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'components/Footer/MenuList';
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

  const handleCategoryHover = (label: string) => () => {
    const clothing = label === 'Clothing';

    if (clothing) {
      setShowSubCategory(true);
    }
  };

  const setClassName = (label: string) => {
    const clothing = label === 'Clothing';
    const promotion = label === 'Promotion';

    if (clothing) {
      return styles.clothing;
    } else if (promotion) {
      return styles.promotion;
    } else {
      return styles.link;
    }
  };

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
        className={showSubCategory ? styles.clothingListWrapper : styles.hide}
        onMouseEnter={toggleCategory(true)}
        onMouseLeave={toggleCategory(false)}
        onFocus={toggleCategory(true)}
        onBlur={toggleCategory(false)}
      >
        <ClothingList
          items={menuItems[itemLabel]}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
};

export default CatalogMenuItemMobile;
