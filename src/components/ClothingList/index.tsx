import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'components/Footer/MenuList';
import styles from './index.module.scss';

interface SubCategoryMenuProps {
  items: MenuItem[];
  toggleCategory?: (shouldShow: boolean) => () => void;
}

const ClothingList: FC<SubCategoryMenuProps> = ({ items, toggleCategory }) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={toggleCategory ? toggleCategory(true) : undefined}
      onMouseLeave={toggleCategory ? toggleCategory(false) : undefined}
      onFocus={toggleCategory ? toggleCategory(true) : undefined}
      onBlur={toggleCategory ? toggleCategory(false) : undefined}
    >
      {items.map(({ id, href, label }) => (
        <a
          href={href}
          key={id}
          className={id ? styles.link : styles.linkSeeAll}
        >
          {t('listItem', { label })}{' '}
        </a>
      ))}
    </div>
  );
};

export default ClothingList;
