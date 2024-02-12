import React from 'react';
import { Color, Size } from 'types/types';

import styles from './index.module.scss';
import Edit from 'assets/svgs/Edit';
import Delete from 'assets/svgs/Delete';
import { useTranslation } from 'react-i18next';
import { getValidClassNames } from 'helpers/helpers';

type Properties = {
  title: string;
  vendorCode: string;
  colour: Color;
  size: Size;
  quantity: number;
  image: string;
  price: number;
};

const ShoppingCartItem: React.FC<Properties> = ({
  title,
  vendorCode,
  colour,
  size,
  quantity,
  image,
  price,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.shoppingCartItemContainer}>
      <img className={styles.productImage} src={image} alt={title} />

      <div className={styles.productInfo}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.editIcon}>
            <Edit />
          </div>
          <div className={styles.deleteIcon}>
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
          <div className={styles.detailContainer}>{quantity}</div>
        </div>
        <div className={styles.productPrice}>
          {price} <span className={styles.currency}>{t('currency')}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
