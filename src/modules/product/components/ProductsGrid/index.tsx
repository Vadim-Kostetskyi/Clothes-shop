import React, { FC } from 'react';
import ProductCard from 'modules/product/components/ProductCard';
import { GetProductsWithImagesProps } from 'redux/types';
import styles from './index.module.scss';

interface ProductsGridProps {
  searchProducts?: GetProductsWithImagesProps;
}

const ProductsGrid: FC<ProductsGridProps> = ({
  searchProducts = {} as GetProductsWithImagesProps,
}): JSX.Element => (
  <div className={styles.cardsWrapper}>
    {searchProducts?.products?.map(
      ({ id, title, price, size, quantity, vendorCode }) => {
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
            image={images[0]?.url}
            quantity={quantity}
            vendorCode={vendorCode}
          />
        );
      },
    )}
  </div>
);

export default ProductsGrid;
