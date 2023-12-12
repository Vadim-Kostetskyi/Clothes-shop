import React from 'react';
import styles from './index.module.scss';

type ButtonsProps = {
  name: string;
  value: string;
};

const buttons: ButtonsProps[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Jackets',
    value: 'jackets',
  },
  {
    name: 'Field jackets',
    value: 'field jackets',
  },
  {
    name: 'Overshirts',
    value: 'overshirts',
  },
  {
    name: 'Quilted coats',
    value: 'quilted coats',
  },
];

const FilteredByButton = () => {
  return (
    <>
      {buttons &&
        buttons.map(({ name, value }) => (
          <>
            <button key={value} value={value} className={styles.button}>
              {name}
            </button>
          </>
        ))}
    </>
  );
};

export default FilteredByButton;
