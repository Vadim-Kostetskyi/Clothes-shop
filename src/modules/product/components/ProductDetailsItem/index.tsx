import React, { FC } from 'react';
import { Color, Size } from 'types/types';
import { getValidClassNames } from 'helpers';
import ProductPrice from '../ProductPrice';
import styles from './index.module.scss';

type ProductDetailsItemProps = {
  vendorCode: number;
  colour: Color;
  size: Size;
  productQuantity: number;
  price: number;
};

const ProductDetailsItem: FC<ProductDetailsItemProps> = ({
  vendorCode,
  colour,
  size,
  productQuantity,
  price,
}): JSX.Element => {
  const colorIndicatorClassName = getValidClassNames(
    styles.colorIndicator,
    colour === Color.Black ? styles.colorBlack : styles.colorWhite,
  );

  return (
    <div className={styles.container}>
      <div className={styles.referenceCode}>
        <p>Ref. {vendorCode}</p>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.detailContainer}>
          <div className={colorIndicatorClassName}></div>
        </div>
        <div className={styles.detailContainer}>{size}</div>
        <div className={styles.detailContainer}>{productQuantity}</div>
      </div>
      <div className={styles.price}>
        <ProductPrice price={price} count={productQuantity} />
      </div>
    </div>
  );
};

export default ProductDetailsItem;
