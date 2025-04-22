import { baseApi } from '@/shared/baseApi/api'
import { LOGIN } from './types'

export const loginApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		postLogin: builder.mutation({
			query: body => ({
				url: `${LOGIN}`,
				method: 'POST',
				body: body,
			}),
		}),
	}),
})

export const { usePostLoginMutation } = loginApi
