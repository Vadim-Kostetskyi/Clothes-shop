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
import { Color, Size, Price, FilterItems, clothesColors } from 'types/types';
import SizeSelector from '../SizeSelector';
import { BodyFilterProducts } from 'redux/types';
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
  const [activeButton, setActiveButton] = useState<string>();

  useEffect(() => {
    if (isResetting) {
      setSize([]);
      setColor([]);
      setSelectedColor([]);
      setSelectedSize([]);
      setTab('');
      setPriceRange([Price.min, Price.max]);
    }
  }, [isResetting]);

  const { t } = useTranslation();

  const configureFilterParameters = useCallback((sortingType: FilterItems) => {
    const body = {
      colours: [Color.Black.toUpperCase(), Color.Beige.toUpperCase()],
      sizes: [Size.L, Size.M, Size.S, Size.XL, Size.XS],
      priceRange: {
        min: Price.min,
        max: Price.max,
      },
    };
    sortProducts(body, sortingType);
  }, []);

  const handleClickTabButtons = useCallback((name: string) => {
    switch (name) {
      case FilterItems.NewNow:
        handleSetNewProducts();
        break;
      case FilterItems.PriceAsc:
        configureFilterParameters(FilterItems.PriceAscRequest);
        setTab(FilterItems.PriceAscRequest);
        break;
      case FilterItems.PriceDesc:
        configureFilterParameters(FilterItems.PriceDescRequest);
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
    if (!isResetting) {
      setPriceRange([Price.min, Price.max]);
      return;
    }
    setPriceRange([min, max]);
  }, []);

  const sortByButton = useMemo(
    () => ({
      title: t('sortBy'),
      list: (
        <FilterTabButtons
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          handleClickFilter={handleClickTabButtons}
          isFilter={true}
        />
      ),
    }),
    [activeButton],
  );

  const accordionButtons = useMemo(
    () => [
      {
        title: t('color'),
        list: (
          <ColorSelection
            colors={clothesColors}
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
            parameters={Object.values(Size)}
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
    [selectedColor, selectedSize, isResetting],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSort}>
        <Accordion
          title={sortByButton.title}
          list={sortByButton.list}
          titleStyles={styles.title}
          listStyle={styles.sortList}
        />
      </div>
      {accordionButtons.map(({ title, list }) => (
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
