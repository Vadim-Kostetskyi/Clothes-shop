import React, { FC } from 'react';
import { Color } from 'types/types';
import styles from './index.module.scss';

export interface ColorProps {
  label: Color;
  content: string;
}

interface ColorSelectionProps {
  colors: ColorProps[];
  chosenColor: Color;
  changeColor: (color: Color) => () => void;
}

const ColorSelection: FC<ColorSelectionProps> = ({
  colors,
  chosenColor,
  changeColor,
}) => (
  <>
    {colors.map(({ label, content }) => (
      <button
        key={label}
        className={chosenColor === label ? styles.chosenColor : styles.color}
        onClick={changeColor(label)}
      >
        <img className={styles.image} src={content} alt={label} />
      </button>
    ))}
  </>
);

export default ColorSelection;
