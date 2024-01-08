import React, { FC, useCallback } from 'react';
import { clsx } from 'clsx';
import { Size } from 'types';
import styles from './index.module.scss';

export interface SizeSelectorProps {
  parameters: string[];
  sizes?: Size[];
  active?: string;
  handleClick: (param: string, size: Size) => void;
  isProductOrder?: boolean;
}

const SizeSelector: FC<SizeSelectorProps> = ({
  parameters,
  sizes,
  active,
  handleClick,
  isProductOrder,
}) => {
  const isActiveStyles = isProductOrder
    ? styles.activeProductOrder
    : styles.active;

  const combinedClassName = useCallback(
    (parameter: string) =>
      clsx(
        isProductOrder ? styles.productOrderParameterBtn : styles.parameterBtn,
        active === parameter ? isActiveStyles : '',
      ),
    [active],
  );

  return (
    <>
      {parameters.map((parameter, index) => (
        <button
          key={index}
          className={combinedClassName(parameter)}
          onClick={() => handleClick('size', parameter as Size)}
          disabled={sizes && !sizes.includes(parameter as Size)}
        >
          <p className={styles.text}>{parameter}</p>
        </button>
      ))}
    </>
  );
};

export default SizeSelector;
