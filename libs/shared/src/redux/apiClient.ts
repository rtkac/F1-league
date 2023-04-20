import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { buildCommonHeaders } from '../helpers';

function fetchBaseQueryFactory() {
  return fetchBaseQuery({
    // baseUrl: (process.env as any).NX_GW_URL,
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers) => {
      buildCommonHeaders(headers);
      return headers;
    },
  });
}

export const apiClient = createApi({
  baseQuery: (...args) => fetchBaseQueryFactory()(...args),
  endpoints: (builder) => {
    return {
      // user: builder.query<any, void>({
      //   query: () => '/user', // !!! TODO
      // }),
    };
  },
});
