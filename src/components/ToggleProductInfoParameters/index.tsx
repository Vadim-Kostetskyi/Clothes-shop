import React, { FC } from 'react';
import Cross from 'assets/svgs/Cross';
import { Size } from 'types';
import SizeSelector from 'components/SizeSelector';
import styles from './index.module.scss';
import { clsx } from 'clsx';

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
}) => {
  const parametersClassName = clsx(
    () => styles.parametersBtn,
    open[index] ? styles.hide : '',
  );

  const combinedClassName = (parameter: string) =>
    clsx(styles.parameterColorBtn, active === parameter ? styles.active : '');

  const colorClassName = (parameter: string) =>
    clsx(parameter === 'black' ? styles.blackColor : styles.whiteColor);

  return (
    <div className={styles.toggleParameter}>
      <div>
        <button onClick={() => toggle(index)} className={parametersClassName}>
          {text}
        </button>
      </div>
      <div
        className={`${styles.parameterBox} ${open[index] ? '' : styles.hide}`}
      >
        <div className={styles.parametersBtn}>
          {productInfo === 'color' ? (
            parameters.map((parameter, index) => (
              <button
                key={index}
                className={combinedClassName(parameter)}
                onClick={() => handleClick(productInfo, parameter)}
              >
                <div className={colorClassName(parameter)}></div>
              </button>
            ))
          ) : (
            <SizeSelector
              parameters={parameters}
              sizes={sizes}
              active={active}
              handleClick={handleClick}
            />
          )}
        </div>
        <button className={styles.crossBtn} onClick={() => toggle(index)}>
          <Cross className={styles.crossImg} />
        </button>
      </div>
    </div>
  );
};

export default ToggleProductInfoParameters;
