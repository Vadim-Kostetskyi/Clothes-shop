import React, { useEffect, useState } from 'react';
import ProductsGrid from 'modules/product/components/ProductsGrid';
import Loader from 'modules/core/components/Loader';
import { PageNumbers, PRODUCT_GRID_SIZE } from 'utils/constants';
import { BodySearchProducts } from 'redux/types';
import { Category, Subcategory } from 'types/types';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import MainLayout from 'modules/core/components/MainLayout';
import FilterTabButtons from 'modules/product/components/FilterTabButtons';
import ProductsPagination from 'modules/product/components/ProductsPagination';
import { useTranslation } from 'react-i18next';
import { getButtons } from 'modules/product/components/FilterTabButtons/data';

const ProductsGridPage = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useFetchProductsWithImagesMutation();

  const { t } = useTranslation();

  const [activeButton, setActiveButton] = useState<string>(
    getButtons(t)[0].value,
  );

  const [activePage, setActivePage] = useState<PageNumbers>(
    PageNumbers.FIRST_PAGE,
  );

  useEffect(() => {
    searchProducts({
      page: Number(PageNumbers.FIRST_PAGE),
      size: PRODUCT_GRID_SIZE,
      body: {
        category: Category.CLOTHING,
      },
    });
  }, []);

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: Number(PageNumbers.FIRST_PAGE),
      size: PRODUCT_GRID_SIZE,
      body,
    });
  };

  const handlePagination = (pageNumber: PageNumbers) => {
    searchProducts({
      page: Number(pageNumber),
      size: PRODUCT_GRID_SIZE,
      body:
        activeButton === Category.CLOTHING
          ? {
              category: activeButton,
            }
          : {
              subcategory: activeButton as Subcategory,
            },
    });
  };

  const pagesAmount = data?.pages ?? 0;

  return (
    <MainLayout>
      <FilterTabButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setActivePage={setActivePage}
        handleClick={handleClick}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsGrid searchProducts={data} />
          {pagesAmount > 1 ? (
            <ProductsPagination
              pagesAmount={pagesAmount}
              activePage={activePage}
              setActivePage={setActivePage}
              getPageProducts={handlePagination}
            />
          ) : null}
        </>
      )}
    </MainLayout>
  );
};

export default ProductsGridPage;
