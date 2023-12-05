import React from 'react';
import ProductCard from 'components/ProductCard';
import { useGetProductsWithImagesQuery } from 'redux/productsApi';
import styles from './index.module.scss';

const Productscards = () => {
  const { data } = useGetProductsWithImagesQuery({ page: 0, size: 9 });

  return (
    <div className={styles.cardsWrapper}>
      {data?.products.map(({ id, title, price, size }) => {
        const images = data.images.find(item => item.id === id)?.images ?? [];
        return (
          <ProductCard
            key={id}
            productName={title}
            price={price}
            sizes={size}
            images={images}
          />
        );
      })}
    </div>
  );
};

export default Productscards;
