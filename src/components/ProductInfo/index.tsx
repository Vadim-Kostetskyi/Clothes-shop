import React, { useState, FC } from 'react';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import ProductInfoParameters from 'components/ProductInfoParameters';
import { Size, Color } from 'types';
import styles from './index.module.scss';
import { actions as bucketActions } from '../../redux/slices/bucket/bucket';
import { useAppDispatch } from 'libs/hooks/hooks';

interface ProductInfo {
  productId: string;
  productName: string;
  price: number;
  sizes: Size[];
}

const ProductInfo: FC<ProductInfo> = ({
  productId,
  price,
  productName,
  sizes,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  const changeParameters = (parameter: string, value: string): void => {
    switch (parameter) {
      case 'color':
        setSelectedColor(value as Color);
        break;
      case 'size':
        setSelectedSize(value as Size);
        setIsError(false);
        break;
      default:
        break;
    }
  };

  const addToBasket = () => {
    if (!selectedSize) {
      setIsError(true);
      return;
    }

    dispatch(
      bucketActions.addItem({ id: productId, price, name: productName }),
    );
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
        error={isError}
        sizes={sizes}
      />
    </div>
  );
};

export default ProductInfo;
