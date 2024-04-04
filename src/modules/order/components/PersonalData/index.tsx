import React, { ChangeEvent, FC, FocusEvent, useState } from 'react';
import Input from 'modules/core/components/Input';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */

export interface PersonalDataProps {
  handleSetInfo: (event: ChangeEvent<HTMLInputElement>) => void;
  sendInfo: () => void;
  back: () => void;
}

const PersonalData: FC<PersonalDataProps> = ({
  handleSetInfo,
  sendInfo,
  back,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const { t } = useTranslation();

  const props = [
    {
      title: 'PERSONAL DATA',
      placeholders: [
        { id: 'firstName', placeholder: 'First Name *', type: 'text' },
        { id: 'lastName', placeholder: 'Last Name *', type: 'text' },
        { id: 'prefix', placeholder: 'Prefix *\n+380' },
        { id: 'number', placeholder: 'Cell number *', type: 'number' },
        { id: 'email', placeholder: 'Email *', type: 'email' },
      ],
    },
    {
      title: 'DELIVERY DETAILS',
      placeholders: [
        { id: 'address', placeholder: 'Address *', type: 'text' },
        {
          id: 'information',
          placeholder: 'More information (Optional)',
          type: 'text',
        },
        { id: 'zipCode', placeholder: 'Zip code *', type: 'number' },
        { id: 'city', placeholder: 'City *', type: 'text' },
        { id: 'state', placeholder: 'State *', type: 'text' },
        { id: 'Ukraine', placeholder: 'Ukraine', type: 'text' },
      ],
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue === '' || /^\+?[0-9]{0,3}$/.test(newValue)) {
      console.log(newValue);
      setInputValue(newValue);
    }
  };

  const handleSetPrefix = (e: FocusEvent<HTMLTextAreaElement>) => {
    handleSetInfo(e as unknown as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={styles.personalData}>
      {props.map(({ title, placeholders }, index) => (
        <div
          key={title}
          className={index ? styles.wrapperDetails : styles.wrapperData}
        >
          <h1>{title}</h1>
          <div>
            {placeholders.map(({ id, placeholder, type }) => (
              <>
                {placeholder === 'Prefix *\n+380' ? (
                  <form>
                    <textarea
                      id={id}
                      rows={1}
                      value={inputValue}
                      onChange={handleChange}
                      placeholder=""
                      onBlur={handleSetPrefix}
                    ></textarea>
                    <span>
                      Prefix * <br />
                      +380
                    </span>
                  </form>
                ) : (
                  <Input
                    id={id}
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleSetInfo}
                    isAnimated={true}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
      <p>{t('consent')}</p>
      <div>
        <button onClick={back}>
          <p>RETURN</p>
        </button>
        <button onClick={sendInfo}>
          <p>CONTINUE</p>
        </button>
      </div>
      <Link to={'#'}>
        <u>The terms and conditions. Privacy policy.</u>
      </Link>
    </div>
  );
};

export default PersonalData;
