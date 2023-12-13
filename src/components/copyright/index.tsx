import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const Copyright = (): JSX.Element => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return <p className={styles.copyright}>{t('copyright', { year })}</p>;
};

export default Copyright;
