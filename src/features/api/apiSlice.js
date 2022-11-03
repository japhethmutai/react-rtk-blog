import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const apiSlice = createApi({
    reducerPath: 'api', //optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})