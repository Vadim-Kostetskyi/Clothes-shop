import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoSwitcher from 'modules/product/containers/ProductDetailsGallery';
import ProductDetailsInfo from 'modules/product/components/ProductDetailsInfo';
import { useGetProductByIdQuery } from 'redux/productsApi';
import CustomizedProductsDisplay from 'components/SameStyleAndVisitedProducts';
import { useAppDispatch, useLocalStorage } from 'hooks';
import { actions as shoppingCartActions } from 'redux/slices/shopping-cart';
import { Color, Size } from 'types/types';
import styles from './index.module.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({ id: productId || '' });
  const { getItem, setItem } = useLocalStorage<string[]>('visited', []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const visitedProduct = getItem();

    if (data && !visitedProduct.includes(data.id)) {
      visitedProduct.unshift(data.id);
      setItem(visitedProduct);
    }
  }, [productId]);

  const addToShoppingCart = useCallback(() => {
    if (!data || !productId) {
      return;
    }
    const { price, title, vendorCode, colour, size, quantity } = data;

    dispatch(
      shoppingCartActions.addItem({
        id: productId,
        price: +price,
        title: title,
        vendorCode: vendorCode,
        colour: colour as Color,
        size: size[1],
        count: quantity,
      }),
    );
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
          sizes={Object.values(Size)}
          {...data}
        />
      </div>
      <CustomizedProductsDisplay subcategory={data?.subcategory} />
    </>
  );
};

export default ProductDetails;
