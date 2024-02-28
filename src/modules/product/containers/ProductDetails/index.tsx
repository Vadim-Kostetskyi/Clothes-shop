import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoSwitcher from 'modules/product/containers/ProductDetailsGallery';
import ProductDetailsInfo from 'modules/product/components/ProductDetailsInfo';
import { useGetProductByIdQuery } from 'redux/productsApi';
import CustomizedProductsDisplay from 'components/SameStyleAndVisitedProducts';
import { useLocalStorage } from 'hooks';
import styles from './index.module.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({ id: productId });
  const { getItem, setItem } = useLocalStorage<string[]>('visited', []);

  useEffect(() => {
    const visitedProduct = getItem();

    if (data && !visitedProduct.includes(data.id)) {
      visitedProduct.unshift(data.id);
      setItem(visitedProduct);
    }
  }, [productId]);

  const addToShoppingCart = useCallback(() => {
    // TODO: add the function of adding an item to the shopping bag
  }, []);

  const addToFavorite = useCallback(() => {
    // TODO: add the function of adding an item to the favorite
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <PhotoSwitcher {...data} />
        <ProductDetailsInfo
          addToShoppingCart={addToShoppingCart}
          addToFavorite={addToFavorite}
          {...data}
        />
      </div>
      <CustomizedProductsDisplay subcategory={data?.subcategory} />
    </>
  );
};

export default ProductDetails;
