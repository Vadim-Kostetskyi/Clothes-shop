import React, { FC } from 'react';
import Select, { SingleValue, ActionMeta } from 'react-select';
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
}

const Selector: FC<CountrySelectorProps> = ({ options, value, onChange }) => (
  <div className={styles.wrapper}>
    <Select options={options} value={value} onChange={onChange} />
  </div>
);

export default Selector;
