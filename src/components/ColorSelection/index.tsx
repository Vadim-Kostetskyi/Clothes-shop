import React, { FC, useCallback } from 'react';
import { Color } from 'types/types';
import styles from './index.module.scss';

export interface ColorProps {
  label: Color;
  content: string;
}

interface ColorSelectionProps {
  colors: ColorProps[];
  chosenColor: Color;
  colorStyles?: string;
  chosenColorStyles?: string;
  changeColor: (color: Color) => void;
}

const ColorSelection: FC<ColorSelectionProps> = ({
  colors,
  chosenColor,
  changeColor,
}) => {
  const handleColorChange = useCallback(
    (color: Color) => () => {
      changeColor(color);
    },
    [changeColor],
  );
  return (
    <>
      {colors.map(({ label, content }) => (
        <button
          key={label}
          className={chosenColor === label ? styles.chosenColor : styles.color}
          onClick={handleColorChange(label)}
        >
          <img className={styles.image} src={content} alt={label} />
        </button>
      ))}
    </>
  );
};
export default ColorSelection;
