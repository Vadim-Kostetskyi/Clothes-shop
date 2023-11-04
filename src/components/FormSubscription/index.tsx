import React from 'react';
import Input from 'components/Input';
import { useTranslation } from 'react-i18next';
// import styles from './index.module.scss';

const FormSubscription = () => {
  const { t } = useTranslation();

  return (
    <>
      <Input type="text" placeholder={t('subscriptionForm.placeholder')} />
      <Input type="checkbox" />
      <button></button>
    </>
  );
};

export default FormSubscription;
