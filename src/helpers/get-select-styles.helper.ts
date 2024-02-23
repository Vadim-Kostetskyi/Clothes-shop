import { CSSProperties } from 'react';
import { StylesConfig } from 'react-select';
import { SelectOption } from 'components/Selector';

type IsMulti = false;

const getSelectStyle = (
  customControlStyles: CSSProperties,
  customMenuListStyles: CSSProperties,
): StylesConfig<SelectOption, IsMulti> => ({
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
