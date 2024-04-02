import React, { ChangeEvent, FC, useState } from 'react';
import Input from 'modules/core/components/Input';
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
  const props = [
    {
      title: 'PERSONAL DATA',
      placeholders: [
        { placeholder: 'First name *', type: 'text' },
        { placeholder: 'Last Name *', type: 'text' },
        { placeholder: 'Prefix *\n+380' },
        { placeholder: 'Cell number *', type: 'text' },
        { placeholder: 'Email *', type: 'email' },
      ],
    },
    {
      title: 'DELIVERY DETAILS',
      placeholders: [
        { placeholder: 'Address *', type: 'text' },
        { placeholder: 'More information (Optional)', type: 'text' },
        { placeholder: 'Zip code *', type: 'number' },
        { placeholder: 'City *', type: 'text' },
        { placeholder: 'State *', type: 'text' },
        { placeholder: 'Ukraine', type: 'text' },
      ],
    },
  ];

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (newValue === '' || /^\+?[0-9]{0,3}$/.test(newValue)) {
      setInputValue(newValue);
    }
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
            {placeholders.map(({ placeholder, type }) => (
              <>
                {placeholder === 'Prefix *\n+380' ? (
                  <form>
                    <textarea
                      rows={1}
                      value={inputValue}
                      placeholder={placeholder}
                      onChange={handleChange}
                    ></textarea>
                  </form>
                ) : (
                  <Input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    onChange={event => handleSetInfo(event)}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
      <p>
        By continuing, I confirm that I was able to read and understand the
        information on the use of my personal data, as explained in the Privacy
        Policy.
      </p>
      <div>
        <button onClick={back}>
          <p>RETURN</p>
        </button>
        <button onClick={sendInfo}>
          <p>CONTINUE</p>
        </button>
      </div>
      <p>The terms and conditions. Privacy policy.</p>
    </div>
  );
};

export default PersonalData;
