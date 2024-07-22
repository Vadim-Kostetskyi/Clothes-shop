import React from 'react';
import { useTranslation } from 'react-i18next';
import NewsletterDescription from 'modules/core/components/NewsletterDescription';
import Input from 'modules/core/components/Input';
import ArrowButton from 'assets/svgs/ArrowButton';
import Email from 'assets/svgs/Email';
import styles from './index.module.scss';

export const PERCENTAGE_DISCOUNT = 10;

const NewsletterSubscription = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formBox}>
        <NewsletterDescription />
        <div className={styles.wrapperDiscount}>
          <span className={styles.discount}>-{PERCENTAGE_DISCOUNT}</span>
          <span className={styles.percent}>%</span>
        </div>
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.wrapperItem}>
          <Input
            type="text"
            placeholder={t('subscriptionForm.placeholder')}
            className={styles.inputText}
            Icon={<Email />}
          />
          <button className={styles.buttonWrapper}>
            <ArrowButton />
          </button>
        </div>
        <Input
          type="checkbox"
          text={t('subscriptionForm.policy')}
          className={styles.checkbox}
        />
      </div>
    </div>
  );
};

export default NewsletterSubscription;
