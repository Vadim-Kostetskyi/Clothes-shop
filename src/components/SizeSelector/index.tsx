import React, { FC } from 'react';
import { Size } from 'types';
import styles from './index.module.scss';

export interface SizeSelectorProps {
  parameters: string[];
  sizes?: Size[];
  active: string | null;
  handleClick: (param: string, value: string) => void;
}

const SizeSelector: FC<SizeSelectorProps> = ({
  parameters,
  sizes,
  active,
  handleClick,
}) => {
  return (
    <>
      {parameters.map((parameter, index) => {
        return (
          <button
            key={index}
            className={`${styles.parameterBtn} ${
              active === parameter ? styles.active : ''
            }`}
            onClick={() => handleClick('size', parameter)}
            disabled={sizes && !sizes.includes(parameter as Size)}
          >
            {parameter}
          </button>
        );
      })}
    </>
  );
};

export default SizeSelector;
