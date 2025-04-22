import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GET_PRODUCT, GET_PRODUCT_BY_ID } from './types'
type ProductParams = {
	UserId?: number
	ProductName?: string
	MinPrice?: number
	MaxPrice?: number
	BrandId?: number | null
	ColorId?: number
	CategoryId?: number | null
	SubcategoryId?: number
	PageNumber?: number
	PageSize?: number
}
export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		}),
		tagTypes: ['Products'],
		endpoints: (builder) => ({
			 getProducts: builder.query({
				query: () => `${GET_PRODUCT}`,
				providesTags: ['Products'],
			 }),
			 getProductsById: builder.query({
				query: (productId) => `${GET_PRODUCT_BY_ID}${productId}`,
				providesTags: ['Products'],
			 }),
			 getFilteredProducts: builder.query({
				query: (params: ProductParams) => {
					const searchParams = new URLSearchParams()
					for (const [key, value] of Object.entries(params)) {
						if (value !== undefined && value !== null) {
							searchParams.append(key, String(value))
						}
					}
	
					return `${GET_PRODUCT}?${searchParams.toString()}`
				},
			}),
		}),
})

export const { useGetProductsQuery, useGetFilteredProductsQuery, useGetProductsByIdQuery}  = productsApi;
