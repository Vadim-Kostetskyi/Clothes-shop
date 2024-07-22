import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './routes';
import { CreateOrder, SearchOrderProps } from './types';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    createOrder: builder.mutation<SearchOrderProps, CreateOrder>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const orderInformation = await fetchWithBQ({
          url: 'orders/',
          method: 'POST',
          body: _arg.body,
        });
        console.log(orderInformation);

        return { data: orderInformation.data as SearchOrderProps };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
