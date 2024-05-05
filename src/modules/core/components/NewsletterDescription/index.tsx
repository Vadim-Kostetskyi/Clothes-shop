import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { PERCENTAGE_DISCOUNT } from '../../containers/NewsletterSubscription';

const NewsletterDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.mainText}>
          {t('subscriptionForm.discountHeader')}
        </span>{' '}
        <span className={styles.spanText}>
          {t('subscriptionForm.discountPercentage', {
            percentage: PERCENTAGE_DISCOUNT,
          })}
        </span>
      </div>
    </>
  );
};

export default NewsletterDescription;
