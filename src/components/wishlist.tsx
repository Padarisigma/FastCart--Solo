/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IProduct2 } from '@/shared/types'
import { ProductCardProps } from '@/shared/types'
import { Heart } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const WishListBtn = ({
	id,
	name,
	price,
	discount,
	originalPrice,
	image,
	rating,
	reviewCount,
}: ProductCardProps) => {
	const product: IProduct2 = {
		id,
		productName: name,
		price: price,
		discountPrice: discount ?? 0,
		originalPrice: originalPrice,
		image: image,
		rating: rating,
		reviewCount: reviewCount,
		color: '',
		hasDiscount: false,
		quantity: '',
		productInMyCart: false,
		categoryId: 0,
		categoryName: '',
		productInfoFromCart: null,
	}

	const [isSaved, setIsSaved] = useState<boolean>(false)

	useEffect(() => {
		const existing = JSON.parse(
			localStorage.getItem('wishList') || '[]'
		) as IProduct2[]
		const exists = existing.some(el => el.id === product.id)
		setIsSaved(exists)
	}, [])

	const addProduct = () => {
		const existing = JSON.parse(
			localStorage.getItem('wishList') || '[]'
		) as IProduct2[]

		const exists = existing.some(el => el.id === product.id)

		if (!exists) {
			const updated = [...existing, product]
			localStorage.setItem('wishList', JSON.stringify(updated))
			setIsSaved(true)
		} else {
			console.log('Продукт уже в избранном.')
		}
	}

	return (
		<button
			onClick={addProduct}
			type='button'
			className='bg-white absolute top-[10px]  right-[60px] p-[5px] rounded-full cursor-pointer shadow-sm hover:bg-gray-100 transition-colors'
		>
			<Heart
				className={`h-5 w-5 ${isSaved ? 'text-red-500' : 'bg-transparent'}`}
			/>
		</button>
	)
}

export default WishListBtn
