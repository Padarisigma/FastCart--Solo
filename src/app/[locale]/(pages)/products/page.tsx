"use client"
import PriceRangeSlider from '@/components/priceRange'
import WishListBtn from '@/components/wishlist'
import { useGetBrandsQuery } from '@/entities/brands/model/api'
import { usePostProductInCartMutation } from '@/entities/cart/model/api'
import { useGetCategoriesQuery } from '@/entities/categories/model/api'
import { useGetFilteredProductsQuery } from '@/entities/products/model/api'
import { Brands, Categories, Product } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Products = () => {
   const [postProductInCart]=usePostProductInCartMutation()
	const {data: categoryData}=useGetCategoriesQuery([])
	const {data: brandsData}=useGetBrandsQuery([])
	const [priceRange, setPriceRange] = useState<[number, number]>([1, 100000])
	const [changeBrand, setChangeBrand] = useState<number | null>(null)
	const [changeCategory, setChangeCategory] = useState<number | null>(null)
	const { data: filterData } = useGetFilteredProductsQuery({
		MinPrice: priceRange[0],
		MaxPrice: priceRange[1],
		BrandId: changeBrand,
		CategoryId: changeCategory,
		PageSize: 10,
	})
  return <>
    <div className='w-[85%] m-auto flex justify-between py-[50px] items-start'>
		<p>Home / Explore Our Products </p>
		<select name="" id="" className='border border-gray-300 py-[15px] w-[200px] px-[10px]'>
			<option value="">Populary</option>
		</select>
	 </div>


	 <section className='flex flex-col gap-[40px] sm:gap-[0px] sm:flex-row justify-between  items-start pb-[50px] w-[85%] m-auto'>
		<aside className='w-[100%] sm:w-[20%] flex flex-col gap-[20px]'>
			<div className='border-t-1  flex flex-col gap-[10px] border-solid border-gray-300'>
				<p className='font-semibold text-[18px] mt-[10px]'>Category</p>
				<div className='sm:overflow-auto sm:h-[200px]'>
					{
					categoryData?.data?.map((category: Categories)=>{
						return <div key={category.id} className='py-[5px]'>
							<p onClick={()=>setChangeCategory(category.id)} className='hover:cursor-pointer'>{category.categoryName}</p>
						</div>
					})
				}
				</div>
				
			</div>
			<div className='border-t-1  flex flex-col gap-[10px] border-solid border-gray-300'>
				<p className='font-semibold text-[18px] mt-[10px]'>Brand</p>
				<div className='overflow-auto h-[200px]'>
					{
					brandsData?.data?.map((brand: Brands)=>{
						return <div key={brand.id} className='py-[5px] flex gap-[10px] items-center'>
							<p onClick={()=> setChangeBrand(brand.id)} className='hover:cursor-pointer'>{brand.brandName}</p>
						</div>
					})
				}
				</div>
				
			</div>

			<div className='border-t-1 hidden sm:flex flex-col gap-[10px] border-solid border-gray-300'>
				<p className='font-semibold text-[18px] mt-[10px]'>Features</p>
				<div className='overflow-auto h-[200px]'>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>Metallic</p>
					</div>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>Plastic cover</p>
					</div>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>Super power</p>
					</div>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>chim chi gaysako</p>
					</div>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>No Metallic</p>
					</div>
					<div className='py-[5px] flex gap-[10px] items-center'>
					<input type="checkbox" />
					<p>Golden </p>
					</div>
					
				</div>
				
			</div>
			<PriceRangeSlider
							min={0}
							max={1000000}
							value={priceRange}
							onChange={(val: number[]) => setPriceRange([val[0], val[1]])}
						/>
		</aside>
		<aside className='sm:w-[73%] '>
			
       { filterData?.data?.products.length > 0 ? 
			<div className='gap-[30px] grid sm:grid-cols-3'>
         {
				filterData?.data?.products?.map((product: Product)=>{
					return <div key={product.id} className=' relative  sm:w-[270px]'>
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
				})
			}
			</div> :  <div className='flex items-center justify-center  h-[200px] sm:h-[700px] text-center text-[30px]'> Not found gaysakoi ma </div>
		 }
			
		</aside>
	 </section>
  </>
}

export default Products