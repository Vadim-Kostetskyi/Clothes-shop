import React from 'react';
import PhotoSwitcher from 'components/PhotoSwitcher';
import ProductOrderInfo from 'components/ProductOrderInfo';
import { useGetProductByIdQuery } from 'redux/productsApi';
import styles from './index.module.scss';
import { useParams } from 'react-router-dom';

const ProductOrder = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({ id: productId });

  const visitedProduct = localStorage.getItem('visited');
  const visitedProductArray = visitedProduct ? JSON.parse(visitedProduct) : [];
  const newProduct = data?.id;

  if (newProduct && !visitedProductArray.includes(newProduct)) {
    visitedProductArray.push(newProduct);
  }
  localStorage.setItem('visited', JSON.stringify(visitedProductArray));

  return (
    <div className={styles.wrapper}>
      <PhotoSwitcher {...data} />
      <ProductOrderInfo {...data} />
    </div>
  );
};

export default ProductOrder;
