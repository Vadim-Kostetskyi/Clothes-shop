import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const PERCENTAGE_DISCOUNT = 10;

const NewsletterDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperDescription}>
          <p className={styles.mainText}>
            {t('subscriptionForm.discountHeader')}
          </p>
          <span className={styles.spanText}>
            {t('subscriptionForm.discountPercentage', {
              percentage: PERCENTAGE_DISCOUNT,
            })}
          </span>
        </div>
        <div className={styles.wrapperDiscount}>
          <span className={styles.discount}>-{PERCENTAGE_DISCOUNT}</span>
          <span className={styles.percent}>%</span>
        </div>
      </div>
    </>
  );
};

export default NewsletterDescription;
