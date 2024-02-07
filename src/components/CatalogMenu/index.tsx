import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  menuName,
  subcategory,
  category,
} from '../../modules/core/containers/Header/menu-data';
import CatalogMenuItem from 'components/CatalogMenuItem';
import { MenuItem } from 'utils/constants';
import styles from './index.module.scss';

const CatalogMenu = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.menuBox}>
      {menuName.map(({ id, href, label }) => (
        // TODO: https://allalitvinenko.atlassian.net/browse/OS-186
        <div className={styles.menuItem} key={id}>
          <Link to={href} className={styles.menuItemLink}>
            {t('listItem', { label })}
          </Link>
          <div className={styles.menuListContainer}>
            {label === MenuItem.MEN ? (
              <CatalogMenuItem
                menuItems={subcategory}
                itemLabel={label}
                menuOptions={category}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogMenu;
