import ProductCard from 'components/ProductCard';
import React from 'react';
import { useGetProductsWithImagesQuery } from 'redux/productsApi';

const Productscards = () => {
  const { data } = useGetProductsWithImagesQuery({ page: 0, size: 9 });
  console.log(data);
  return (
    <div>
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
