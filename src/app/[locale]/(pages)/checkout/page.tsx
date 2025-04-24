/* eslint-disable @next/next/no-img-element */
// Checkout.jsx
"use client"
import React, { useRef, useState } from 'react'
import { useGetCartProductsQuery} from '@/entities/cart/model/api'
import { Carts, ProductInCart } from '@/shared/types'
import Image from 'next/image'
import { DialogCheckout } from '@/widgets/dialogCheckout'
import { SnackbarProvider } from 'notistack'
const Checkout = () => {
	const [check, setCheck]=useState(false)
	const [firstName, setFirstName]=useState('')
	const [lastName, setLastName]=useState('')
	const [address, setAddress]=useState('')
	const [apartment, setApartment]=useState('')
	const [city, setCity]=useState('')
	const [phone, setPhone]=useState('')
	const [email, setEmail]=useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const {data:cartData}=useGetCartProductsQuery([])
	const [cupon, setCupon]=useState<string>('')
	const [priceCupon, setPriceCupon]=useState<string | number >('')
	let priceAfterCupon : string | number=''

	const forCupon=(price: string | number )=>{
		const value  = inputRef.current?.value
	   setCupon(value || '')
		if(value== 'sigmaboy') {
			priceAfterCupon=Math.round(Number(price)-((Number(price)/100)*50)) 
			setPriceCupon(priceAfterCupon)
		} else{
			priceAfterCupon=price	
			setPriceCupon(priceAfterCupon)		
		}
	}
	 console.log(firstName);
	 
	return (
		<SnackbarProvider 
		maxSnack={3}
		autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		>
			<div className='p-4 md:p-10 w-[85%] m-auto'>
			<h1 className='text-xl font-semibold mb-6'>Billing Details</h1>

			<div className='flex flex-col justify-between items-start md:flex-row md:gap-10'>
				{/* Billing Form */}
				<div className='w-full md:w-[40%] space-y-6 bg-white shadow-md py-[60px] px-6 rounded'>
					{
						check ? <input
						type='text'
						value={firstName}
						readOnly
						placeholder='First name'
						className={`w-full   border p-2 rounded`}
					/> : <input
						type='text'
						value={firstName}
						onChange={(e)=>setFirstName(e.target.value)}
						placeholder='First name'
						className='w-full border p-2 rounded'
					/>
					}

					{
						check ? <input
						type='text'
						value={lastName}
						readOnly
						placeholder='Last name'
						className='w-full border p-2 rounded'
					/> : <input
						type='text'
						value={lastName}
						onChange={(e)=>setLastName(e.target.value)}
						placeholder='Last name'
						className='w-full border p-2 rounded'
					/>
					}
					
					{
						check ? <input
						type='text'
						placeholder='Street address'
						value={address}
						readOnly
						className='w-full border p-2 rounded'
					/> :  <input
						type='text'
						placeholder='Street address'
						value={address}
						onChange={(e)=>setAddress(e.target.value)}
						className='w-full border p-2 rounded'
					/>
					}
					
					{
						check ? <input
						type='text'
						placeholder='Apartment, floor, etc. (optional)'
						value={apartment}
						readOnly
						className='w-full border p-2 rounded'
					/> : <input
						type='text'
						placeholder='Apartment, floor, etc. (optional)'
						value={apartment}
						onChange={(e)=>setApartment(e.target.value)}
						className='w-full border p-2 rounded'
					/>
					}
					
	              {
						check ? <input
						type='text'
						placeholder='Town/City'
						value={city}
						readOnly
						className='w-full border p-2 rounded'
					/> : <input
						type='text'
						placeholder='Town/City'
						value={city}
						onChange={(e)=>setCity(e.target.value)}
						className='w-full border p-2 rounded'
					/>
					  }
					

					{
						check ? <input
						type='text'
						value={phone}
						readOnly
						placeholder='Phone number'
						className='w-full border p-2 rounded'
					/> : <input
						type='text'
						value={phone}
						onChange={(e)=>setPhone(e.target.value)}
						placeholder='Phone number'
						className='w-full border p-2 rounded'
					/>
					}
					
					{
						check ? <input
						type='email'
						value={email}
                  readOnly						
						placeholder='Email address'
						className='w-full border p-2 rounded'
					/> : <input
						type='email'
						value={email}
						
						onChange={(e)=>setEmail(e.target.value)}
						placeholder='Email address'
						className='w-full border p-2 rounded'
					/>
					}

					<div className='flex items-center gap-2'>
						<div className={`w-[20px] h-[20px] rounded-[4px] ${check ? 'bg-red-700' : 'border-1 border-solid border-gray-400'} `} onClick={()=> setCheck(prev => !prev)}></div>
						<label htmlFor='saveInfo' className='text-sm'>
							Save this information for faster check-out next time
						</label>
					</div>
				</div>

				{/* Order Summary */}
				{
					cartData?.data?.map((cart: Carts)=>{
						return <>
						<div  className='w-full md:w-[40%] mt-8 md:mt-0 space-y-6'>
						{/* Products */}
						<div className='space-y-4 '>
							{ cart?.productsInCart?.length == 0 ? <div className='text-[20px] font-semibold flex items-center justify-center py-[30px]'>Not Found</div> : cart?.productsInCart?.map((product:ProductInCart)=>{
									return <div key={product.id} className='flex justify-between items-center'>
										<div className='flex gap-[20px] items-center'>
											<Image src={`https://store-api.softclub.tj/images/${product.product.image}`} width={70} height={50} alt='image' />
									<span className='font-semibold text-[18px] tracking-[1px] italic'>{product.product.productName}</span>
										</div>
										
									<span className='font-semibold text-[18px] tracking-[1px] italic'>${product.product.price * product.quantity}</span>
								</div>
								})
							}
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
								ref={inputRef}
							/>
							<button className='bg-red-500 text-white px-4 py-2 rounded' onClick={()=>forCupon(cart.totalPrice)}>
								Apply
							</button>
						</div>
						{/* Totals */}
						<div className='space-y-2 italic text-[18px] tracking-[1px] font-semibold'>
							<div className='flex justify-between'>
								<span>Subtotal :</span>
								<span>$ {cart.totalPrice}</span>
							</div>
							<div className='flex justify-between'>
								<span>Shipping :</span>
								<span>Free</span>
							</div>
							<div className='flex justify-between font-bold text-lg'>
								<span>Total:</span>
								<div className='flex gap-[10px]'>
								<span className={` ${cupon == 'sigmaboy' ? 'block' : 'hidden'} line-through text-gray-500`}>$ {cart.totalPrice}</span>
								<span>$ { cupon == 'sigmaboy' ?  priceCupon  : cart.totalPrice}</span>
								</div>
								
							</div>
						</div>
	
						{/* Place Order Button */}
						<DialogCheckout 
						firstName={firstName}
						lastName={lastName}
						address={address}
						apartment={apartment}
						city={city}
						phone={phone}
						email={email}
						cupon={cupon}
						priceCupon={priceCupon}
						totalPrice={cart.totalPrice}
						/>
					</div>
						</>
					})
				}
				
			</div>
		</div>
		</SnackbarProvider>
		
	)
}

export default Checkout
