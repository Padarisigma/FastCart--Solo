import Account from '@/components/account'
import React from 'react'

const AccountProfile = () => {
	return (
		<div className='min-h-screen sm:w-[85%] m-auto  flex flex-col md:flex-row'>
			{/* Sidebar (Desktop only) */}
			<aside className='hidden md:block w-64 bg-white p-6 '>
				<h2 className='text-xl font-semibold mb-4'>Manage My Account</h2>
				<ul className='space-y-2'>
					<li className='text-red-500 font-semibold'>My Profile</li>
					<li className='text-gray-600'>Address Book</li>
					<li className='text-gray-600'>My Payment Options</li>
				</ul>

				<h2 className='text-xl font-semibold mt-8 mb-4'>My Orders</h2>
				<ul className='space-y-2'>
					<li className='text-gray-600'>My Returns</li>
					<li className='text-gray-600'>My Cancellations</li>
				</ul>

				<h2 className='text-xl font-semibold mt-8 mb-4'>My Wishlist</h2>
			</aside>

			{/* Main Content */}
			<Account />
		</div>
	)
}

export default AccountProfile
