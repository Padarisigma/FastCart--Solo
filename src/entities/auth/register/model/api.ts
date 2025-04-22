import { baseApi } from '@/shared/baseApi/api'
import { REGISTER } from './types'

export const registrationApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		PostRegistration: builder.mutation({
			query: body => ({
				url: `${REGISTER}`,
				method: 'POST',
				body: body,
			}),
		}),
	}),
})

export const {usePostRegistrationMutation} = registrationApi