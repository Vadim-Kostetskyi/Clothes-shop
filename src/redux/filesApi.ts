import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './routes';

export const filesApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getFilesById: builder.query({
      query: id => `files/url/${id}`,
    }),
  }),
});

export const { useGetFilesByIdQuery } = filesApi;
