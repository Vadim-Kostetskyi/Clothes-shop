import React, { FC, useCallback, useState } from 'react';
import { BodySearchProducts } from 'redux/types';
import { getButtons, ButtonsProps } from './data';
import { useTranslation } from 'react-i18next';
import { Category, Subcategory } from 'types';
import styles from './index.module.scss';

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
            value === Category.CLOTHING
              ? {
                  category: value,
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
