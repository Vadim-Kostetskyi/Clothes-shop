import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredyButton from 'components/FilterTabButtons';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import { BodySearchProducts, GetProductsWithImagesProps } from 'redux/types';
import SyncLoader from 'react-spinners/SyncLoader';
import { PRODUCT_GRID_SIZE } from 'utils/constants';
import styles from './index.module.scss';

const ProductsGridPage = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useFetchProductsWithImagesMutation();

  useEffect(() => {
    searchProducts({
      page: 1,
      size: PRODUCT_GRID_SIZE,
      body: {
        category: 'CLOTHING',
      },
    });
  }, []);

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: 1,
      size: PRODUCT_GRID_SIZE,
      body,
    });
  };
  return (
    <>
      <FilteredyButton handleClick={handleClick} />
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <SyncLoader
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ProductsCards
          searchProducts={data ?? ({} as GetProductsWithImagesProps)}
        />
      )}
    </>
  );
};

export default ProductsGridPage;
