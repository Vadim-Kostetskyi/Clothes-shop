import React, { FC, useMemo } from 'react';
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
  active?: string;
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
  const parametersClassName = clsx(styles.parametersBtn, {
    [styles.hide]: open[index],
  });

  const getCombinedClass = (parameter: string) =>
    clsx(styles.parameterColorBtn, { [styles.active]: active === parameter });

  const parameterBoxClassName = useMemo(
    () => clsx(styles.parameterBox, { [styles.hide]: !open[index] }),
    [open[index]],
  );

  const handleOpenCloseParameters = () => toggle(index);

  return (
    <div className={styles.toggleParameter}>
      <button
        onClick={handleOpenCloseParameters}
        className={parametersClassName}
      >
        {text}
      </button>
      <div className={parameterBoxClassName}>
        <div className={styles.parametersBtn}>
          {productInfo === 'color' ? (
            parameters.map((parameter, index) => (
              <button
                key={index}
                className={getCombinedClass(parameter)}
                onClick={() => handleClick(productInfo, parameter)}
              >
                <div
                  className={
                    parameter === 'black'
                      ? styles.blackColor
                      : styles.whiteColor
                  }
                ></div>
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
        <button className={styles.crossBtn} onClick={handleOpenCloseParameters}>
          <Cross className={styles.crossImg} />
        </button>
      </div>
    </div>
  );
};

export default ToggleProductInfoParameters;
