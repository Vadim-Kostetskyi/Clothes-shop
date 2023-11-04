import React, { FC, InputHTMLAttributes } from 'react';
// import styles from "./index.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ type, className, placeholder }) => (
  <>
    <input type={type} placeholder={placeholder} className={className} />
  </>
);

export default Input;
