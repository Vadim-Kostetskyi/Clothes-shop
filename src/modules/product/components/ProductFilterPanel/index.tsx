import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FilterOptions from '../FilterOptions';
import Cross from 'assets/svgs/Cross';
import { Color, Size } from 'types/types';
import { BodyFilterProducts } from 'redux/types';
import styles from './index.module.scss';

interface ProductFilterPanelProps {
  close: () => void;
  handleClick: (body: BodyFilterProducts, sortBy: string) => void;
  handleSetNewProducts: () => void;
}

const ProductFilterPanel: FC<ProductFilterPanelProps> = ({
  close,
  handleClick,
  handleSetNewProducts,
}) => {
  const [size, setSize] = useState<Size[]>([]);
  const [color, setColor] = useState<Color[]>([]);
  const [tab, setTab] = useState<string>('asc');
  const [price, setPrice] = useState<number[]>([]);
  const [isClearActive, setIsClearActive] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (
      size.length > 0 ||
      color.length > 0 ||
      price[0] > 0 ||
      price[1] < 1000
    ) {
      setIsClearActive(false);
    }
  }, [size, color, price]);

  useEffect(() => {
    if (isClearActive) {
      setColor([]);
      setSize([]);
      setTab('');
      setPrice([0, 1000]);
    }
  }, [isClearActive]);

  const requestColor = color.map(col => col.toUpperCase());

  const handleFilter = () => {
    handleClick(
      {
        colours: requestColor,
        sizes: size,
        priceRange: {
          min: price[0],
          max: price[1],
        },
      },
      tab,
    );
  };

  const props = {
    setSize,
    setColor,
    setTab,
    setPrice,
    sortProducts: handleClick,
    handleSetNewProducts,
    resetting: isClearActive,
  };

  const handleClearFilter = () => {
    setIsClearActive(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{t('productFilter.filter')}</p>
        <button className={styles.crossBtn} onClick={close}>
          <Cross className={styles.cross} />
        </button>
      </div>
      <FilterOptions {...props} />
      <div className={styles.buttonsWrapper}>
        <button
          className={
            isClearActive ? styles.buttonClear : styles.buttonClearActive
          }
          onClick={handleClearFilter}
          disabled={isClearActive}
        >
          {t('productFilter.clear')}
        </button>
        <button className={styles.buttonResults} onClick={handleFilter}>
          {t('productFilter.seeResults')}
        </button>
      </div>
    </div>
  );
};

export default ProductFilterPanel;
