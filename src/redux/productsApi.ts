import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  GetProductsBiId,
  GetProductsPayload,
  GetProductsResponse,
  // GetProductsWithImages,
  GetProductsWithImagesProps,
  ProductProps,
  SearchProductsProps,
  TopCategoriesProductsProps,
} from './types';
import { BASE_URL } from './routes';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getProductsByName: builder.query<GetProductsResponse, GetProductsPayload>({
      query: ({ page, size }) => `products/?page=${page}&size=${size}`,
    }),
    getTopCategoriesByName: builder.query<TopCategoriesProductsProps[], void>({
      query: () => 'products/top',
    }),
    // TODO: https://allalitvinenko.atlassian.net/browse/OS-187
    getProductById: builder.query({
      query: ({ id }) => `products/${id}`,
    }),
    getProductImages: builder.query({
      query: ({ id }) => `products/images/${id}`,
    }),
    searchProductsByParameter: builder.query<
      GetProductsResponse,
      SearchProductsProps
    >({
      query: ({ body, page, size }) => ({
        url: `products/search?page=${page}&size=${size}`,
        method: 'POST',
        body,
      }),
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

        const products =
          (rawProducts?.data as GetProductsResponse['products']) ?? [];

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
    getNewNowProducts: builder.query<GetProductsWithImagesProps, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const rawProducts = await fetchWithBQ('products/new');

        if (rawProducts.error)
          return { error: rawProducts.error as FetchBaseQueryError };

        const products =
          (rawProducts?.data as GetProductsWithImagesProps['products']) ?? [];

        const images = await Promise.all(
          products.map(async ({ id }) => {
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

        const products =
          (rawProducts.data as GetProductsResponse)?.products ?? [];

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
    getProductsByIdWithImages: builder.query<
      GetProductsWithImagesProps,
      GetProductsBiId
    >({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const products = await Promise.all(
          _arg.id.map(async id => {
            const rawProducts = await fetchWithBQ(`products/${id}`);

            if (rawProducts.error)
              return { error: rawProducts.error as FetchBaseQueryError };

            return rawProducts.data as ProductProps;
          }),
        );

        const images = await Promise.all(
          _arg.id.map(async id => {
            const images = await fetchWithBQ(`products/images/${id}`);
            return { id, images: images?.data };
          }),
        );

        if (
          products.every(
            (product: ProductProps | { error: FetchBaseQueryError }) =>
              'id' in product,
          )
        ) {
          return {
            data: { products, images },
          } as unknown as QueryReturnValue<
            GetProductsWithImagesProps,
            FetchBaseQueryError
          >;
        }

        return {
          data: {
            product: null,
            images: null,
          },
        } as unknown as QueryReturnValue<
          GetProductsWithImagesProps,
          FetchBaseQueryError
        >;
      },
    }),
  }),
});

export const {
  useGetProductsByNameQuery,
  useGetProductsWithImagesQuery,
  useFetchProductsWithImagesMutation,
  useGetNewNowProductsQuery,
  useGetProductImagesQuery,
  useSearchProductsByParameterQuery,
  useGetProductByIdQuery,
  useGetTopCategoriesByNameQuery,
  useGetProductsByIdWithImagesQuery,
} = productsApi;
