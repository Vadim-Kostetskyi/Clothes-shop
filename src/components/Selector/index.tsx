import React, { FC, CSSProperties } from 'react';
import Select, { SingleValue, ActionMeta } from 'react-select';
import styles from './index.module.scss';
import { CssProperties } from 'utils/constants';
import { getSelectStyle } from 'libs/helpers/helpers';

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
    cursor: CssProperties.CURSOR_POINTER,
    borderColor: CssProperties.BORDER_COLOR,
    height: CssProperties.HEIGHT,
  };

  const customMenuListStyles: CSSProperties = {
    maxHeight: isMobile ? '220px' : '194px',
  };

  const selectStyle = getSelectStyle(customControlStyles, customMenuListStyles);

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
