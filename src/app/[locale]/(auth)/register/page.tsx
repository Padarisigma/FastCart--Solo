'use client'
import RegistrationForm from '@/components/registrationForm'
/* eslint-disable @next/next/no-img-element */

import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import Link from 'next/link'

const SignupForm = () => {
	return (
		<div className='flex items-center mb-[50px] justify-center min-h-screen bg-white'>
			<div className='w-full max-w-md px-8 py-10 border border-gray-200 shadow-md rounded-md'>
				<h2 className='text-2xl font-semibold text-center text-black'>
					Create an account
				</h2>
				<p className='text-sm text-center text-gray-600 mt-1'>
					Enter your details below
				</p>
				<RegistrationForm />
				<div className='my-4'>
					<Separator className='mb-2' />
					<p className='text-center text-sm text-gray-500'>or</p>
					<Separator className='mt-2' />
				</div>

				<Button variant='outline' className='w-full gap-2'>
					<img
						src='https://www.svgrepo.com/show/475656/google-color.svg'
						alt='Google'
						className='w-5 h-5'
					/>
					<span>Sign up with Google</span>
				</Button>

				<p className='mt-6 text-sm text-center text-gray-700'>
					Already have account?{' '}
					<Link href='/login' className='text-black underline'>
						Log in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SignupForm
