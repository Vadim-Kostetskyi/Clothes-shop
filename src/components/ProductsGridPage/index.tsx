import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredyButton from 'components/FilterTabButtons';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import { BodySearchProducts, GetProductsWithImagesProps } from 'redux/types';
import Loader from '../../components/Loader';
import { PRODUCT_GRID_SIZE } from 'utils/constants';

const ProductsGridPage = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useFetchProductsWithImagesMutation();

  useEffect(() => {
    searchProducts({
      page: 0,
      size: PRODUCT_GRID_SIZE,
      body: {
        category: 'CLOTHING',
      },
    });
  }, []);

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: 0,
      size: PRODUCT_GRID_SIZE,
      body,
    });
  };
  return (
    <>
      <FilteredyButton handleClick={handleClick} />
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsCards
          searchProducts={data ?? ({} as GetProductsWithImagesProps)}
        />
      )}
    </>
  );
};

export default ProductsGridPage;
