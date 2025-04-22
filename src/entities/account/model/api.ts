import { baseApi } from '@/shared/baseApi/api'
import { EDIT_USER, GET_PROFILE_BY_ID } from './types'

export const accountApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getProfileById: builder.query({
			query: id => `${GET_PROFILE_BY_ID}${id}`,
		}),
		editUserProfile: builder.mutation({
			query: body => ({
				url: `${EDIT_USER}`,
				method: 'PUT',
				body: body,
			}),
		}),
	}),
})
export const { useGetProfileByIdQuery, useEditUserProfileMutation } = accountApi
