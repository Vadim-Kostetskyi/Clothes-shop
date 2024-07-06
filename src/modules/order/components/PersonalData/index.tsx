import React, { FC, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Input from 'modules/core/components/Input';
import { personalDataItems } from './data';
import { validPhoneCode, validPhoneNumber } from 'utils/validate';
import { CountyPhoneCode } from 'utils/constants';
import { useLocalStorage } from 'hooks';
import { useCreateOrderMutation } from 'redux/ordersApi';
import { SoppingCardQuantity, splitInfo } from './splitInfo';
import styles from './index.module.scss';

export interface PersonalDataProps {
  back: () => void;
  deliveryType: string;
}

export interface PersonalDataForm {
  firstName: string;
  lastName: string;
  prefix: number;
  number: number;
  email: string;
  address: string;
  information: string;
  zipCode: number;
  city: string;
  state: string;
}

const PersonalData: FC<PersonalDataProps> = ({ back, deliveryType }) => {
  const [orderInformation, { data }] = useCreateOrderMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalDataForm>();
  const { t } = useTranslation();
  const { getItem } = useLocalStorage<SoppingCardQuantity>('shoppingCart', {
    quantity: [],
  });
  const productsForOrdering = getItem();

  const orderItems = splitInfo(productsForOrdering);

  const sendCustomerInformation: SubmitHandler<PersonalDataForm> = useCallback(
    userData => {
      const {
        firstName,
        lastName,
        email,
        prefix,
        number,
        address,
        zipCode,
        city,
        state,
        information,
      } = userData;
      const phone = `${prefix}${number}`;

      const order = {
        body: {
          user: { firstName, lastName, phone, email },
          orderDelivery: {
            address,
            moreInfo: `${information} Type of delivery: ${deliveryType}`,
            zipCode: zipCode.toString(),
            city,
            state,
            country: 'Ukraine',
          },
          orderItems,
        },
      };
      orderInformation(order);

      console.log('data', data);
      //TODO make the transition to the next stage
    },
    [],
  );

  return (
    <form
      className={styles.personalData}
      onSubmit={handleSubmit(sendCustomerInformation)}
    >
      {personalDataItems.map(({ title, inputs }, index) => (
        <div
          key={title}
          className={index ? styles.wrapperDetails : styles.wrapperData}
        >
          <h1>{title}</h1>
          <div>
            {inputs.map(({ id, placeholder, type }) => (
              <>
                {placeholder === CountyPhoneCode.UKRAINE ? (
                  <form>
                    <textarea
                      id={id}
                      rows={1}
                      className={
                        errors.prefix ? styles.prefixError : styles.prefix
                      }
                      placeholder=""
                      {...register(id, {
                        required: true,
                        value: t('countryPhoneCode'),
                        validate: validPhoneCode,
                      })}
                    ></textarea>
                    <span>
                      Prefix * <br />
                      {t('countryPhoneCode')}
                    </span>
                  </form>
                ) : (
                  <Input
                    id={id}
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    isAnimated={true}
                    text={t('order.warning')}
                    register={register}
                    required={id !== 'information'}
                    validate={id === 'number' ? validPhoneNumber : undefined}
                    errors={errors}
                  />
                )}
              </>
            ))}
            {index ? <div className={styles.state}>{t('country')}</div> : null}
          </div>
        </div>
      ))}
      <p>{t('consent')}</p>
      <div>
        <button onClick={back}>
          <p>{t('return')}</p>
        </button>
        <button type="submit">
          <p>{t('continue')}</p>
        </button>
      </div>
      <Link to={'#'}>
        <u>{t('privacyPolicy')}</u>
      </Link>
    </form>
  );
};

export default PersonalData;
