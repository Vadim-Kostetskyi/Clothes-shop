import React, { FC } from 'react';
import { languages } from './languageList';
import { Language } from 'types';

export interface LanguageSelectProps {
  getButtonClassName: (language: string) => string;
  handleLanguageChange: (language: Language) => () => void;
}

const LanguageSelect: FC<LanguageSelectProps> = ({
  getButtonClassName,
  handleLanguageChange,
}) => (
  <div>
    {languages.map(({ value, label }) => (
      <button
        key={value}
        className={getButtonClassName(value)}
        onClick={handleLanguageChange(value)}
      >
        {label}
      </button>
    ))}
  </div>
);

export default LanguageSelect;
