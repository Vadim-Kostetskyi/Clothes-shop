import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetNewNowProductsQuery } from 'redux/productsApi';
import ProductsGridShort from 'modules/product/components/ProductsGridShort';

const NewNow = (): JSX.Element => {
  const { t } = useTranslation();
  const { data } = useGetNewNowProductsQuery();

  return <ProductsGridShort title={t('newNow')} searchProducts={data} />;
};

export default NewNow;
