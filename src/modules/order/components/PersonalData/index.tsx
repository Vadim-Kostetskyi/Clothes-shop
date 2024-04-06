import React, { ChangeEvent, FC, FocusEvent, useState } from 'react';
import Input from 'modules/core/components/Input';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { personalDataItems } from './data';
import styles from './index.module.scss';

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
      {personalDataItems.map(({ title, inputs }, index) => (
        <div
          key={title}
          className={index ? styles.wrapperDetails : styles.wrapperData}
        >
          <h1>{title}</h1>
          <div>
            {inputs.map(({ id, placeholder, type }) => (
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
                    text={t('order.warning')}
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
        <button onClick={sendInfo}>
          <p>{t('continue')}</p>
        </button>
      </div>
      <Link to={'#'}>
        <u>{t('privacyPolicy')}</u>
      </Link>
    </div>
  );
};

export default PersonalData;
