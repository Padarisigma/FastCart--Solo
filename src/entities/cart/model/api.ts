import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DELETE_ALL_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_IN_CART, INCREASE_PRODUCT, POST_PRODUCT_IN_CART, REDUCE_PRODUCT } from './types'

export const cartApi = createApi({
	reducerPath: 'cartApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		prepareHeaders: (headers) => {
			const access_token = localStorage.getItem('access_token');
			
			if (access_token) {
				headers.set("Authorization", `Bearer ${access_token}`);
			 }
			
			return headers;
		 },
		}),
		tagTypes: ['Cart'],
		endpoints: (builder) => ({
			 getCartProducts: builder.query({
				query: () => `${GET_PRODUCT_IN_CART}`,
				providesTags: ['Cart'],
			 }),
			 increaseProduct: builder.mutation({
				query: (productId) => ({
					url: `${INCREASE_PRODUCT}${productId}`,
					method: 'PUT',
				 }),
				 invalidatesTags: ['Cart'],
			 }),
			 reduceProduct: builder.mutation({
				query: (productId) => ({
					url: `${REDUCE_PRODUCT}${productId}`,
					method: 'PUT',
				 }),
				 invalidatesTags: ['Cart'],
			 }),
			 deleteProduct: builder.mutation({
				query: (productId) => ({
					url: `${DELETE_PRODUCT}${productId}`,
					method: 'DELETE',
				 }),
				 invalidatesTags: ['Cart'],
			 }),
			 deleteAllProduct: builder.mutation({
				query: () => ({
					url: `${DELETE_ALL_PRODUCT}`,
					method: 'DELETE',
				 }),
				 invalidatesTags: ['Cart'],
			 }),
			 postProductInCart: builder.mutation({
				query: (productId) => ({
					url: `${POST_PRODUCT_IN_CART}${productId}`,
					method: 'POST',
				 }),
				 invalidatesTags: ['Cart'],
			 }),
		}),
})

export const { useGetCartProductsQuery, useIncreaseProductMutation, useReduceProductMutation, useDeleteAllProductMutation, useDeleteProductMutation, usePostProductInCartMutation}  = cartApi;
