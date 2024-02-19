import React from 'react';
import { getValidClassNames } from 'helpers';
import { Color } from 'types/types';
import styles from './index.module.scss';

interface ColorSelectorProps {
  parameters: Color[];
  active: Color;
  handleClick: (parameter: string, value: Color) => void;
  className?: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  parameters,
  active,
  handleClick,
  className,
}) => {
  const getCombinedClass = (parameter: Color) =>
    getValidClassNames(styles.parameterColorBtn, {
      [styles.active]: active === parameter,
    });

  const renderColorButton = (parameter: Color, index: number) => (
    <button
      key={parameter + index}
      className={getCombinedClass(parameter)}
      onClick={() => handleClick('color', parameter)}
    >
      <span
        className={
          parameter === Color.Black ? styles.blackColor : styles.whiteColor
        }
      ></span>
    </button>
  );

  return <div className={className}>{parameters.map(renderColorButton)}</div>;
};

export default ColorSelector;
