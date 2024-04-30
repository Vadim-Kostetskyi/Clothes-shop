import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import Input from 'modules/core/components/Input';

interface paymentForm {
  cardNumber: string;
  cardHolder: string;
  month: number;
  year: number;
  cvv: number;
}

const PaymentDetail = () => {
  const { t: validationT } = useTranslation('validation');
  const { t: defaultT } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<paymentForm>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<paymentForm> = () => {
    // axios request to backend payment endpoint
  };

  const requiredInput = {
    required: {
      value: true,
      message: validationT('required'),
    },
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapperData}>
        <div>
          <InputMask
            {...register('cardNumber', {
              ...requiredInput,
              pattern: {
                value: /(?:\d[ ]*?){16}/,
                message: validationT('invalidCardNumber'),
              },
            })}
            type="text"
            name="cardNumber"
            className={clsx(
              styles.input,
              errors.cardNumber && styles.inputError,
            )}
            placeholder={defaultT('payment.cardNumber')}
            mask={'9999 9999 9999 9999'}
          />
          {errors.cardNumber && (
            <label className={styles.textError}>
              {errors.cardNumber.message}
            </label>
          )}
        </div>
        <div>
          <Input
            {...register('cardHolder', {
              ...requiredInput,
            })}
            id="cardHolder"
            name="cardHolder"
            className={clsx(
              styles.input,
              errors.cardHolder && styles.inputError,
            )}
            type="text"
            placeholder={defaultT('payment.cardHolder')}
            required={true}
          />
          {errors.cardHolder && (
            <label className={styles.textError}>
              {errors.cardHolder.message}
            </label>
          )}
        </div>
        <div>
          <Input
            {...register('month', {
              ...requiredInput,
            })}
            id="month"
            name="month"
            className={clsx(styles.input, errors.month && styles.inputError)}
            type="number"
            placeholder={defaultT('Month')}
          />
          {errors.month && (
            <label className={styles.textError}>{errors.month.message}</label>
          )}
        </div>
        <div>
          <Input
            {...register('year', {
              ...requiredInput,
            })}
            id="year"
            name="year"
            className={clsx(styles.input, errors.year && styles.inputError)}
            type="number"
            placeholder={defaultT('Year')}
          />
          {errors.year && (
            <label className={styles.textError}>{errors.year.message}</label>
          )}
        </div>
        <div>
          <InputMask
            {...register('cvv', {
              required: {
                value: true,
                message: validationT('required'),
              },
              pattern: {
                value: /\d{3}/,
                message: validationT('invalidCVV'),
              },
            })}
            type="password"
            name="cvv"
            className={clsx(styles.input, errors.cvv && styles.inputError)}
            placeholder="CVV"
            mask={'999'}
            maskPlaceholder={''}
          />
          {errors.cvv && (
            <label className={styles.textError}>{errors.cvv.message}</label>
          )}
        </div>
      </form>
      <div className={styles.wrapperButton}>
        <button onClick={() => {}}>
          <p>{defaultT('return')}</p>
        </button>
        <button onClick={handleSubmit(onSubmit)}>
          <p>{defaultT('continue')}</p>
        </button>
      </div>
    </div>
  );
};

export default PaymentDetail;
