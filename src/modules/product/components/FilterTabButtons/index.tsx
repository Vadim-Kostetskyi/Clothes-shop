import React, { FC, useCallback, useMemo } from 'react';
import { BodySearchProducts } from 'redux/types';
import { getButtons, getFilterButtons } from './data';
import { useTranslation } from 'react-i18next';
import { Category, Subcategory } from 'types/types';
import styles from './index.module.scss';
import { FIRST_PAGE } from 'utils/constants';

interface FilterTabButtons {
  activeButton?: string;
  handleClick?: (body: BodySearchProducts) => void;
  setActiveButton?: (value: string) => void;
  setActivePage?: (page: number) => void;
  isFilter?: boolean;
  handleClickFilter?: (name: string) => void;
}

const FilterTabButtons: FC<FilterTabButtons> = ({
  activeButton,
  handleClick,
  isFilter,
  setActivePage,
  setActiveButton,
  handleClickFilter,
}) => {
  const { t } = useTranslation();

  const buttons = useMemo(
    () => (isFilter ? getFilterButtons(t) : getButtons(t)),
    [],
  );

  const onClick = useCallback(
    (value: string, body: BodySearchProducts) => () => {
      handleClick && handleClick(body);
      handleClickFilter && handleClickFilter(value);
      setActivePage && setActivePage(FIRST_PAGE);
      setActiveButton && setActiveButton(value);
    },
    [],
  );

  return (
    <div
      className={isFilter ? styles.buttonsFilterWrapper : styles.buttonsWrapper}
    >
      {buttons?.map(({ name, value }) => {
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
            className={value === activeButton ? styles.active : styles.button}
            onClick={onClick(value, body)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabButtons;
