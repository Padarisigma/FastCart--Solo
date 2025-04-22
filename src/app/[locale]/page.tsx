'use client'
import BrandLogos from '@/components/brandlogos'
import MusicExperience from '@/components/music'
import ServicesSection from '@/components/serviceSection'
import WishListBtn from '@/components/wishlist'
import { usePostProductInCartMutation } from '@/entities/cart/model/api'
import { useGetCategoriesQuery } from '@/entities/categories/model/api'
import { useGetProductsQuery } from '@/entities/products/model/api'
import { Categories, Product } from '@/shared/types'
import Slider from '@/widgets/slider'
import FlashSalesTimer from '@/widgets/timer'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
	const { data: categoryData } = useGetCategoriesQuery([])
	const { data: productData } = useGetProductsQuery([])
	const [postProductInCart] = usePostProductInCartMutation()
	
	return (
		<>
			<section className='w-[85%] m-auto flex flex-col sm:flex-row justify-between gap-[40px] sm:gap-[0px] '>
				<div className='sm:w-[20%] flex flex-col py-[20px] gap-[10px] h-[400px] overflow-auto'>
					{categoryData?.data?.map((item: Categories) => {
						return (
							<div key={item.id}>
								<p className='text-[16px] text-black py-[5px]'>
									{item.categoryName}
								</p>
							</div>
						)
					})}
				</div>
				<div className='sm:w-[75%]  h-[400px] bg-blue-900 shadow-2xl'>
					<Slider />
				</div>
			</section>
			<FlashSalesTimer />

			<section
				id='Products'
				className='w-[85%] py-[50px] m-auto grid sm:grid-cols-4 overflow-hidden gap-[30px]'
			>
				{productData?.data?.products?.map((product: Product) => {
					return (
						<div key={product.id} className=' relative sm:w-[270px]'>
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
			<div className='flex items-center justify-center w-[85%] m-auto border-b-1 border-solid border-gray-400 pb-[60px]'>
				<Link href={'/products'}>
					{' '}
					<button className='py-[10px] px-[20px] bg-[#DB4444] rounded-[10px] text-white'>
						View all products
					</button>
				</Link>
			</div>

			<section id='Categories'>
				<div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
					<div className='flex gap-[10px] items-center'>
						<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
						<p className='text-[#DB4444] text-[16px]'>Categories</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-[30px] '>
							<p className='text-gray-800 font-semibold text-[30px] sm:text-[45px]  '>
								Browse By Category
							</p>
						</div>

						<div className='hidden sm:flex gap-[10px]'>
							<Image
								src='/Fill With Left Arrow.png'
								width={50}
								height={50}
								alt='arrow left'
							/>
							<Image
								src='/Fill with Right Arrow.png'
								width={50}
								height={50}
								alt='arrow right'
							/>
						</div>
					</div>
				</div>
				<div className='grid sm:grid-cols-6 py-[20px] gap-[30px] w-[85%] m-auto '>
					{categoryData?.data?.slice(0, 6).map((category: Categories) => {
						return (
							<div
								key={category.id}
								className='py-[10px] flex rounded-[10px] border-1 border-solid border-gray-400 flex-col items-center justify-center '
							>
								<div className='w-[100%] h-[140px] flex items-center justify-center'>
									<Image
										src={`https://store-api.softclub.tj/images/${category.categoryImage}`}
										width={130}
										height={100}
										alt='category image'
									/>
								</div>
								<p className='text-center'>{category.categoryName}</p>
							</div>
						)
					})}
				</div>
			</section>

			<section id='Best sales' className='py-[30px]'>
				<div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
					<div className='flex gap-[10px] items-center'>
						<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
						<p className='text-[#DB4444] text-[16px]'>This Month</p>
					</div>
					<div className='flex flex-col sm:flex-row  sm:gap-[0px] gap-[30px] sm:items-center justify-between'>
						<div className='flex items-center gap-[30px] '>
							<p className='text-gray-800 font-semibold text-[30px] sm:text-[45px]  '>
								Best Selling Products
							</p>
						</div>

						<button className='py-[10px] px-[50px] text-white bg-[#DB4444] rounded-[10px]'>
							View all
						</button>
					</div>
				</div>
				<div className='grid sm:grid-cols-4 pt-[30px] w-[85%] m-auto'>
					<div className=' relative  sm:w-[270px]'>
						<div className='w-[100%] px-[20px] h-[300px] bg-[#F5F5F5] flex items-center justify-center'>
							<Image src='/Frame 605.png' width={300} height={0} alt='afaf' />
						</div>
						<p className='text-[16px] pt-[20px] font-semibold'>
							The north coat
						</p>
						<p className='text-[#DB4444] text-[16px]'>
							$ 222222{' '}
							<span className='line-through text-gray-400'>$290000</span>{' '}
						</p>
						<Image src='/Five star.png' alt='score' width={100} height={20} />

						<Image
							src='/Fill Heart.png'
							width={30}
							height={30}
							alt='wishlist'
							className='absolute top-[10px] right-[50px]'
						/>
						<Image
							src='/Fill Eye (1).png'
							width={30}
							height={30}
							alt='show about product'
							className='absolute top-[10px] right-[10px]'
						/>
					</div>
					<div className=' relative  sm:w-[270px]'>
						<div className='w-[100%] px-[20px] h-[300px] bg-[#F5F5F5] flex items-center justify-center'>
							<Image src='/Frame 605.png' width={300} height={0} alt='afaf' />
						</div>
						<p className='text-[16px] pt-[20px] font-semibold'>
							The north coat
						</p>
						<p className='text-[#DB4444] text-[16px]'>
							$ 222222{' '}
							<span className='line-through text-gray-400'>$290000</span>{' '}
						</p>
						<Image src='/Five star.png' alt='score' width={100} height={20} />

						<Image
							src='/Fill Heart.png'
							width={30}
							height={30}
							alt='wishlist'
							className='absolute top-[10px] right-[50px]'
						/>
						<Image
							src='/Fill Eye (1).png'
							width={30}
							height={30}
							alt='show about product'
							className='absolute top-[10px] right-[10px]'
						/>
					</div>
					<div className=' relative  sm:w-[270px]'>
						<div className='w-[100%] px-[20px] h-[300px] bg-[#F5F5F5] flex items-center justify-center'>
							<Image src='/Frame 605.png' width={300} height={0} alt='afaf' />
						</div>
						<p className='text-[16px] pt-[20px] font-semibold'>
							The north coat
						</p>
						<p className='text-[#DB4444] text-[16px]'>
							$ 222222{' '}
							<span className='line-through text-gray-400'>$290000</span>{' '}
						</p>
						<Image src='/Five star.png' alt='score' width={100} height={20} />

						<Image
							src='/Fill Heart.png'
							width={30}
							height={30}
							alt='wishlist'
							className='absolute top-[10px] right-[50px]'
						/>
						<Image
							src='/Fill Eye (1).png'
							width={30}
							height={30}
							alt='show about product'
							className='absolute top-[10px] right-[10px]'
						/>
					</div>
					<div className=' relative  sm:w-[270px]'>
						<div className='w-[100%] px-[20px] h-[300px] bg-[#F5F5F5] flex items-center justify-center'>
							<Image src='/Frame 605.png' width={300} height={0} alt='afaf' />
						</div>
						<p className='text-[16px] pt-[20px] font-semibold'>
							The north coat
						</p>
						<p className='text-[#DB4444] text-[16px]'>
							$ 222222{' '}
							<span className='line-through text-gray-400'>$290000</span>{' '}
						</p>
						<Image src='/Five star.png' alt='score' width={100} height={20} />

						<Image
							src='/Fill Heart.png'
							width={30}
							height={30}
							alt='wishlist'
							className='absolute top-[10px] right-[50px]'
						/>
						<Image
							src='/Fill Eye (1).png'
							width={30}
							height={30}
							alt='show about product'
							className='absolute top-[10px] right-[10px]'
						/>
					</div>
				</div>
			</section>

			<MusicExperience />

			<section id='products'>
				<div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
					<div className='flex gap-[10px] items-center'>
						<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
						<p className='text-[#DB4444] text-[16px]'>Our Products</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-[30px] '>
							<p className='text-gray-800 font-semibold text-[45px]  '>
								Explore Our Products
							</p>
						</div>
					</div>
				</div>
				<section
				id='Products'
				className='w-[85%] py-[50px] m-auto grid sm:grid-cols-4 overflow-hidden gap-[30px]'
			>
				{productData?.data?.products?.map((product: Product) => {
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
			<div className='flex items-center justify-center w-[85%] m-auto border-b-1 border-solid border-gray-400 pb-[60px]'>
				<Link href={'/products'}>
					{' '}
					<button className='py-[10px] px-[20px] bg-[#DB4444] rounded-[10px] text-white'>
						View all products
					</button>
				</Link>
			</div>
			</section>

			<section>
				<div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
					<div className='flex gap-[10px] items-center'>
						<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
						<p className='text-[#DB4444] text-[16px]'>Featured</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-[30px] '>
							<p className='text-gray-800 font-semibold text-[45px]  '>
								New Arrival
							</p>
						</div>
					</div>
				</div>
				<BrandLogos />
			</section>

			<ServicesSection />
		</>
	)
}
