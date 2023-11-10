import React from 'react';
import { useTranslation } from 'react-i18next';
import DescriptionSubscribe from 'components/DescriptionSubscribe';
import Input from 'components/Input';
import ArrowButton from 'assets/svgs/ArrowButton';
import Email from 'assets/svgs/Email';
import styles from './index.module.scss';

const FormSubscription = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.formWrapper}>
        <DescriptionSubscribe />
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

export default FormSubscription;
