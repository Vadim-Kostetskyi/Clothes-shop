import React, { FC, CSSProperties } from 'react';
import Select, { SingleValue, ActionMeta, StylesConfig } from 'react-select';
import styles from './index.module.scss';

export interface SelectOption {
  label: string;
  value: string;
}

export interface CountrySelectorProps {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (
    newValue: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  isMobile?: boolean;
}

const Selector: FC<CountrySelectorProps> = ({
  options,
  value,
  onChange,
  isMobile,
}) => {
  const customControlStyles: CSSProperties = {
    cursor: 'pointer',
    borderColor: '#959595',
  };

  const customMenuListStyles: CSSProperties = {
    maxHeight: isMobile ? '225px' : '300px',
  };

  type IsMulti = false;

  const selectStyle: StylesConfig<SelectOption, IsMulti> = {
    control: provided => ({
      ...provided,
      ...customControlStyles,
    }),
    menuList: provided => ({
      ...provided,
      ...customMenuListStyles,
    }),
  };

  return (
    <div className={styles.wrapper}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        styles={selectStyle}
      />
    </div>
  );
};

export default Selector;
