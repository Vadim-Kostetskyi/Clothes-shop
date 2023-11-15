import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import ToggleParameter from './ToggleParameter';
import ToggleProductInfoParameters from 'components/ToggleProductInfoParameters';
import styles from './index.module.scss';

interface ProductInfoParameters {
  changeParameters: (parameter: string, value: string) => void;
  sizes: string[];
  error: boolean;
}

export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum Colors {
  Black = 'black',
  White = 'white',
}

const ProductInfoParameters: FC<ProductInfoParameters> = ({
  changeParameters,
  sizes,
  error,
}) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string>('black');
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const { t } = useTranslation();

  const colors: string[] = [Colors.Black, Colors.White];
  const defaultSizes: Size[] = [Size.XS, Size.S, Size.M, Size.L, Size.XL];

  const handleClick = (param: string, value: string) => {
    if (param === 'color') {
      setActiveColor(value);
    } else if (param === 'size') {
      setActiveSize(value);
    }
    changeParameters(param, value);
  };

  const toggle = (element: number) => {
    setOpen(prev => {
      const updatedState = [...prev];
      updatedState[element] = !updatedState[element];
      return updatedState;
    });
  };

  const props = {
    open,
    toggle,
    handleClick,
  };

  return (
    <div className={styles.parameters}>
      {error && <p className={styles.error}>{t('selectSize')}</p>}
      <ToggleProductInfoParameters
        parameters={colors}
        productInfo="color"
        text={`+2 ${t('colors')}`}
        index={0}
        active={activeColor}
        {...props}
      />
      <ToggleProductInfoParameters
        parameters={defaultSizes}
        productInfo="size"
        text={`+5 ${t('sizes')}`}
        index={1}
        active={activeSize}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

export default ProductInfoParameters;
