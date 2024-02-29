import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ShoppingBag from 'assets/svgs/ShoppingBag';
import Heart from 'assets/svgs/Heart';
import styles from './index.module.scss';

interface AddToCartButtonProps {
  addToBag: () => void;
  addToFavorite: () => void;
  isError: boolean;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  addToBag,
  addToFavorite,
  isError,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.addButton}
        onClick={addToBag}
        disabled={isError}
      >
        <ShoppingBag className={styles.shoppingBag} />
        <span className={styles.text}>
          {t('productDetails.addToMyShoppingBag')}
        </span>
      </button>
      <button className={styles.heartButton} onClick={addToFavorite}>
        <Heart className={styles.heart} />
      </button>
    </div>
  );
};

export default AddToCartButton;
