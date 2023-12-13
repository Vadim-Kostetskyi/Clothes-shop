import React, { FC } from 'react';
import { languages } from './languageList';

export interface LanguageSelectProps {
  buttonClassName: (language: string) => string;
  languageChange: (language: string) => () => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({
  buttonClassName,
  languageChange,
}) => {
  return (
    <>
      {languages.map(language => (
        <button
          key={language.value}
          className={buttonClassName(language.value)}
          onClick={languageChange(language.value)}
        >
          {language.label}
        </button>
      ))}
    </>
  );
};

export default LanguageSelect;
