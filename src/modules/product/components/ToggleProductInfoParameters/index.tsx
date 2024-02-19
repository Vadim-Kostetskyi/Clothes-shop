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
              parameters={Object.values(Color)}
              active={active as Color}
              handleClick={handleClick}
            />
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
