/* eslint-disable @next/next/no-img-element */
'use client'
import { Input } from '@/shared/ui/input'
import React, { useEffect, useState } from 'react'
import {
	useEditUserProfileMutation,
	useGetProfileByIdQuery,
} from '../entities/account/model/api'
import { IDecode } from '@/shared/types'
import { jwtDecode } from 'jwt-decode'

const Account: React.FC = () => {
	const [user, setUser] = useState<IDecode | null>(null)
	const { data, refetch } = useGetProfileByIdQuery(user?.sid, {
		skip: !user?.sid,
	})
	const [editUserProfile] = useEditUserProfileMutation()
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [dob, setDob] = useState<string>('')
	const [imageS, setImageS] = useState<File | null>(null)

	useEffect(() => {
		const token = localStorage.getItem('access_token');
		if (token) {
			try {
				setUser(jwtDecode(token));
			} catch (error) {
				console.error('Ошибка при декодировании токена:', error);
			}
		}
	}, []);
	

	useEffect(() => {
		if (data) {
			setFirstName(data?.data?.firstName || '')
			setLastName(data?.data?.lastName || '')
			setEmail(data?.data?.email || '')
			setPhone(data?.data?.phoneNumber || '')
			setDob(data?.data?.dob || '')
		}		
	}, [data])

	const editUser = async (event: React.FormEvent) => {
		event.preventDefault()

		const formData = new FormData()
		formData.append('FirstName', firstName)
		formData.append('LastName', lastName)
		formData.append('Email', email)
		formData.append('PhoneNumber', phone)
		formData.append('Dob', dob)
		if (imageS) {
			formData.append('image', imageS)
		}

		try {
			await editUserProfile(formData).unwrap()
			refetch()
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<main className='flex-1 p-6 flex flex-col items-center'>
			<div className='w-full  max-w-2xl bg-white shadow p-6 rounded-lg'>
			<h2 className='text-xl italic tracking-[1px] font-semibold text-red-500 mb-4'>
						Profile | <span className='text-[20px] py-[2px]'>
            {data?.data?.userName
             ? data.data.userName.charAt(0).toUpperCase() + data.data.userName.slice(1).toLowerCase()
              : ''} {data?.data?.lastName }
             </span>

					</h2>
					<div className='flex  flex-col sm:flex-row gap-[30px]'>
						<div className='flex gap-[20px]'>
					
					<div className='flex flex-col items-start gap-[30px]'>
						<div className='w-[300px]  h-[300px] flex items-center  sm:items-start'>
              <img
					src={
							`https://store-api.softclub.tj/images/${data?.data?.image}` ||
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s'
						}
						alt='Profile Image'
						className=''
					/>
					</div>
					
					<input
						type='file'
						onChange={e => setImageS(e.target.files?.[0] || null)}
					/>
					</div>
					
				</div>

				<form onSubmit={editUser} className='space-y-6'>
					<div className='flex flex-col gap-[30px]'>
						<Input
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							type='text'
							placeholder='First name'
						/>
						<Input
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							type='text'
							placeholder='Last name'
						/>
						<Input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='email'
							placeholder='Email address'
						/>
						<Input
							value={phone}
							onChange={e => setPhone(e.target.value)}
							type='text'
							placeholder='Phone Number'
						/>
					</div>
					<h3 className='text-lg font-semibold text-gray-700'>
						Password Changes
					</h3>
					<div className=' flex flex-col gap-[20px]'>
						<Input type='password' placeholder='Current password' />
						<Input type='password' placeholder='New password' />
						<Input type='password' placeholder='Confirm new password' />
					</div>

					<div className='flex flex-col-reverse md:flex-row justify-between mt-6 gap-4'>
						<button
							type='button'
							className='text-gray-600 border border-gray-400 px-6 py-2 rounded hover:bg-gray-100'
						>
							Cancel
						</button>
						<button
							type='submit'
							className='bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600'
						>
							Save Changes
						</button>
					</div>
				</form>
					</div>
				
			</div>
		</main>
	)
}

export default Account
