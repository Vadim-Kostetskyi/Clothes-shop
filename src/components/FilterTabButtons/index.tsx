import React, { FC, useCallback, useState } from 'react';
import { BodySearchProducts, Subcategory } from 'redux/types';
import styles from './index.module.scss';
import { getButtons, ButtonsProps } from './data';
import { useTranslation } from 'react-i18next';

interface FilterTabButtons {
  handleClick: (body: BodySearchProducts) => void;
}

const FilterTabButtons: FC<FilterTabButtons> = ({ handleClick }) => {
  const { t } = useTranslation();

  const buttons = getButtons(t);
  const [active, setActive] = useState<ButtonsProps | string>(buttons[0].value);

  const onClick = useCallback((name: string, body: BodySearchProducts) => {
    handleClick(body);
    setActive(name);
  }, []);

  return (
    <div className={styles.buttonsWrapper}>
      {buttons?.length &&
        buttons.map(({ name, value }) => {
          const body =
            value === 'CLOTHING'
              ? {
                  category: value as string,
                }
              : {
                  subcategory: value as Subcategory,
                };
          return (
            <button
              key={value}
              value={value}
              className={value === active ? styles.active : styles.button}
              onClick={() => {
                onClick(name, body);
              }}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
};

export default FilterTabButtons;
