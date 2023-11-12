import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleParameter from './ToggleParameter';
import styles from './index.module.scss';

export interface ParametersProps {
  changeParameters: (parameter: string, value: string) => void;
  sizes: string[];
  error: boolean;
}

const Parameters: FC<ParametersProps> = ({
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
      <ToggleParameter
        parameters={colors}
        text={`+2 ${t('colors')}`}
        index={0}
        active={activeColor}
        {...props}
      />
      <ToggleParameter
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

export default Parameters;
