import React from 'react';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from 'utils/constants';

const SelectLanguage = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const changeLang = (language: string) => i18n.changeLanguage(language);
  return (
    <>
      <p>{t('welcome')}</p>
      <select
        name="languages"
        id="lang-select"
        onChange={event => changeLang(event.target.value)}
      >
        {AVAILABLE_LANGUAGES.map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectLanguage;
