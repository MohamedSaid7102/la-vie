// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../../config';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  }),
  endpoints: (builder) => ({
    testConnection: builder.query({
      query: () => '',
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => {
        console.log({ email, password });
        return {
          url: '/auth/signin',
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
          },
          body: { email, password },
        };
      },
    }),
  }),
});

export const { useTestConnectionQuery, useSignInMutation } = apiSlice;
