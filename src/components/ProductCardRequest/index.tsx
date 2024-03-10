import React, { FC, useMemo } from 'react';
import ProductCard from 'modules/product/components/ProductCard';
import {
  useGetProductByIdQuery,
  useGetProductImagesQuery,
} from 'redux/productsApi';

interface ProductCardRequestProps {
  id: string;
}

// TODO: refactor https://allalitvinenko.atlassian.net/browse/OS-185
const ProductCardRequest: FC<ProductCardRequestProps> = ({ id }) => {
  const { data } = useGetProductByIdQuery({ id });
  const images = useGetProductImagesQuery({ id });

  const props = useMemo(
    () => ({
      productId: data?.id || '',
      productName: data?.title || '',
      price: data?.price || '',
      sizes: data?.size || [],
      images: images?.data || [],
      quantity: data?.quantity || 0,
      vendorCode: data?.vendorCode,
    }),
    [data, images],
  );

  return <ProductCard {...props} />;
};
export default ProductCardRequest;
