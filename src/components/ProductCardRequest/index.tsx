import React, { FC, useMemo } from 'react';
import ProductCard from 'components/ProductCard';
import {
  useGetProductByIdQuery,
  useGetProductImagesQuery,
} from 'redux/productsApi';

interface ProductCardRequestProps {
  id: string;
}

const ProductCardRequest: FC<ProductCardRequestProps> = ({ id }) => {
  const { data } = useGetProductByIdQuery({ id });
  const images = useGetProductImagesQuery(data?.files);

  const props = useMemo(
    () => ({
      id: data?.id,
      productName: data?.title,
      price: data?.price,
      sizes: data?.size,
    }),
    [data],
  );

  return <ProductCard {...props} images={images.data?.images} />;
};
export default ProductCardRequest;
