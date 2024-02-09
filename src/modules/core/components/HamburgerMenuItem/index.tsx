import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import NestedMenu from 'components/NestedMenu';
import { HeaderMenu, MenuItem } from 'types/types';
import Accordion from 'modules/core/components/Accordion';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

interface CatalogMenuItemProps {
  menuItems: Record<string, MenuItem[]>;
  itemLabel: string;
  menuOptions: Record<string, MenuItem[]>;
}

const HamburgerMenuItem: FC<CatalogMenuItemProps> = ({
  menuItems,
  itemLabel,
  menuOptions,
}) => {
  const { t } = useTranslation();

  const getIsAccordionMenu = useCallback(
    (label: string) => ['Clothing', 'Suits', 'Collections'].includes(label),
    [],
  );

  const setClassName = useCallback(
    (label: string) =>
      label === HeaderMenu.Promotion ? styles.promotion : styles.link,
    [],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        {menuOptions[itemLabel].map(({ id, href, label }) =>
          getIsAccordionMenu(label) ? (
            <div key={id}>
              <Accordion
                title={t('listItem', { label })}
                titleStyles={styles.title}
                listStyle={styles.listStyle}
                list={
                  label === 'Clothing' && (
                    <NestedMenu items={menuItems[itemLabel]} />
                  )
                }
              />
            </div>
          ) : (
            <Link to={href} key={id} className={setClassName(label)}>
              {t('listItem', { label })}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default HamburgerMenuItem;
