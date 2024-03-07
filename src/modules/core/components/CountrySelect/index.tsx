import React, { FC } from 'react';
import Select, { SingleValue, ActionMeta } from 'react-select';
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

const CountrySelect: FC<CountrySelectProps> = props => (
  // TODO: fix this global problem
  <div className={styles.wrapper}>
    <Select isMobile="false" {...props} />
  </div>
);

export default CountrySelect;
