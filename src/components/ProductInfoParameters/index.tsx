import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleProductInfoParameters from 'components/ToggleProductInfoParameters';
import { Color, Size } from 'types/types';
import styles from './index.module.scss';

interface ProductInfoParameters {
  changeParameters: (parameter: string, value: string) => void;
  sizes: Size[];
  error?: string;
}

const ProductInfoParameters: FC<ProductInfoParameters> = ({
  changeParameters,
  sizes,
  error,
}) => {
  const [activeSize, setActiveSize] = useState<Size | undefined>();
  const [activeColor, setActiveColor] = useState<Color>(Color.Black);
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const { t } = useTranslation();

  const colors: Color[] = Object.values(Color);
  const defaultSizes: Size[] = Object.values(Size);

  const handleClick = (param: string, value: Color | string) => {
    if (param === 'color') {
      setActiveColor(value as Color);
    } else if (param === 'size') {
      setActiveSize(value as Size);
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
      {error && <p className={styles.error}>{error}</p>}
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
