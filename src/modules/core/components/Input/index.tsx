import React, { FC, InputHTMLAttributes, ReactElement } from 'react';

import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ReactElement;
  text?: string;
  wrapperClass?: string;
  labelCheckbox?: string;
  isAnimated?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  type,
  className,
  placeholder,
  Icon,
  text,
  wrapperClass,
  onChange,
  isAnimated,
}) => (
  <div className={`${styles.inputWrapper} ${wrapperClass}`}>
    {Icon ? <span className={styles.icon}>{Icon}</span> : null}
    <input
      id={id}
      type={type}
      placeholder={isAnimated ? '' : placeholder}
      className={className}
      onChange={onChange}
    />
    {isAnimated ? (
      <label className={styles.placeholder} htmlFor={id}>
        {placeholder}
      </label>
    ) : null}
    {text ? <label className={styles.text}>{text}</label> : null}
  </div>
);

export default Input;
