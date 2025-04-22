import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GET_CATEGORIES } from './types'





export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		}),
		tagTypes: ['Category'],
		endpoints: (builder) => ({
			 getCategories: builder.query({
				query: () => `${GET_CATEGORIES}`,
				providesTags: ['Category'],
			 }),			 
		}),
})

export const { useGetCategoriesQuery}  = categoriesApi;
