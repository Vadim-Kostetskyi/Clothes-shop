import React, { useState, FC } from 'react';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import ProductInfoParameters from 'modules/product/components/ProductInfoParameters';
import { Size, Color } from 'types/types';
import styles from './index.module.scss';
import { actions as shoppingCartActions } from 'redux/slices/shopping-cart/shopping-cart';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useTranslation } from 'react-i18next';
import { selectQuantityByProductId } from 'redux/slices/shopping-cart/selectors';

interface ProductInfo {
  productId: string;
  productName: string;
  price: number;
  sizes: Size[];
  quantity: number;
}

const ProductInfo: FC<ProductInfo> = ({
  productId,
  price,
  productName,
  sizes,
  quantity,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const productQuantity =
    useAppSelector(state => selectQuantityByProductId(state, productId)) ?? 0;
  const { t } = useTranslation();

  const changeParameters = (parameter: string, value: string): void => {
    switch (parameter) {
      case 'color':
        setSelectedColor(value as Color);
        setError('');
        break;
      case 'size':
        setSelectedSize(value as Size);
        setError('');
        break;
      default:
        break;
    }
  };

  const addToShoppingCart = () => {
    if (!selectedSize) {
      setError(t('selectSize'));
      return;
    }
    if (productQuantity > quantity) {
      setError(t('productDetails.itemNotAvailable'));
      return;
    }

    setError('');

    dispatch(
      shoppingCartActions.addItem({
        id: productId,
        price,
        name: productName,
      }),
    );

    console.log('color:', selectedColor);
    console.log('size:', selectedSize);
  };

  return (
    <div className={styles.info}>
      <div className={styles.nameBox}>
        <p className={styles.productName}>{productName}</p>
        <div className={styles.shoppingCartWrapper}>
          {/* TODO: move to a separate component (similar on details page and navigation ) */}
          <button className={styles.shoppingCart} onClick={addToShoppingCart}>
            <ShoppingBag className={styles.shoppingCartImg} />
          </button>
        </div>
      </div>
      {/* TODO: create a new component ProductPrice (same as on details page) */}
      <p className={styles.price}>
        {price} {t('currency')}
      </p>
      <div className={styles.productInfoParametersWrapper}>
        <ProductInfoParameters
          changeParameters={changeParameters}
          error={error}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
