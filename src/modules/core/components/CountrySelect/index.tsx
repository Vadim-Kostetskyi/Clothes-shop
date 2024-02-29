import React, { FC, CSSProperties } from 'react';
import Select, { SingleValue, ActionMeta } from 'react-select';
import { CssProperties } from 'utils/constants';
import { getSelectStyle } from 'helpers/helpers';
import styles from './index.module.scss';

export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface CountrySelectProps {
  options: SelectOptionProps[];
  value?: SelectOptionProps;
  isMobile?: boolean;
  onChange: (
    newValue: SingleValue<SelectOptionProps>,
    actionMeta: ActionMeta<SelectOptionProps>,
  ) => void;
}

const CountrySelect: FC<CountrySelectProps> = props => {
  const customControlStyles: CSSProperties = {
    cursor: CssProperties.CURSOR_POINTER,
    borderColor: CssProperties.BORDER_COLOR,
    height: CssProperties.HEIGHT,
  };

  const customMenuListStyles: CSSProperties = {
    maxHeight: props.isMobile ? '220px' : '194px',
  };

  const selectStyle = getSelectStyle(customControlStyles, customMenuListStyles);

  // TODO: fix this global problem
  return (
    <div className={styles.wrapper}>
      <Select {...props} styles={selectStyle} />
    </div>
  );
};

export default CountrySelect;
