// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://lavie.orangedigitalcenteregypt.com/api/v1';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    testConnection: builder.query({
      query: () => '/',
    }),
  }),
});

export const { testConnection } = apiSlice;
