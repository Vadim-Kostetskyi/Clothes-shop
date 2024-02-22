import React, { FC } from 'react';
import ProductCard from 'modules/product/components/ProductCard';
import { GetProductsWithImagesProps } from 'redux/types';
import styles from './index.module.scss';

interface ProductsGridProps {
  searchProducts?: GetProductsWithImagesProps;
}

const ProductsGrid: FC<ProductsGridProps> = ({
  searchProducts = {} as GetProductsWithImagesProps,
}) => (
  <div className={styles.cardsWrapper}>
    {searchProducts?.products?.map(({ id, title, price, size, quantity }) => {
      const images =
        searchProducts?.images?.find(item => item.id === id)?.images ?? [];

      return (
        <ProductCard
          key={id}
          productId={id}
          productName={title}
          price={price}
          sizes={size}
          images={images}
          quantity={quantity}
        />
      );
    })}
  </div>
);

export default ProductsGrid;
