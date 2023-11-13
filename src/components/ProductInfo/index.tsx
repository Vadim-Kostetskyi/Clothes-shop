import React, { useState, FC } from 'react';
import ShoppingBag from 'assets/svgs/Shopping-bag';
// import Parameters from './Parameters';
import ProductInfoParameters from 'components/ProductInfoParameters';
import styles from './index.module.scss';

interface ProductInfo {
  productName: string;
  price: string;
  sizes: string[];
}

const ProductInfo: FC<ProductInfo> = ({ price, productName, sizes }) => {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const changeParameters = (parameter: string, value: string) => {
    /* eslint-disable */
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
  /* eslint-enable */

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
          <ShoppingBag className={styles.baskedImg} />
        </button>
      </div>
      <p className={styles.price}>{price}</p>
      <ProductInfoParameters
        changeParameters={changeParameters}
        error={error}
        sizes={sizes}
      />
    </div>
  );
};

export default ProductInfo;
