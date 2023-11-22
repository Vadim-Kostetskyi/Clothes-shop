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
      onMouseEnter={toggleCategory && toggleCategory(true)}
      onMouseLeave={toggleCategory && toggleCategory(false)}
      onFocus={toggleCategory && toggleCategory(true)}
      onBlur={toggleCategory && toggleCategory(false)}
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
