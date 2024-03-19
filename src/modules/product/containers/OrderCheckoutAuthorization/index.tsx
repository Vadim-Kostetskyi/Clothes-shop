import React, { useState } from 'react';
import Input from 'modules/core/components/Input';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const OrderCheckoutAuthorization = () => {
  const [stayLogged, setStayLogged] = useState(false);

  const { t } = useTranslation();

  const buttons = [
    { label: t('order.withoutRegistration'), className: '' },
    { label: t('order.continueWithApple'), className: 'appleText' },
    { label: t('order.continueWithGoogle'), className: 'googleText' },
    { label: t('order.continueWithFacebook'), className: 'facebookText' },
  ];

  const handleChange = () => {
    setStayLogged(!stayLogged);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.signForm}>
        <h1 className={styles.title}>{t('order.detailsTitle')}</h1>
        <Input
          placeholder={`${t('telephone')} / ${t('email')}`}
          wrapperClass={styles.inputWrapper}
          className={styles.input}
        />
        <Input
          type="password"
          placeholder={`${t('password')}`}
          wrapperClass={styles.inputWrapper}
          className={styles.input}
        />
        <div className={styles.helpOptions}>
          <label>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={stayLogged}
              onChange={handleChange}
            />
            <span className={styles.checkboxText}>
              {t('order.stayLoggedIn')}
            </span>
          </label>
          <a href="#" className={styles.forgotLink}>
            {t('order.forgotPassword')}
          </a>
        </div>
        <button className={styles.signBtn}>{t('order.signIn')}</button>
      </form>
      <span className={styles.text}>{t('order.orIfYouPrefer')}</span>
      {buttons.map(({ label, className }, index) => (
        <button
          key={label}
          className={index ? styles.socialSignBtn : styles.withoutRegisterBtn}
        >
          <span className={styles[className]}>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default OrderCheckoutAuthorization;
