import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'types/types';

import styles from './index.module.scss';

interface SubCategoryMenuProps {
  items: MenuItem[];
  toggleCategory?: (shouldShow: boolean) => () => void;
}

const NestedMenu: FC<SubCategoryMenuProps> = ({ items, toggleCategory }) => {
  const { t } = useTranslation();

  return (
    // TODO: https://allalitvinenko.atlassian.net/browse/OS-186
    <div
      className={styles.wrapper}
      onMouseEnter={toggleCategory ? toggleCategory(true) : undefined}
      onMouseLeave={toggleCategory ? toggleCategory(false) : undefined}
      onFocus={toggleCategory ? toggleCategory(true) : undefined}
      onBlur={toggleCategory ? toggleCategory(false) : undefined}
    >
      {items.map(({ id, href, label }) => (
        <Link
          to={href}
          key={id}
          className={id ? styles.link : styles.linkSeeAll}
        >
          {t('listItem', { label })}{' '}
        </Link>
      ))}
    </div>
  );
};

export default NestedMenu;
