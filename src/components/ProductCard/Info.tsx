import React, { useState } from 'react';
import ShoppingBag from 'assets/SVG/shopping-bag';
import Parameters from './Parameters';
import styles from './index.module.scss';

export interface ParametersProps {
  changeParameters: (parameter: string, value: string) => void;
}

const Info = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);


  const changeParameters = (parameter: string, value: string) => {
    console.log(11111);
    
    switch (parameter) {
    case 'color':
      setSelectedColor(value);
      break;
    case 'size':
      setSelectedSize(value);
      console.log(123);
        
      break;
    default:
      break;
    }
  };

  const addToBasket = () => {
    console.log('color:', selectedColor);
    console.log('size:', selectedSize);
  };
  return (
    <div>
      <div className={styles.nameBox}>
        <p className={styles.productName}>Shearling denim jacket</p>
        <button className={styles.basked} onClick={addToBasket}>
          <ShoppingBag className={styles.basked__img} />
        </button>
      </div>
      <p>119.99 €</p>
      <Parameters changeParameters={changeParameters} />
    </div>
  );
};

export default Info;
