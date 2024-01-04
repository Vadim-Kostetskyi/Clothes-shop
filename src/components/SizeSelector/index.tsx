import React, { FC } from 'react';
import { clsx } from 'clsx';
import { Size } from 'types';
import styles from './index.module.scss';

export interface SizeSelectorProps {
  parameters: string[];
  sizes?: Size[];
  active: string | null;
  buttonStyles?: string;
  activeStyles?: string;
  handleClick: (param: string, value: string) => void;
}

const SizeSelector: FC<SizeSelectorProps> = ({
  parameters,
  sizes,
  active,
  buttonStyles,
  activeStyles,
  handleClick,
}) => {
  const isActiveStyles = activeStyles || styles.active;

  const combinedClassName = (parameter: string) =>
    clsx(
      buttonStyles || styles.parameterBtn,
      active === parameter ? isActiveStyles : '',
    );

  return (
    <>
      {parameters.map((parameter, index) => (
        <button
          key={index}
          className={combinedClassName(parameter)}
          onClick={() => handleClick('size', parameter)}
          disabled={sizes && !sizes.includes(parameter as Size)}
        >
          <p className={styles.text}>{parameter}</p>
        </button>
      ))}
    </>
  );
};

export default SizeSelector;
