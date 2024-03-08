import React, { useState } from 'react';
import Input from 'modules/core/components/Input';
import styles from './index.module.scss';

const OrderCheckoutAuthorization = () => {
  const [stayLogged, setStayLogged] = useState(false);

  const handleChange = () => {
    setStayLogged(!stayLogged);
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.signForm}>
        <h1 className={styles.title}>ENTER YOUR PHONE NUMBER OR EMAIL</h1>
        <Input
          placeholder={'Telephone / Email'}
          wrapperClass={styles.inputWrapper}
          className={styles.input}
        />
        <Input
          type="password"
          placeholder={'Password'}
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
            <span className={styles.checkboxText}>Stay logged in</span>
          </label>
          <a href="#" className={styles.forgotLink}>
            I forgot my password
          </a>
        </div>
        <button className={styles.signBtn}>Sign in</button>
      </form>
      <span className={styles.text}>Or, if you prefer</span>
      <button className={styles.withoutRegisterBtn}>
        Without registration
      </button>
      <button className={styles.socialSignBtn}>
        <span className={styles.appleText}>Continue with Apple</span>
      </button>
      <button className={styles.socialSignBtn}>
        <span className={styles.googleText}>Continue with Google</span>
      </button>
      <button className={styles.socialSignBtn}>
        <span className={styles.facebookText}>Continue with Facebook</span>
      </button>
    </div>
  );
};

export default OrderCheckoutAuthorization;
