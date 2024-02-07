import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredButton from 'components/FilterTabButtons';
import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import { FIRST_PAGE, PRODUCT_GRID_SIZE } from 'utils/constants';
import { BodySearchProducts } from 'redux/types';
import { Category } from 'types/types';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';

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
    <>
      <Header />
      <FilteredButton handleClick={handleClick} />
      {isLoading ? <Loader /> : <ProductsCards searchProducts={data} />}
      <Footer />
    </>
  );
};

export default ProductsGridPage;
