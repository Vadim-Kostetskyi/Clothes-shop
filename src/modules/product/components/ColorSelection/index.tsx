import React, { FC } from 'react';
import { Color } from 'types/types';
import styles from './index.module.scss';

interface ColorSelectionProps {
  colors: Record<Color, string>;
  chosenColor: Color;
  changeColor: (color: Color) => () => void;
}

const ColorSelection: FC<ColorSelectionProps> = ({
  colors,
  chosenColor,
  changeColor,
}): JSX.Element => (
  <>
    {Object.entries(colors).map(([label, content]) => (
      <button
        key={label}
        className={chosenColor === label ? styles.chosenColor : styles.color}
        onClick={changeColor(label as Color)}
      >
        <img className={styles.image} src={content} alt={label} />
      </button>
    ))}
  </>
);

export default ColorSelection;
