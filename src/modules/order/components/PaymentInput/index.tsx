import React, { FC, InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { paymentForm } from '../../conteiners/PaymentDetail';
import styles from './index.module.scss';

interface FormErrors {
  [key: string]: {
    message?: string;
  };
}

interface PaymentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  placeholder?: string;
  rules?: RegisterOptions;
  id: string;
  name: keyof paymentForm;
  errors: FormErrors;
  register: (
    name: keyof paymentForm,
    options?: RegisterOptions,
  ) => UseFormRegisterReturn;
}

const PaymentInput: FC<PaymentInputProps> = ({
  id,
  type,
  name,
  className,
  placeholder,
  register,
  rules,
  errors,
}) => {
  return (
    <>
      <input
        {...register(name, rules)}
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
      />
      {errors?.[name] && (
        <label className={styles.textError}>{errors[name]?.message}</label>
      )}
    </>
  );
};

export default PaymentInput;
