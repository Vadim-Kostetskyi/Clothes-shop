import React, { FC } from 'react';
import Cross from 'assets/svgs/Cross';
import { Size } from 'types';
import styles from './insex.module.scss';

interface ToggleProductInfoParameters {
  text: string;
  open: boolean[];
  parameters: string[];
  index: number;
  sizes?: Size[];
  active: string | null;
  productInfo: string;
  toggle: (element: number) => void;
  handleClick: (param: string, value: string) => void;
}

const ToggleProductInfoParameters: FC<ToggleProductInfoParameters> = ({
  open,
  parameters,
  toggle,
  text,
  handleClick,
  active,
  index,
  sizes,
  productInfo,
}) => (
  <div className={styles.toggleParameter}>
    <div>
      <button
        onClick={() => toggle(index)}
        className={`${styles.parametersBtn} ${open[index] ? styles.hide : ''}`}
      >
        {text}
      </button>
    </div>
    <div className={`${styles.parameterBox} ${open[index] ? '' : styles.hide}`}>
      <div className={styles.parametersBtn}>
        {parameters.map((parameter, index) => {
          if (productInfo === 'color') {
            return (
              <button
                key={index}
                className={`${styles.parameterBtn} ${styles.parameterColorBtn}
                  ${active === parameter ? styles.active : ''}`}
                onClick={() => handleClick(productInfo, parameter)}
              >
                <div
                  className={`${
                    parameter === 'black'
                      ? styles.blackColor
                      : styles.whiteColor
                  }`}
                ></div>
              </button>
            );
          }
          return (
            <button
              key={index}
              className={`${styles.parameterBtn} ${
                active === parameter ? styles.active : ''
              }`}
              onClick={() => handleClick(productInfo, parameter)}
              disabled={sizes && !sizes.includes(parameter as Size)}
            >
              {parameter}
            </button>
          );
        })}
      </div>
      <button className={styles.crossBtn} onClick={() => toggle(index)}>
        <Cross className={styles.crossImg} />
      </button>
    </div>
  </div>
);

export default ToggleProductInfoParameters;
