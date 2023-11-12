import React, { useState, FC } from 'react';
import ShoppingBag from 'assets/svgs/shopping-bag';
import Parameters from './Parameters';
import styles from './index.module.scss';

export interface InfoProps {
  productName: string,
  price: string,
  sizes: string[]
}

const Info: FC<InfoProps> =({price, productName, sizes}) => {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const changeParameters = (parameter: string, value: string) => {
    switch (parameter) {
    case 'color':
      setSelectedColor(value);
      break;
    case 'size':
      setSelectedSize(value);
      setError(false);
      break;
    default:
      break;
    }
  };

  const addToBasket = () => {
    if (!selectedSize) {
      setError(true);
      return;
      
    }
    console.log('color:', selectedColor);
    console.log('size:', selectedSize);
  };

  return (
    <div className={styles.info}>
      <div className={styles.nameBox}>
        <p className={styles.productName}>{productName}</p>
        <button className={styles.basked} onClick={addToBasket}>
          <ShoppingBag className={styles.basked__img} />
        </button>
      </div>
      <p className={styles.price}>{price}</p>
      <Parameters changeParameters={changeParameters} error={error} sizes={sizes} />
    </div>
  );
};

export default Info;
