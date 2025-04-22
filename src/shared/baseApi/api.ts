// src/shared/api/baseApi.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode'

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		prepareHeaders: headers => {
			const access_token = localStorage.getItem('access_token')

			if (access_token) {
				const decoded = jwtDecode(access_token)
				localStorage.setItem('decode_token', JSON.stringify(decoded))
			}

			if (access_token) {
				headers.set('Authorization', `Bearer ${access_token}`)
			}
			return headers
		},
	}),
	endpoints: () => ({}),
})
