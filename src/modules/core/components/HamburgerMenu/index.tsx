import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  menuName,
  category,
  subcategory,
} from 'modules/core/containers/Header';
import HamburgerMenuItem from 'modules/core/components/HamburgerMenuItem';
import styles from './index.module.scss';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState('');
  const { t } = useTranslation();

  const toggleCategory = useCallback(
    (name: string) => () => {
      setMenuOpen(name);
    },
    [],
  );

  return (
    <div className={styles.menuBox}>
      {menuName.map(({ id, label }) => (
        // TODO: https://allalitvinenko.atlassian.net/browse/OS-186
        <div className={styles.menuItem} key={id}>
          <button
            className={
              menuOpen === label
                ? styles.menuItemButtonFocus
                : styles.menuItemButton
            }
            onClick={toggleCategory(label)}
          >
            {t('listItem', { label })}
          </button>
          <div
            className={
              menuOpen === label
                ? styles.menuListContainer
                : styles.menuListContainerHide
            }
          >
            <HamburgerMenuItem
              menuItems={subcategory}
              itemLabel={label}
              menuOptions={category}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HamburgerMenu;
