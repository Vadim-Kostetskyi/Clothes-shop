import React, { useEffect } from 'react';
import ProductsCards from 'components/ProductsCards';
import FilteredyButton from 'components/FilterTabButtons';
import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import { BodySearchProducts, GetProductsWithImagesProps } from 'redux/types';
import SyncLoader from 'react-spinners/SyncLoader';
import { SIZE } from 'utils/constants';
import styles from './index.module.scss';

const ProductsGridPage = (): JSX.Element => {
  const [searchProducts, { isLoading, data }] =
    useFetchProductsWithImagesMutation();

  useEffect(() => {
    searchProducts({
      page: 0,
      size: SIZE,
      body: {
        category: 'CLOTHING',
      },
    });
  }, []);

  const handleClick = (body: BodySearchProducts) => {
    searchProducts({
      page: 0,
      size: SIZE,
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
