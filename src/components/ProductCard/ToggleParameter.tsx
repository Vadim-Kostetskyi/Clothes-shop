import React, { FC } from 'react';
import Cross from 'assets/svgs/cross';
import styles from './index.module.scss';

interface ToggleParameter {
  text: string;
  open: boolean[];
  parameters: string[];
  index: number;
  sizes?: string[];
  active: string | null;
  toggle: (element: number) => void;
  handleClick: (param: string, value: string) => void;
}

const ToggleParameter: FC<ToggleParameter> = ({
  open,
  parameters,
  toggle,
  text,
  handleClick,
  active,
  index,
  sizes,
}) => {
  const param = index ? 'size' : 'color';

  return (
    <div className={styles.toggleParameter}>
      <div>
        <button
          onClick={() => toggle(index)}
          className={`${styles.parameters__parameter} ${
            open[index] ? styles.hide : ''
          }`}
        >
          {text}
        </button>
      </div>
      <div
        className={`${styles.parameters__parameterBox} ${
          open[index] ? '' : styles.hide
        }`}
      >
        <div className={styles.parameters__parameter}>
          {parameters.map((parameter, index) => {
            if (param === 'color') {
              return (
                <button
                  key={index}
                  className={`${styles.parameters__btn} ${
                    styles.parameters__colorBtn
                  }
                  ${active === parameter ? styles.active : ''}`}
                  onClick={() => handleClick(param, parameter)}
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
                className={`${styles.parameters__btn} ${
                  active === parameter ? styles.active : ''
                }`}
                onClick={() => handleClick(param, parameter)}
                disabled={sizes && !sizes.includes(parameter)}
              >
                {parameter}
              </button>
            );
          })}
        </div>
        <button className={styles.cross__btn} onClick={() => toggle(index)}>
          <Cross className={styles.cross__img} />
        </button>
      </div>
    </div>
  );
};

export default ToggleParameter;
