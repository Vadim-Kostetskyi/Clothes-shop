import React from 'react';
import { useGetTopCategoriesByNameQuery } from 'redux/topCategoriesApi';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const TopCategories = () => {
  const { data } = useGetTopCategoriesByNameQuery('');
  const { t } = useTranslation();
  return (
    <div className={styles.cardsWrapper}>
      <p className={styles.title}>{t('topCategories')}</p>
      <div className={styles.categoryWrapper}>
        {data?.map(({ name, url }: { name: string; url: string }) => {
          return (
            <div className={styles.itemWrapper} key={name}>
              <div className={styles.imageWrapper}>
                <img src={url} alt={name} className={styles.image} />
              </div>
              <p className={styles.text}>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
