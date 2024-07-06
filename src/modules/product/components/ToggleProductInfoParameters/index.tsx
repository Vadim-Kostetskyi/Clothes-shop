import React, { FC, useCallback, useMemo } from 'react';
import { getValidClassNames } from 'helpers';
import { Color, Size } from 'types/types';
import Cross from 'assets/svgs/Cross';
import SizeSelector from 'modules/product/components/SizeSelector';
import ColourSelector from '../ColorSelector';
import styles from './index.module.scss';

interface ToggleProductInfoParameters {
  text: string;
  open: boolean[];
  parameters: Color[] | Size[];
  index: number;
  sizes?: Size[];
  active?: Size | Color;
  productInfo: string;
  toggle: (element: number) => void;
  handleClick: (size: Size | Color) => void;
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
}): JSX.Element => {
  const parametersClassName = getValidClassNames(styles.parametersBtn, {
    [styles.hide]: open[index],
  });

  const parameterBoxClassName = useMemo(
    () =>
      getValidClassNames(styles.parameterBox, { [styles.hide]: !open[index] }),
    [open[index]],
  );

  const handleOpenCloseParameters = useCallback(() => toggle(index), []);

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
            <ColourSelector
              parameters={parameters as Color[]}
              active={active as Color}
              handleClick={handleClick}
            />
          ) : (
            <SizeSelector
              parameters={parameters as Size[]}
              sizes={sizes}
              active={active as Size}
              handleClick={handleClick as (size: Size) => void}
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
