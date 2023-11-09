import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const discountPercent = 10;

const DescriptionSubscribe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperDescription}>
          <p className={styles.mainText}>
            {t('subscriptionForm.discountHeader')}
          </p>
          <span className={styles.spanText}>
            {t('subscriptionForm.discountPercent', { discountPercent })}
          </span>
        </div>
        <div className={styles.wrapperDiscount}>
          <span className={styles.discount}>-{discountPercent}</span>
          <span className={styles.percent}>%</span>
        </div>
      </div>
    </>
  );
};

export default DescriptionSubscribe;
