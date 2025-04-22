/* eslint-disable @next/next/no-img-element */
// Checkout.jsx
import React from 'react'

const Checkout = () => {
	return (
		<div className='p-4 md:p-10 w-[85%] m-auto'>
			<h1 className='text-xl font-semibold mb-6'>Billing Details</h1>

			<div className='flex flex-col justify-between md:flex-row md:gap-10'>
				{/* Billing Form */}
				<div className='w-full md:w-[40%] space-y-4 bg-white shadow-md p-6 rounded'>
					<input
						type='text'
						placeholder='First name'
						className='w-full border p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Last name'
						className='w-full border p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Street address'
						className='w-full border p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Apartment, floor, etc. (optional)'
						className='w-full border p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Town/City'
						className='w-full border p-2 rounded'
					/>
					<input
						type='text'
						placeholder='Phone number'
						className='w-full border p-2 rounded'
					/>
					<input
						type='email'
						placeholder='Email address'
						className='w-full border p-2 rounded'
					/>

					<div className='flex items-center gap-2'>
						<input type='checkbox' id='saveInfo' className='w-4 h-4' />
						<label htmlFor='saveInfo' className='text-sm'>
							Save this information for faster check-out next time
						</label>
					</div>
				</div>

				{/* Order Summary */}
				<div className='w-full md:w-[40%] mt-8 md:mt-0 space-y-6'>
					{/* Products */}
					<div className='space-y-4'>
						<div className='flex justify-between'>
							<span>LCD Monitor</span>
							<span>$650</span>
						</div>
						<div className='flex justify-between'>
							<span>H1 Gamepad</span>
							<span>$1100</span>
						</div>
					</div>

					{/* Totals */}
					<div className='space-y-2'>
						<div className='flex justify-between'>
							<span>Subtotal:</span>
							<span>$1750</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping:</span>
							<span>Free</span>
						</div>
						<div className='flex justify-between font-bold text-lg'>
							<span>Total:</span>
							<span>$1750</span>
						</div>
					</div>

					{/* Payment Options */}
					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<input
								type='radio'
								name='payment'
								id='bank'
								className='w-4 h-4'
							/>
							<label htmlFor='bank' className='text-sm'>
								Bank
							</label>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
								alt='Visa'
								className='h-4 ml-2'
							/>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png'
								alt='MasterCard'
								className='h-4 ml-2'
							/>
						</div>
						<div className='flex items-center gap-2'>
							<input
								type='radio'
								name='payment'
								id='cod'
								className='w-4 h-4'
								defaultChecked
							/>
							<label htmlFor='cod' className='text-sm'>
								Cash on delivery
							</label>
						</div>
					</div>

					{/* Coupon */}
					<div className='flex items-center gap-2'>
						<input
							type='text'
							placeholder='Coupon Code'
							className='border p-2 rounded w-full'
						/>
						<button className='bg-red-500 text-white px-4 py-2 rounded'>
							Apply
						</button>
					</div>

					{/* Place Order Button */}
					<button className='w-full bg-red-500 text-white py-3 rounded'>
						Place Order
					</button>
				</div>
			</div>
		</div>
	)
}

export default Checkout
