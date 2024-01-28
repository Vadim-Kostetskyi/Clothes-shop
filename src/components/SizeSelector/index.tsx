import React, { FC, useCallback } from 'react';
import { clsx } from 'clsx';
import { Size } from 'types';
import styles from './index.module.scss';

export interface SizeSelectorProps {
  parameters: string[];
  sizes?: Size[];
  active?: string;
  handleClick: (param: string, size: Size) => void;
  isProductDetails?: boolean;
}

const SizeSelector: FC<SizeSelectorProps> = ({
  parameters,
  sizes,
  active,
  handleClick,
  isProductDetails,
}) => {
  const isActiveStyles = isProductDetails
    ? styles.activeProductDetails
    : styles.active;

  const combinedClassName = useCallback(
    (parameter: string) =>
      clsx(
        isProductDetails
          ? styles.productDetailsParameterBtn
          : styles.parameterBtn,
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
