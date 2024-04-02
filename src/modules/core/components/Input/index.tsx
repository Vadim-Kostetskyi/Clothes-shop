import React, { FC, InputHTMLAttributes, ReactElement } from 'react';

import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ReactElement;
  text?: string;
  wrapperClass?: string;
  labelCheckbox?: string;
}

const Input: FC<InputProps> = ({
  type,
  className,
  placeholder,
  Icon,
  text,
  wrapperClass,
  onChange,
}) => (
  <div className={`${styles.inputWrapper} ${wrapperClass}`}>
    {Icon ? <span className={styles.icon}>{Icon}</span> : null}
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
    {text ? <label className={styles.text}>{text}</label> : null}
  </div>
);

export default Input;
