"use client"
import WishListBtn from '@/components/wishlist'
import { usePostProductInCartMutation } from '@/entities/cart/model/api'
import { useGetProductsQuery } from '@/entities/products/model/api'
import { IProduct2, Product } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Wishlist  = () => {
	const { data: productData } = useGetProductsQuery([])
		const [postProductInCart]=usePostProductInCartMutation()

		const [products, setProducts] = useState<IProduct2[]>([])

	useEffect(() => {
		const stored = localStorage.getItem('wishList')
		if (stored) {
			setProducts(JSON.parse(stored))
		}
	}, [])
	function deleteProduct(id: number | string) {
		const fillteredProducts = products.filter(product => product.id !== id)
		setProducts(fillteredProducts)
		localStorage.setItem('wishList', JSON.stringify(fillteredProducts))
	}
	       
  return <>
       <section>
          <div className=' flex flex-col gap-[10px] w-[85%] m-auto'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-[30px] '>
								<p className="text-gray-800 font-semibold text-[30px]  ">Wishlist <span>({products?.length})</span> </p>
							</div>
					  
						 <button className='py-[15px] w-[150px] text-black border-1 border-solid border-gray-400 rounded-[5px]'>View all</button>
					  </div>
					  </div> 
					  {
						products?.length > 0 ? <section id='Products' className='w-[85%] py-[50px] m-auto grid sm:grid-cols-4 overflow-hidden gap-[30px]'>
						{
							products?.map((product)=>{
								 return <div key={product.id} className=' relative  sm:w-[270px]'>
								<div className='w-[100%] px-[20px] h-[400px] bg-[#F5F5F5] flex items-center justify-center'>
		  
								<Image src={`https://store-api.softclub.tj/images/${product.image}` } width={300} height={0} alt={product.productName}/>
								</div>
								<div className='bg-black text-white flex items-center justify-center py-[10px]' onClick={()=>postProductInCart(product.id)}>
									<p onClick={()=>postProductInCart(product.id)}>
										Add to Cart
									</p>
								</div>
								<div className='bg-[#DB4444] text-white flex items-center justify-center py-[10px]'>
									<button  onClick={()=>deleteProduct(product.id)}>Delete</button>
								</div>
								
								 <p className='text-[16px] pt-[20px] font-semibold'>{product.productName}</p>
								 <p className='text-[#DB4444] text-[16px]'>$ {product.discountPrice} <span className='line-through text-gray-400'>{product.price}</span> </p>
								 <Image src="/Five star.png" alt="score" width={100} height={20}/>
								 {
									product.hasDiscount ? <div className='absolute top-[10px] left-[10px] bg-[#DB4444] text-white py-[5px] px-[10px] rounded-[7px]  '>- {
										Math.round((product.price -product.discountPrice) / (product.price / 100)) } % </div> : ''
								 }

                    <Link href={`/products/${product.id}`}>
								<Image
									src='/Fill Eye (1).png'
									width={30}
									height={30}
									alt='show about product'
									className='absolute top-[10px] right-[10px]'
								/>
							</Link>
							  </div>
							  
							})
						}
						
						</section> : <div className='flex items-center justify-center text-[30px]'> Not found </div>
					  }
  
        </section>




  <div className=' flex flex-col gap-[10px] w-[85%] m-auto'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-[30px] '>
							<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
								<p className="text-gray-800 font-semibold text-[45px]  ">Just for you</p>
							</div>
					  
						 <button className='py-[15px] hidden sm:block w-[150px] text-black border-1 border-solid border-gray-400 rounded-[5px]'>View all</button>
					  </div>
					  </div> 


					  <section
				id='Products'
				className='w-[85%] py-[50px] m-auto grid sm:grid-cols-4 overflow-hidden gap-[30px]'
			>
				{productData?.data?.products?.slice(4,8).map((product: Product) => {
					return (
						<div key={product.id} className=' relative  sm:w-[270px]'>
							<div className='w-[100%] px-[20px] h-[400px] bg-[#F5F5F5] flex items-center justify-center'>
								<Image
									src={`https://store-api.softclub.tj/images/${product.image}`}
									width={300}
									height={0}
									alt={product.productName}
								/>
							</div>
							<div
								className='bg-black text-white flex items-center justify-center py-[10px]'
								onClick={() => postProductInCart(product.id)}
							>
								<p onClick={() => postProductInCart(product.id)}>Add to Cart</p>
							</div>
							<p className='text-[16px] pt-[20px] font-semibold'>
								{product.productName}
							</p>
							<p className='text-[#DB4444] text-[16px]'>
								$ {product.discountPrice}{' '}
								<span className='line-through text-gray-400'>
									{product.price}
								</span>{' '}
							</p>
							<Image src='/Five star.png' alt='score' width={100} height={20} />
							{product.hasDiscount ? (
								<div className='absolute top-[10px] left-[10px] bg-[#DB4444] text-white py-[5px] px-[10px] rounded-[7px]  '>
									-{' '}
									{Math.round(
										(product.price - product.discountPrice) /
											(product.price / 100)
									)}{' '}
									%{' '}
								</div>
							) : (
								''
							)}
							<WishListBtn
					id={String(product.id)}
					name={product.productName}
					image={product.image}
					price={product.price}
					originalPrice={product.price}
					discount={product.discountPrice}
					rating={5}
					reviewCount={250}
				/>
							<Link href={`/products/${product.id}`}>
								{' '}
								<Image
									src='/Fill Eye (1).png'
									width={30}
									height={30}
									alt='show about product'
									className='absolute top-[10px] right-[10px]'
								/>
							</Link>
						</div>
					)
				})}
			</section>
  </>
}

export default Wishlist 