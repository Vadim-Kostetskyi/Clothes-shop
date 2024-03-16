import React, { FC, useCallback, useEffect, useState } from 'react';
import { Color, Size } from 'types/types';
import SizeSelector from '../SizeSelector';
import ColorSelector from '../ColorSelector';
import ProductPrice from '../ProductPrice';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectStockQuantity,
  selectQuantityByProductId,
  actions as shoppingCartActions,
} from 'redux/slices/shopping-cart';
import Minus from 'assets/svgs/Minus';
import Plus from 'assets/svgs/Plus';
import styles from './index.module.scss';
import IconButton from 'modules/core/components/IconButton';

const MIN_SELECTED_COUNT = 1;

type ProductEditShoppingCartProps = {
  productId: string;
  size: Size;
  colour: Color;
  count: number;
  totalPrice: number;
  onChangeSize: (parameter: string, value: Size) => void;
  onChangeColor: (parameter: string, value: Color) => void;
};

const ProductEditShoppingCart: FC<ProductEditShoppingCartProps> = ({
  productId,
  size,
  colour,
  count,
  totalPrice,
  onChangeColor,
  onChangeSize,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const stockQuantity =
    useAppSelector(state => selectStockQuantity(state, productId)) ?? 0;
  const sameQuantityInCart =
    useAppSelector(state => selectQuantityByProductId(state, productId)) ?? 0;
  const [selectedCount, setSelectedCount] = useState<number>(count);

  const increaseCount = useCallback(() => {
    if (stockQuantity - sameQuantityInCart > 0) {
      setSelectedCount(prevCount => prevCount + 1);
    }
  }, [sameQuantityInCart, stockQuantity]);

  const decreaseCount = useCallback(() => {
    if (selectedCount > MIN_SELECTED_COUNT) {
      setSelectedCount(prevCount => prevCount - 1);
    }
  }, [selectedCount]);

  const changeItemAction = useCallback((): void => {
    dispatch(
      shoppingCartActions.changeItem({
        id: productId,
        oldColor: colour,
        oldSize: size,
        newColor: colour,
        newSize: size,
        newCount: selectedCount,
      }),
    );
  }, [dispatch, productId, colour, size, selectedCount]);

  useEffect(() => {
    changeItemAction();
    return () => {
      changeItemAction();
    };
  }, [selectedCount]);

  return (
    <div className={styles.container}>
      <ColorSelector
        parameters={Object.values(Color)}
        active={colour}
        handleClick={onChangeColor}
      />
      <SizeSelector
        parameters={Object.values(Size)}
        active={size}
        handleClick={onChangeSize}
      />
      <div className={styles.countContainer}>
        <div className={styles.countBox}>
          <IconButton className={styles.countBtn} onClick={decreaseCount}>
            <Minus className={styles.minusIcon} />
          </IconButton>
          {selectedCount}
          <IconButton className={styles.countBtn} onClick={increaseCount}>
            <Plus className={styles.plusIcon} />
          </IconButton>
        </div>
        <ProductPrice price={totalPrice} count={selectedCount} />
      </div>
    </div>
  );
};

export default ProductEditShoppingCart;
