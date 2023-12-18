import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredyButton from 'components/FilteredByButton';
import { useSearchProductsWithImagesMutation } from 'redux/productsApi';
import { BodySearchProducts, GetProductsWithImagesProps } from 'redux/types';
import SyncLoader from 'react-spinners/SyncLoader';

const ManProducts = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useSearchProductsWithImagesMutation();

  useEffect(() => {
    searchProducts({
      page: 0,
      size: 9,
      body: {
        category: 'CLOTHING',
      },
    });
  }, []);

  if (isLoading)
    return (
      <SyncLoader size={10} aria-label="Loading Spinner" data-testid="loader" />
    );

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: 0,
      size: 9,
      body,
    });
  };
  return (
    <>
      <FilteredyButton handleClick={handleClick} />
      <ProductsCards
        searchProducts={data ?? ({} as GetProductsWithImagesProps)}
      />
    </>
  );
};

export default ManProducts;
