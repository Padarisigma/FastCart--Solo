'use client'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { usePostRegistrationMutation } from '../entities/auth/register/model/api'
import { IUser } from '../shared/types'
import { useRouter } from 'next/navigation'

const RegistrationForm = () => {
	const [postRegistation, { data }] = usePostRegistrationMutation()
	const [isPass, setIsPass] = useState<boolean>(false)
	const [isPass2, setIsPass2] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [pass, setPass] = useState<string>('')
	const [confPass, setConfPass] = useState<string>('')
	async function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault()
		const newUser: IUser = {
			userName: name,
			phoneNumber: phone,
			email: email,
			password: pass,
			confirmPassword: confPass,
		}
		console.log(newUser)
		try {
			await postRegistation(newUser).unwrap()
		} catch (error) {
			console.error(error)
		}
	}

	const router = useRouter()
	useEffect(() => {
		if (data?.statusCode == 200) router.push('/')
	}, [data?.statusCode, router])
	return (
		<>
			<form onSubmit={handleSubmit} className='mt-6 space-y-4'>
				<Input
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder='Name'
				/>
				<Input
					value={phone}
					onChange={e => setPhone(e.target.value)}
					type='text'
					placeholder='phone number'
				/>
				<Input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='email'
					placeholder='Email'
				/>
				<div className='relative'>
					<Input
						value={pass}
						onChange={e => setPass(e.target.value)}
						type={isPass ? 'text' : 'password'}
						placeholder='Password'
					/>
					{isPass ? (
						<EyeOff
							onClick={() => setIsPass(!isPass)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					) : (
						<Eye
							onClick={() => setIsPass(!isPass)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					)}
				</div>
				<div className='relative'>
					<Input
						value={confPass}
						onChange={e => setConfPass(e.target.value)}
						type={isPass2 ? 'text' : 'password'}
						placeholder='Confirm Password'
					/>
					{isPass2 ? (
						<EyeOff
							onClick={() => setIsPass2(!isPass2)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					) : (
						<Eye
							onClick={() => setIsPass2(!isPass2)}
							className='absolute cursor-pointer top-2 right-2'
						/>
					)}
				</div>
				<Button
					typeof='submit'
					type='submit'
					className='w-full bg-[#DB4444] cursor-pointer'
				>
					Create Account
				</Button>
			</form>
		</>
	)
}

export default RegistrationForm
