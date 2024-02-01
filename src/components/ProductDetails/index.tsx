import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoSwitcher from 'components/PhotoSwitcher';
import ProductDetailsInfo from 'components/ProductDetailsInfo';
import { useGetProductByIdQuery } from 'redux/productsApi';
import SameStyleProducts from 'components/SameStyleProducts';
import { useLocalStorage } from 'libs/hooks/hooks';
import styles from './index.module.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({ id: productId });

  useEffect(() => {
    const { getItem, setItem } = useLocalStorage<string[]>('visited', []);
    const visitedProduct = getItem();
    if (data && !visitedProduct.includes(data.id)) {
      visitedProduct.unshift(data.id);
      setItem(visitedProduct);
    }
  }, [productId]);

  return (
    <>
      <div className={styles.wrapper}>
        <PhotoSwitcher {...data} />
        <ProductDetailsInfo {...data} />
      </div>
      <SameStyleProducts subcategory={data?.subcategory} />
    </>
  );
};

export default ProductDetails;
