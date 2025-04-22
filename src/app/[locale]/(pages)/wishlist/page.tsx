"use client"
import { usePostProductInCartMutation } from '@/entities/cart/model/api'
import { useGetProductsQuery } from '@/entities/products/model/api'
import { Product } from '@/shared/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Wishlist  = () => {
	const { data: productData } = useGetProductsQuery([])
		const [postProductInCart]=usePostProductInCartMutation()

		const [products, setProducts] = useState<Product>()

	useEffect(() => {
		const stored: string | null = localStorage.getItem('product')	
		setProducts(JSON.parse(stored))
	}, [])
	
	
	

       
  return <>
       <section>
          <div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-[30px] '>
								<p className="text-gray-800 font-semibold text-[30px]  ">Wishlist <span>({products?.length})</span> </p>
							</div>
					  
						 <button className='py-[15px] w-[150px] text-black border-1 border-solid border-gray-400 rounded-[5px]'>View all</button>
					  </div>
					  </div> 
  <section id='Products' className='w-[85%] py-[50px] m-auto grid grid-cols-4 overflow-hidden gap-[30px]'>
				{
					products?.map((product: Product)=>{
						 return <div key={product.id} className=' relative  w-[270px]'>
						<div className='w-[100%] px-[20px] h-[400px] bg-[#F5F5F5] flex items-center justify-center'>
  
						<Image src={`https://store-api.softclub.tj/images/${product.image}` } width={300} height={0} alt={product.productName}/>
						</div>
						<div className='bg-black text-white flex items-center justify-center py-[10px]' onClick={()=>postProductInCart(product.id)}>
							<p onClick={()=>postProductInCart(product.id)}>
								Add to Cart
							</p>
						</div>
						 <p className='text-[16px] pt-[20px] font-semibold'>{product.productName}</p>
						 <p className='text-[#DB4444] text-[16px]'>$ {product.discountPrice} <span className='line-through text-gray-400'>{product.price}</span> </p>
						 <Image src="/Five star.png" alt="score" width={100} height={20}/>
						 {
							product.hasDiscount ? <div className='absolute top-[10px] left-[10px] bg-[#DB4444] text-white py-[5px] px-[10px] rounded-[7px]  '>- {
								Math.round((product.price -product.discountPrice) / (product.price / 100)) } % </div> : ''
						 }
						 <Image src='/Fill Heart.png' width={30} height={30} alt='wishlist' className='absolute top-[10px] right-[50px]'/>
						 <Image src="/Fill Eye (1).png" width={30} height={30} alt='show about product' className='absolute top-[10px] right-[10px]'/>
					  </div>
					  
					})
				}
				
				</section>
        </section>

  <div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-[30px] '>
							<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
								<p className="text-gray-800 font-semibold text-[45px]  ">Just for you</p>
							</div>
					  
						 <button className='py-[15px] w-[150px] text-black border-1 border-solid border-gray-400 rounded-[5px]'>View all</button>
					  </div>
					  </div> 
  <section id='Products' className='w-[85%] py-[50px] m-auto grid grid-cols-4 overflow-hidden gap-[30px]'>
				{
					productData?.data?.products?.slice(0,4).map((product: Product)=>{
						 return <div key={product.id} className=' relative  w-[270px]'>
						<div className='w-[100%] px-[20px] h-[400px] bg-[#F5F5F5] flex items-center justify-center'>
  
						<Image src={`https://store-api.softclub.tj/images/${product.image}` } width={300} height={0} alt={product.productName}/>
						</div>
						<div className='bg-black text-white flex items-center justify-center py-[10px]' onClick={()=>postProductInCart(product.id)}>
							<p onClick={()=>postProductInCart(product.id)}>
								Add to Cart
							</p>
						</div>
						 <p className='text-[16px] pt-[20px] font-semibold'>{product.productName}</p>
						 <p className='text-[#DB4444] text-[16px]'>$ {product.discountPrice} <span className='line-through text-gray-400'>{product.price}</span> </p>
						 <Image src="/Five star.png" alt="score" width={100} height={20}/>
						 {
							product.hasDiscount ? <div className='absolute top-[10px] left-[10px] bg-[#DB4444] text-white py-[5px] px-[10px] rounded-[7px]  '>- {
								Math.round((product.price -product.discountPrice) / (product.price / 100)) } % </div> : ''
						 }
						 <Image src='/Fill Heart.png' width={30} height={30} alt='wishlist' className='absolute top-[10px] right-[50px]'/>
						 <Image src="/Fill Eye (1).png" width={30} height={30} alt='show about product' className='absolute top-[10px] right-[10px]'/>
					  </div>
					  
					})
				}
				
				</section>
  </>
}

export default Wishlist 