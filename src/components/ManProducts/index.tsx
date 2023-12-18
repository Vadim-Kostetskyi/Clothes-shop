import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredyButton from 'components/FilteringProducts';
import { useSearchProductsWithImagesMutation } from 'redux/productsApi';
import { BodySearchProducts, GetProductsWithImagesProps } from 'redux/types';
import SyncLoader from 'react-spinners/SyncLoader';
import styles from './index.module.scss';

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

export default ManProducts;
