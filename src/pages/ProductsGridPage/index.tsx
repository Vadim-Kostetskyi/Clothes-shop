import React, { useEffect } from 'react';
import ProductsGrid from 'modules/product/components/ProductsGrid';
import Loader from 'modules/core/components/Loader';
import { FIRST_PAGE, PRODUCT_GRID_SIZE } from 'utils/constants';
import { BodySearchProducts } from 'redux/types';
import { Category } from 'types/types';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import MainLayout from 'modules/core/components/MainLayout';
import FilterTabButtons from 'modules/product/components/FilterTabButtons';

const ProductsGridPage = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useFetchProductsWithImagesMutation();

  useEffect(() => {
    searchProducts({
      page: FIRST_PAGE,
      size: PRODUCT_GRID_SIZE,
      body: {
        category: Category.CLOTHING,
      },
    });
  }, []);

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: FIRST_PAGE,
      size: PRODUCT_GRID_SIZE,
      body,
    });
  };

  return (
    <MainLayout>
      <FilterTabButtons handleClick={handleClick} />
      {isLoading ? <Loader /> : <ProductsGrid searchProducts={data} />}
    </MainLayout>
  );
};

export default ProductsGridPage;
