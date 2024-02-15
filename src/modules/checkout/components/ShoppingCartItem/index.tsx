import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useGetProductImagesQuery } from 'redux/productsApi';
import { getTotalPrice, getValidClassNames } from 'helpers';
import { Color, Size } from 'types/types';
import Edit from 'assets/svgs/Edit';
import {
  selectTotalQuantityForProductVariant,
  actions as shoppingCartActions,
} from 'redux/slices/shopping-cart';
import Delete from 'assets/svgs/Delete';
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
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const productQuantity = useAppSelector(state =>
    selectTotalQuantityForProductVariant({ state, id, size, colour }),
  );
  const images = useGetProductImagesQuery({ id });
  const { imageUrl, imageName } = useMemo(
    () => ({
      imageUrl: images?.data?.[6]?.url,
      imageName: images?.data?.[6]?.name,
    }),
    [images],
  );

  const handleRemoveItem = useCallback(
    () => dispatch(shoppingCartActions.removeItem({ id, colour, size })),
    [],
  );

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={imageUrl} alt={imageName} />

      <div className={styles.productInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.editIcon}>
            <Edit />
          </div>
          <div className={styles.deleteIcon} onClick={handleRemoveItem}>
            <Delete />
          </div>
        </div>

        <div className={styles.referenceCode}>
          <p>Ref. {vendorCode}</p>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.detailContainer}>
            <div
              className={getValidClassNames(
                styles.colorIndicator,
                colour === Color.Black ? styles.colorBlack : styles.colorWhite,
              )}
            ></div>
          </div>
          <div className={styles.detailContainer}>{size}</div>
          <div className={styles.detailContainer}>{productQuantity}</div>
        </div>
        <div className={styles.productPrice}>
          {getTotalPrice(productQuantity, price)}{' '}
          <span className={styles.currency}>{t('currency')}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
