import React, { FC, useState } from 'react';
import { BodySearchProducts, Subcategory } from 'redux/types';
import styles from './index.module.scss';

type ButtonsProps = {
  name: string;
  value: Subcategory | string;
};

const buttons: ButtonsProps[] = [
  {
    name: 'All',
    value: 'CLOTHING',
  },
  {
    name: 'Jackets',
    value: Subcategory.JACKETS,
  },
  {
    name: 'Field jackets',
    value: Subcategory.CARDIGANS,
  },
  {
    name: 'Overshirts',
    value: Subcategory.OVERSHIRTS,
  },
  {
    name: 'Quilted coats',
    value: Subcategory.QUILTED,
  },
];
interface FilteredByButton {
  handleClick: (body: BodySearchProducts) => void;
}

const FilteringProducts: FC<FilteredByButton> = ({ handleClick }) => {
  const [chosen, setChosen] = useState<ButtonsProps | string>(buttons[0].value);

  return (
    <div className={styles.buttonsWrapper}>
      {buttons &&
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
              className={value === chosen ? styles.active : styles.button}
              onClick={() => {
                handleClick(body);
                setChosen(name);
              }}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
};

export default FilteringProducts;
