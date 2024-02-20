import React, { FC, useCallback } from 'react';
import { Size } from 'types/types';
import { getValidClassNames } from 'helpers';
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
}): JSX.Element => {
  const isActiveStyles = isProductDetails
    ? styles.activeProductDetails
    : styles.active;

  const combinedClassName = useCallback(
    (parameter: string) =>
      getValidClassNames(
        isProductDetails
          ? styles.productDetailsParameterBtn
          : styles.parameterBtn,
        { [isActiveStyles]: active === parameter },
      ),
    [active, isActiveStyles, isProductDetails],
  );

  return (
    <div className={styles.btnBlock}>
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
    </div>
  );
};

export default SizeSelector;
