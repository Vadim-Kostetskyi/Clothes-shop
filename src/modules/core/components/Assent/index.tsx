import React, { FC, FormEvent } from 'react';
import styles from './index.module.scss';

interface AssentProps {
  buttonText: string;
  rememberSelectionText: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Assent: FC<AssentProps> = ({
  onSubmit,
  buttonText,
  rememberSelectionText,
}) => {
  return (
    <form className={styles.agreement} onSubmit={onSubmit}>
      <label className={styles.agreementLabel}>
        <input type="checkbox" name="check" className={styles.checkbox} />
        <span className={styles.agreementText}>{rememberSelectionText}</span>
      </label>
      <button className={styles.assentButton} type="submit">
        {buttonText}!
      </button>
    </form>
  );
};

export default Assent;
