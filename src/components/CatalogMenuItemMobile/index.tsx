import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'components/Footer/MenuList';
import Clothing from 'components/ClothingList';
import Accordion from 'components/ac';
import styles from './index.module.scss';

interface CatalogMenuItemProps {
  menuItems: Record<string, MenuItem[]>;
  itemLabel: string;
  menuOptions: Record<string, MenuItem[]>;
}

const CatalogMenuItem: FC<CatalogMenuItemProps> = ({
  menuItems,
  itemLabel,
  menuOptions,
}) => {
  const [showSubCategory, setShowSubCategory] = useState(false);
  console.log(showSubCategory);

  const { t } = useTranslation();

  const toggleCategory = (shouldShow: boolean) => () => {
    setShowSubCategory(shouldShow);
  };

  const accordionMenu = (label: string) =>
    label === 'Clothing' || label === 'Suits' || label === 'Collections';

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        {menuOptions[itemLabel].map(({ id, href, label }) =>
          accordionMenu(label) ? (
            <div key={id}>
              <Accordion
                title={t('listItem', { label })}
                titleStyles={styles.title}
                listStyle={styles.listStyle}
                list={
                  label === 'Clothing' && (
                    <Clothing
                      items={menuItems[itemLabel]}
                      toggleCategory={toggleCategory}
                    />
                  )
                }
              />
            </div>
          ) : (
            <a href={href} key={id} className={styles.link}>
              {t('listItem', { label })}
            </a>
          ),
        )}
      </div>
    </div>
  );
};

export default CatalogMenuItem;
