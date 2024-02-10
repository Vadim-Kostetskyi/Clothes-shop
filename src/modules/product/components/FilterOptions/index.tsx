import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from 'modules/core/components/Accordion';
import PriceSelector from '../PriceSelector';
import FilterTabButtons from '../FilterTabButtons';
import ColorSelection from '../ColorSelection';
import { Color, Size } from 'types/types';
import SizeSelector from '../SizeSelector';
import { BodyFilterProducts } from 'redux/types';
import { FilterItems } from 'types/types';
import styles from './index.module.scss';

interface FilterOptionsProps {
  setSize: Dispatch<SetStateAction<Size[]>>;
  setColor: Dispatch<SetStateAction<Color[]>>;
  setTab: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<number[]>>;
  sortProducts: (body: BodyFilterProducts, sortBy: string) => void;
  handleSetNewProducts: () => void;
  resetting: boolean;
}

const FilterOptions: FC<FilterOptionsProps> = ({
  setSize,
  setColor,
  setTab,
  setPrice,
  sortProducts,
  handleSetNewProducts,
  resetting,
}) => {
  const [selectedSize, setSelectedSize] = useState<Size[]>([]);
  const [selectedColor, setSelectedColor] = useState<Color[]>([]);

  useEffect(() => {
    if (resetting) {
      setSelectedColor([]);
      setSelectedSize([]);
    }
  }, [resetting]);

  const { t } = useTranslation();

  const handleClickTabButtons = useCallback((name: string) => {
    const body = {
      colours: [Color.Black.toUpperCase(), Color.Beige.toUpperCase()],
      sizes: [Size.L, Size.M, Size.S, Size.XL, Size.XS],
      priceRange: {
        min: 0,
        max: 10000,
      },
    };

    switch (name) {
      case FilterItems.NewNow:
        handleSetNewProducts();
        break;
      case FilterItems.PriceLowToHigh:
        sortProducts(body, 'asc');
        setTab('asc');
        break;
      case FilterItems.PriceHighToLow:
        sortProducts(body, 'desc');
        setTab('desc');
        break;
      default:
        break;
    }
  }, []);

  const handleClick = useCallback((value: Color | Size) => {
    const setParameter = <T extends Size | Color>(
      set: (colors: T[] | ((prev: T[]) => T[])) => void,
      value: T,
    ) => {
      set((val: T[]) =>
        val?.includes(value)
          ? val.filter(item => item !== value)
          : [...val, value],
      );
    };

    if (value in Color) {
      setParameter(setSelectedColor, value as Color);
      setParameter(setColor, value as Color);
    } else if (value in Size) {
      setParameter(setSelectedSize, value as Size);
      setParameter(setSize, value as Size);
    }
  }, []);

  const handleChangePrice = useCallback((min: number, max: number) => {
    if (resetting) {
      setPrice(() => [0, 1000]);
    }
    setPrice(() => [min, max]);
  }, []);

  const sortBy = {
    title: t('sortBy'),
    list: (
      <FilterTabButtons
        handleClickFiler={handleClickTabButtons}
        filter={true}
      />
    ),
  };
  const items = [
    {
      title: t('color'),
      list: (
        <ColorSelection
          changeColor={handleClick}
          chosenColor={selectedColor}
          multiChoice={true}
        />
      ),
    },
    {
      title: t('size'),
      list: (
        <SizeSelector
          handleClick={handleClick}
          active={selectedSize}
          isFilter={true}
        />
      ),
    },
    {
      title: t('price'),
      list: (
        <PriceSelector
          onChange={handleChangePrice}
          min={0}
          max={1000}
          resetting={resetting}
        />
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSort}>
        <Accordion
          title={sortBy.title}
          list={sortBy.list}
          titleStyles={styles.title}
          listStyle={styles.sortList}
        />
      </div>
      {items.map(({ title, list }) => (
        <div className={styles.wrapperList} key={title}>
          <Accordion
            title={title}
            list={list}
            listStyle={styles.list}
            titleStyles={styles.title}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
