import React, { FC } from 'react';
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

const FilteredByButton: FC<FilteredByButton> = ({ handleClick }) => {
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
              className={styles.button}
              onClick={() => handleClick(body)}
            >
              {name}
            </button>
          );
        })}
    </div>
  );
};

export default FilteredByButton;
