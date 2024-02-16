import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { GetProductsWithImagesProps } from 'redux/types';
import ProductCard from 'modules/product/components/ProductCard';
import ProductsGridShortMobile from '../ProductsGridShortMobile';
import { useGetViewportWidth } from 'hooks';
import styles from './index.module.scss';

interface ProductsGridShortProps {
  searchProducts?: GetProductsWithImagesProps;
  title: string;
}
const ProductsGridShort: FC<ProductsGridShortProps> = ({
  searchProducts = {} as GetProductsWithImagesProps,
  title,
}) => {
  const windowWidth = useGetViewportWidth();

  const isMobile = windowWidth <= 960 ? true : false;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={isMobile ? styles.cardsWrapperMobile : styles.cardsWrapper}
      >
        {isMobile ? (
          <ProductsGridShortMobile>
            {searchProducts?.products?.map(
              ({ id, title, price, size, quantity }) => {
                const images =
                  searchProducts?.images?.find(item => item.id === id)
                    ?.images ?? [];

                return (
                  <SwiperSlide key={id} className={styles.swiperSlide}>
                    <ProductCard
                      productId={id}
                      key={id}
                      productName={title}
                      price={price}
                      sizes={size}
                      image={images[0].url}
                      quantity={quantity}
                      isMobile={true}
                    />
                  </SwiperSlide>
                );
              },
            )}
          </ProductsGridShortMobile>
        ) : (
          searchProducts?.products?.map(
            ({ id, title, price, size, quantity }) => {
              const images =
                searchProducts?.images?.find(item => item.id === id)?.images ??
                [];

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
            },
          )
        )}
      </div>
    </div>
  );
};

export default ProductsGridShort;
