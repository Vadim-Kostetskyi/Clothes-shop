import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filesApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://online-store-backend-gamma.vercel.app/api/v1/',
  }),
  endpoints: builder => ({
    getFilesById: builder.query({
      query: id => `files/url/${id}`,
    }),
  }),
});

export const { useGetFilesByIdQuery } = filesApi;
