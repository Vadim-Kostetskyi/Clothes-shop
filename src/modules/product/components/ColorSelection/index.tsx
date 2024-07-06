import React, { FC, useCallback } from 'react';
import { Color } from 'types/types';
import styles from './index.module.scss';
import Check from 'assets/svgs/Check';

interface ColorSelectionProps {
  colors: Record<Color, string>;
  chosenColor: Color | Color[];
  changeColor: (color: Color) => void;
  multiChoice?: boolean;
}

const ColorSelection: FC<ColorSelectionProps> = ({
  colors,
  chosenColor,
  changeColor,
  multiChoice,
}): JSX.Element => {
  const setButtonClassName = useCallback(
    (label: Color | string) => {
      if (multiChoice) {
        return styles.multiColor;
      }
      return chosenColor === label ? styles.chosenColor : styles.color;
    },
    [multiChoice, chosenColor],
  );

  return (
    <>
      {Object.entries(colors).map(([label, content]) => (
        <button
          key={label}
          className={setButtonClassName(label)}
          onClick={() => changeColor(label as Color)}
        >
          {multiChoice ? (
            <div className={styles[label]}>
              <Check
                className={
                  chosenColor.includes(label as Color)
                    ? styles.check
                    : styles.hide
                }
              />
            </div>
          ) : (
            <img className={styles.image} src={content} alt={label} />
          )}
        </button>
      ))}
    </>
  );
};

export default ColorSelection;
