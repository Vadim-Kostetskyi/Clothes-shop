import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from 'modules/core/components/Accordion';
import PriceSelector from '../PriceSelector';
import FilterTabButtons from '../FilterTabButtons';
import ColorSelection from '../ColorSelection';
import { Color, Size, Price } from 'types/types';
import SizeSelector from '../SizeSelector';
import { BodyFilterProducts } from 'redux/types';
import { FilterItems } from 'types/types';
import styles from './index.module.scss';

interface FilterOptionsProps {
  setSize: Dispatch<SetStateAction<Size[]>>;
  setColor: Dispatch<SetStateAction<Color[]>>;
  setTab: Dispatch<SetStateAction<string>>;
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  sortProducts: (body: BodyFilterProducts, sortBy: string) => void;
  handleSetNewProducts: () => void;
  isResetting: boolean;
}

const FilterOptions: FC<FilterOptionsProps> = ({
  setSize,
  setColor,
  setTab,
  setPriceRange,
  sortProducts,
  handleSetNewProducts,
  isResetting,
}) => {
  const [selectedSize, setSelectedSize] = useState<Size[]>([]);
  const [selectedColor, setSelectedColor] = useState<Color[]>([]);

  useEffect(() => {
    if (isResetting) {
      console.log(4545);

      setSelectedColor([]);
      setSelectedSize([]);
      setTab('');
      setPriceRange([Price.min, Price.max]);
    }
  }, [isResetting]);

  const { t } = useTranslation();

  const handleClickTabButtons = useCallback((name: string) => {
    const body = {
      colours: [Color.Black.toUpperCase(), Color.Beige.toUpperCase()],
      sizes: [Size.L, Size.M, Size.S, Size.XL, Size.XS],
      priceRange: {
        min: Price.min,
        max: Price.max,
      },
    };

    switch (name) {
      case FilterItems.NewNow:
        handleSetNewProducts();
        break;
      case FilterItems.PriceAsc:
        sortProducts(body, FilterItems.PriceAscRequest);
        setTab(FilterItems.PriceAscRequest);
        break;
      case FilterItems.PriceDesc:
        sortProducts(body, FilterItems.PriceDescRequest);
        setTab(FilterItems.PriceDescRequest);
        break;
      default:
        break;
    }
  }, []);

  const handleClick = useCallback((value: Color | Size) => {
    if (value in Color) {
      setSelectedColor((val: Color[]) =>
        val.includes(value as Color)
          ? val.filter(item => item !== (value as Color))
          : [...val, value as Color],
      );
      setColor((val: Color[]) =>
        val.includes(value as Color)
          ? val.filter(item => item !== (value as Color))
          : [...val, value as Color],
      );
    } else if (value in Size) {
      setSelectedSize((val: Size[]) =>
        val.includes(value as Size)
          ? val.filter(item => item !== value)
          : [...val, value as Size],
      );
      setSize((val: Size[]) =>
        val.includes(value as Size)
          ? val.filter(item => item !== value)
          : [...val, value as Size],
      );
    }
  }, []);

  const handleChangePrice = useCallback((min: number, max: number) => {
    if (isResetting) {
      setPriceRange([Price.min, Price.max]);
    }
    setPriceRange([min, max]);
  }, []);

  const sortBy = useMemo(
    () => ({
      title: t('sortBy'),
      list: (
        <FilterTabButtons
          handleClickFilter={handleClickTabButtons}
          isFilter={true}
        />
      ),
    }),
    [],
  );

  const items = useMemo(
    () => [
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
            shouldReset={isResetting}
          />
        ),
      },
    ],
    [selectedColor, selectedSize],
  );

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
