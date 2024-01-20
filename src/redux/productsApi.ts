import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  GetProductsPayload,
  GetProductsResponse,
  GetProductsWithImages,
  GetProductsWithImagesProps,
  SearchProductsProps,
} from './types';
import { BASE_URL } from './routes';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getProductsByName: builder.query({
      query: ({ page, size }) => `products/?page=${page}&size=${size}`,
    }),
    getProductsWithImages: builder.query<
      GetProductsWithImagesProps,
      GetProductsPayload
    >({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const rawProducts = await fetchWithBQ(
          `products/?page=${_arg.page}&size=${_arg.size}`,
        );

        if (rawProducts.error)
          return { error: rawProducts.error as FetchBaseQueryError };

        console.log('rawProducts', rawProducts);
        console.log('rawProducts.data', rawProducts.data);

        const products = (rawProducts.data as GetProductsResponse).products;

        console.log('products', products);
        const productsId: string[] = products.reduce((acc: string[], cur) => {
          acc.push(cur.id);
          return acc;
        }, []);

        const images = await Promise.all(
          productsId.map(async id => {
            const images = await fetchWithBQ(`products/images/${id}`);
            return { id, images: images?.data };
          }),
        );

        if (images.every(({ id }) => id)) {
          return { data: { products, images } } as unknown as QueryReturnValue<
            GetProductsWithImagesProps,
            FetchBaseQueryError
          >;
        }

        return { data: { products: [], images: [] } };
      },
    }),
    getNewNowProducts: builder.query<GetProductsWithImages[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const rawProducts = await fetchWithBQ('products/new');

        if (rawProducts.error)
          return { error: rawProducts.error as FetchBaseQueryError };

        console.log('rawProducts', rawProducts);
        console.log('rawProducts.data', rawProducts.data);

        const products = (rawProducts.data as GetProductsResponse).products;

        console.log('products', products);

        const productsWithImages: GetProductsWithImages[] = [];

        for (const product of products) {
          const rawImages = await fetchWithBQ(`products/images/${product.id}`);
          if (rawImages.error)
            return { error: rawImages.error as FetchBaseQueryError };

          const images = rawImages.data as GetProductsWithImages['images'];

          productsWithImages.push({ product, images });
        }

        return { data: productsWithImages };
      },
    }),
    fetchProductsWithImages: builder.mutation<
      GetProductsWithImagesProps,
      SearchProductsProps
    >({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const rawProducts = await fetchWithBQ({
          url: `products/search?page=${_arg.page}&size=${_arg.size}`,
          method: 'POST',
          body: _arg.body,
        });

        if (rawProducts.error)
          return { error: rawProducts.error as FetchBaseQueryError };

        console.log('rawProducts', rawProducts);
        console.log('rawProducts.data', rawProducts.data);

        const products = (rawProducts.data as GetProductsResponse).products;

        const productsId: string[] = products.reduce((acc: string[], cur) => {
          acc.push(cur.id);
          return acc;
        }, []);

        const images = await Promise.all(
          productsId.map(async id => {
            const images = await fetchWithBQ(`products/images/${id}`);
            return { id, images: images?.data };
          }),
        );

        if (images.every(({ id }) => id)) {
          return { data: { products, images } } as unknown as QueryReturnValue<
            GetProductsWithImagesProps,
            FetchBaseQueryError
          >;
        }

        return { data: { products: [], images: [] } };
      },
    }),
  }),
});

export const {
  useGetProductsByNameQuery,
  useGetProductsWithImagesQuery,
  useFetchProductsWithImagesMutation,
  useGetNewNowProductsQuery,
} = productsApi;
