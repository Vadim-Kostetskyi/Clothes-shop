import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getTotalPrice } from 'helpers';
import styles from './index.module.scss';

interface ProductPriceProps {
  count?: number;
  price: number;
}

const ProductPrice: FC<ProductPriceProps> = ({
  count = 1,
  price,
}): JSX.Element => {
  const { t } = useTranslation();
  const totalPrice = getTotalPrice(count, price);

  return (
    <div className={styles.productPrice}>
      <p>
        {totalPrice} <span>{t('currency')}</span>
      </p>
    </div>
  );
};

export default ProductPrice;
