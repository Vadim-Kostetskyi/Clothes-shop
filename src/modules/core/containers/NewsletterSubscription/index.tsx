import React from 'react';
import { useTranslation } from 'react-i18next';
import NewsletterDescription from 'modules/core/components/NewsletterDescription';
import Input from 'modules/core/components/Input';
import ArrowButton from 'assets/svgs/ArrowButton';
import Email from 'assets/svgs/Email';
import styles from './index.module.scss';

const NewsletterSubscription = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.formWrapper}>
        <NewsletterDescription />
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
            wrapperClass={styles.wrapper}
          />
        </div>
      </div>
    </>
  );
};

export default NewsletterSubscription;
