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

const ProductInfoParameters: FC<ProductInfoParameters> = ({
  changeParameters,
  sizes,
  error,
}) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string>('black');
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const { t } = useTranslation();

  const colors: string[] = ['black', 'white'];
  const defaultSizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

  const handleClick = (param: string, value: string) => {
    if (param === 'color') {
      setActiveColor(value);
    } else if (param === 'size') {
      setActiveSize(value);
    }
    changeParameters(param, value);
  };

  const Toggle = (element: number) => {
    setOpen(prev => {
      const updatedState = [...prev];
      updatedState[element] = !updatedState[element];
      return updatedState;
    });
  };

  const props = {
    open: open,
    toggle: Toggle,
    handleClick: handleClick,
  };

  return (
    <div className={styles.parameters}>
      {error && <p className={styles.error}>{t('SelectASize')}</p>}
      <ToggleProductInfoParameters
        parameters={colors}
        text={`+2 ${t('colors')}`}
        index={0}
        active={activeColor}
        {...props}
      />
      <ToggleProductInfoParameters
        parameters={defaultSizes}
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
