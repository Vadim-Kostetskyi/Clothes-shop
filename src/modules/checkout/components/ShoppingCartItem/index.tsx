import React, { useCallback, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useGetProductImagesQuery } from 'redux/productsApi';
import { Color, Size } from 'types/types';
import Edit from 'assets/svgs/Edit';
import {
  selectTotalQuantityForProductVariant,
  actions as shoppingCartActions,
} from 'redux/slices/shopping-cart';
import Delete from 'assets/svgs/Delete';
import CrossButton from 'modules/core/components/CrossButton';
import ProductDetailsItem from 'modules/product/components/ProductDetailsItem';
import ProductEditShoppingCart from 'modules/product/components/ProductEditShoppingCart';
import styles from './index.module.scss';

type ShoppingCartItemProps = {
  id: string;
  title: string;
  vendorCode: number;
  colour: Color;
  size: Size;
  price: number;
};

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  id,
  title,
  vendorCode,
  colour,
  size,
  price,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const productQuantity = useAppSelector(state =>
    selectTotalQuantityForProductVariant({ state, id, size, colour }),
  );
  const images = useGetProductImagesQuery({ id });
  const [edit, setEdit] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<Color>(colour);
  const [selectedSize, setSelectedSize] = useState<Size>(size);

  const { imageUrl, imageName } = useMemo(
    () => ({
      imageUrl: images?.data?.[6]?.url,
      imageName: images?.data?.[6]?.name,
    }),
    [images],
  );

  const handleRemoveItem = useCallback(
    () => dispatch(shoppingCartActions.removeItem({ id, colour, size })),
    [dispatch, id, colour, size],
  );

  const handleEditItem = useCallback(() => {
    setEdit(true);
  }, []);

  const handleCloseItem = useCallback(() => {
    setEdit(false);
    dispatch(
      shoppingCartActions.changeItem({
        id,
        oldColor: colour,
        oldSize: size,
        newColor: selectedColor,
        newSize: selectedSize,
        newCount: productQuantity,
      }),
    );
  }, [
    dispatch,
    id,
    colour,
    size,
    selectedColor,
    selectedSize,
    productQuantity,
  ]);

  const handleChangeSize = useCallback((_: string, size: Size) => {
    setSelectedSize(size);
  }, []);

  const handleChangeColor = useCallback((_: string, color: Color) => {
    setSelectedColor(color);
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={imageUrl} alt={imageName} />
      <div className={styles.productInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {edit ? (
            <CrossButton
              className={styles.crossButton}
              onClick={handleCloseItem}
            />
          ) : (
            <>
              <div className={styles.editIcon} onClick={handleEditItem}>
                <Edit />
              </div>
              <div className={styles.deleteIcon} onClick={handleRemoveItem}>
                <Delete />
              </div>
            </>
          )}
        </div>

        {edit ? (
          <ProductEditShoppingCart
            productId={id}
            colour={selectedColor}
            size={selectedSize}
            count={productQuantity}
            totalPrice={price}
            onChangeSize={handleChangeSize}
            onChangeColor={handleChangeColor}
          />
        ) : (
          <ProductDetailsItem
            vendorCode={vendorCode}
            colour={colour}
            size={size}
            productQuantity={productQuantity}
            price={price}
          />
        )}
      </div>
    </div>
  );
};

export default ShoppingCartItem;
