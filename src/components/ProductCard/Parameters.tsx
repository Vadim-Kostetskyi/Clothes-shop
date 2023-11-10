import React, {FC, useState} from 'react';
import { useTranslation } from 'react-i18next';
import Cross from 'assets/SVG/cross';
import styles from './index.module.scss';

export interface ParametersProps {
  changeParameters: (parameter: string, value: string) => void;
}

const Parameters: FC<ParametersProps> = ({changeParameters})=> {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const { t } = useTranslation();

  const colors: string[] = ['black', 'white'];
  const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

  const handleSizeClick = (size: string) => () => {
    if (activeSize === size) {
      setActiveSize(null);
    } else {
      setActiveSize(size);
      changeParameters('size', size);
    }
  };

  const Toggle = (element: number) => () => {
    setOpen(prev => {
      const updatedState = [...prev];
      updatedState[element] = !updatedState[element];
      return updatedState;
    });
  };

  return (
    <div className={styles.parameters}>
      <div>
        <button onClick={Toggle(0)}
          className={`${styles.parameters__sizeBox} ${open[0] ? styles.hide : ''}`}>
          <p className={styles.parameters__text}>+2 {t('colors')}</p>
        </button>
        <div className={`${styles.parameters__sizeBox} ${open[0] ? '' : styles.hide}`}>
          {colors.map(color => color)}
          <button className={styles.cross__btn} onClick={Toggle(0)}>
            <Cross className={styles.cross__img} />
          </button>
        </div>
      </div>
      <button onClick={Toggle(1)} className={`${styles.parameters__sizeBox} ${open[1] ? styles.hide : ''}`}>
        <p className={styles.parameters__text}>+5 {t('sizes')}</p>
      </button>
      <div className={`${styles.parameters__sizeBox} ${open[1] ? '' : styles.hide}`}>
        <div className={styles.parameters__size}>
          {sizes.map((size, index) => (
            <button key={index}
              className={`${styles.parameters__Btn} ${activeSize === size ? styles.active : ''}`}
              onClick={handleSizeClick(size)}>
              {size}
            </button>
          ))}
        </div>
        <button className={styles.cross__btn} onClick={Toggle(1)}>
          <Cross className={styles.cross__img} />
        </button>
      </div>
    </div>
  );
};

export default Parameters;
