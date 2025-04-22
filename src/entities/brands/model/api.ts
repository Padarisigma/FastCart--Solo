import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GET_BRANDS} from './types'

export const brandsApi = createApi({
	reducerPath: 'brandsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		}),
		tagTypes: ['Brands'],
		endpoints: (builder) => ({
			 getBrands: builder.query({
				query: () => `${GET_BRANDS}`,
				providesTags: ['Brands'],
			 }),
		}),
})

export const { useGetBrandsQuery}  = brandsApi;
