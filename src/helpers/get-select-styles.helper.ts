import { CSSProperties } from 'react';
import { StylesConfig } from 'react-select';
import { SelectOptionProps } from 'modules/core/components/CountrySelect';

type IsMulti = false;

const getSelectStyle = (
  customControlStyles: CSSProperties,
  customMenuListStyles: CSSProperties,
): StylesConfig<SelectOptionProps, IsMulti> => ({
  control: provided => ({
    ...provided,
    ...customControlStyles,
  }),
  menuList: provided => ({
    ...provided,
    ...customMenuListStyles,
  }),
});

export { getSelectStyle };
