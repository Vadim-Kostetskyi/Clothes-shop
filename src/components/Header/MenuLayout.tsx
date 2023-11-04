import React from 'react';
import { useTranslation } from 'react-i18next';
import { menuName, category, subcategory } from './MenuList';
import styles from './index.module.scss';

const MenuLayout = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.menuBox}>
      {menuName.map(({ id, href, label }) => (
        <div className={styles.menuName} key={id}>
          <a href={href} className={styles.menuNameLink}>
            {t('listItem', { label })}
          </a>
          <div className={styles.menList}>
            <div className={styles.menListBox}>
              <div className={styles.category}>
                {category[label].map(({ id, href, label }) => (
                  <a href={href} key={id} className={styles.link}>
                    {t('listItem', { label })}
                  </a>
                ))}
              </div>
              <div className={styles.category}>
                {subcategory[label].map(({ id, href, label }) => {
                  return id === 0 ? (
                    <a href={href} key={id} className={styles.linkSeeAll}>
                      {t('listItem', { label })}
                    </a>
                  ) : (
                    <a href={href} key={id} className={styles.linkSub}>
                      {t('listItem', { label })}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuLayout;
