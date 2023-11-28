import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://online-store-backend-gamma.vercel.app/api/v1/',
  }),
  endpoints: builder => ({
    getProductsByName: builder.query({
      query: ({ page, size }) => `products/?page=${page}&size=${size}`,
    }),
  }),
});

export const { useGetProductsByNameQuery } = productsApi;
