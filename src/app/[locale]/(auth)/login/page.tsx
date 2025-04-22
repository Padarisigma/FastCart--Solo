'use client'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Eye, EyeOff } from 'lucide-react'
import { SetStateAction, useEffect, useState } from 'react'
import { usePostLoginMutation } from '../../../../entities/auth/login/model/api'
import { IUserLogin } from '../../../../shared/types'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [postLogin, { data }] = usePostLoginMutation()
	const [isPass, setIsPass] = useState<boolean>(false)
	const [pass, setPass] = useState<string>('')
	const [name, setName] = useState<string>('')
	const router = useRouter()
	async function handleLogin(event: { preventDefault: () => void }) {
		event.preventDefault()
		const loginUser: IUserLogin = {
			userName: name,
			password: pass,
		}
		try {
			await postLogin(loginUser).unwrap()
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (data?.data) {
			localStorage.setItem('access_token', data?.data)
			router.push('/')
		}
	}, [data?.data, router])
	return (
		<div className='flex items-center justify-center min-h-screen bg-white'>
			<div className='w-full max-w-md px-8   '>
				<h2 className='text-2xl font-semibold text-left text-black'>
					Log In to Exclusive
				</h2>
				<p className='text-sm text-left text-gray-600 mt-[10px]'>
					Enter your details below
				</p>
				<form onSubmit={handleLogin} className=' py-[40px] space-y-4'>
				<Input
					value={name}
					onChange={(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)}
					type='text'
					placeholder='Name'
				/>
				<div className='relative'>
					<Input
						value={pass}
						onChange={(e: { target: { value: SetStateAction<string> } }) => setPass(e.target.value)}
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
				<Button
					typeof='submit'
					type='submit'
					className='w-full bg-[#DB4444] cursor-pointer'
				>
					Log In
				</Button>
			</form>
			</div>
		</div>
	)
}

export default LoginPage
