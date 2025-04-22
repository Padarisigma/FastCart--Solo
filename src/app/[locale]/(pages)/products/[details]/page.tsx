"use client"
import ImageGallery from '@/components/imageGallery'
import { usePostProductInCartMutation } from '@/entities/cart/model/api'
import { useGetProductsByIdQuery, useGetProductsQuery } from '@/entities/products/model/api'
import { Product } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailsProduct = () => {
	const id= useParams()
	const productId=Number(id.details)
	const {data}=useGetProductsByIdQuery(productId)
	const { data: productData } = useGetProductsQuery([])
		const [postProductInCart]=usePostProductInCartMutation()
	
	
  return <>
  <section className='w-[85%] m-auto flex justify-between py-[50px] '>
      <ImageGallery images={data?.data?.images} />
		<div className='w-[35%]  flex flex-col gap-[20px] p-[20px]'>
			<p className='text-[32px] font-semibold tracking-[1px]'>{data?.data?.productName}</p>
			<p className='font-semibold text-[20px] text-[#DB4444]'>$ {data?.data?.price}</p>
			<p className='border-b-2 border-solid border-gray-300 pb-[20px]'>{data?.data?.description}</p>
			<p className='text-[20px] font-semibold'>Size or Type  : {data?.data?.size}</p>
			<div className='flex justify-between items-center'>
				<p className='text-[20px] font-semibold'>Quantity : {data?.data?.quantity}</p>
			<button className='text-white bg-[#DB4444] py-[10px] w-[170px] rounded-[10px]'>Buy now</button>
			</div>
			
		</div>
  </section>
  <section id='products'>
				<div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-[30px] '>
							<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
								<p className="text-gray-800 font-semibold text-[45px]  ">Explore Our Products</p>
							</div>
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
						 <Image src='/Fill Heart.png' width={30} height={30} alt='wishlist' className='absolute top-[10px] right-[50px]' />
						 <Link href={`/products/${product.id}`}> <Image src="/Fill Eye (1).png" width={30} height={30} alt='show about product' className='absolute top-[10px] right-[10px]'/></Link>
						
					  </div>
					  
					})
				}
				
				</section>
				</section>
  </>
}

export default DetailsProduct