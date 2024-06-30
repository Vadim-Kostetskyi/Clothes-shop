import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import PaymentInput from 'modules/order/components/PaymentInput';

export interface PaymentForm {
  cardNumber: string;
  cardHolder: string;
  month: number;
  year: number;
  cvv: number;
}

const normalizeCardNumber = (value: string) => {
  return (
    value
      ?.replace(/\D/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .slice(0, 19) || ''
  );
};

const normalizeCVV = (value: string) => {
  return value?.replace(/\D/g, '').slice(0, 3) || '';
};

const PaymentDetail = () => {
  const { t: validationT } = useTranslation('validation');
  const { t: defaultT } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentForm>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<PaymentForm> = () => {
    // axios request to backend payment endpoint
  };

  const requiredInput = {
    required: {
      value: true,
      message: validationT('required'),
    },
  };

  const cardNumberRules = {
    ...requiredInput,
    pattern: {
      value: /(?:\d[ ]*?){16}/,
      message: validationT('invalidCardNumber'),
    },
  };

  const cvvRules = {
    ...requiredInput,
    pattern: {
      value: /\d{3}/,
      message: validationT('invalidCardNumber'),
    },
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapperData}>
        <div>
          <PaymentInput
            register={register}
            rules={cardNumberRules}
            id="cardNumber"
            name="cardNumber"
            className={clsx(
              styles.input,
              errors?.cardNumber && styles.inputError,
            )}
            type="tel"
            placeholder={'0000 0000 0000 0000'}
            autoComplete="cc-number"
            inputMode="numeric"
            errors={errors}
            onChange={event => {
              const { value } = event.target;
              event.target.value = normalizeCardNumber(value);
            }}
          />
        </div>
        <div>
          <PaymentInput
            register={register}
            rules={requiredInput}
            id="cardHolder"
            name="cardHolder"
            className={clsx(
              styles.input,
              errors?.cardHolder && styles.inputError,
            )}
            type="text"
            placeholder={defaultT('payment.cardHolder')}
            errors={errors}
          />
        </div>
        <div>
          <PaymentInput
            register={register}
            rules={requiredInput}
            id="month"
            name="month"
            className={clsx(styles.input, errors?.month && styles.inputError)}
            type="number"
            placeholder={defaultT('Month')}
            errors={errors}
          />
        </div>
        <div>
          <PaymentInput
            register={register}
            rules={requiredInput}
            id="year"
            name="year"
            className={clsx(styles.input, errors?.year && styles.inputError)}
            type="number"
            placeholder={defaultT('Year')}
            errors={errors}
          />
        </div>
        <div>
          <PaymentInput
            register={register}
            rules={cvvRules}
            id="cvv"
            type="password"
            name="cvv"
            className={clsx(styles.input, errors?.cvv && styles.inputError)}
            placeholder="CVV"
            errors={errors}
            onChange={event => {
              const { value } = event.target;
              event.target.value = normalizeCVV(value);
            }}
          />
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
