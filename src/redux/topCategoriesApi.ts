import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const topCategoriesApi = createApi({
  reducerPath: 'CategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://online-store-backend-gamma.vercel.app/api/v1/',
  }),
  endpoints: builder => ({
    getTopCategoriesByName: builder.query({
      query: () => 'products/top',
    }),
  }),
});

export const { useGetTopCategoriesByNameQuery } = topCategoriesApi;
