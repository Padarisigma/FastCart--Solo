/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import {useEffect, useState } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingCart, User } from "lucide-react"
import { useGetCartProductsQuery } from '@/entities/cart/model/api'
import { IProduct2, Product } from '@/shared/types'

export default function SearchNavbar() {
  const {data}=useGetCartProductsQuery(undefined)
const [products, setProducts] = useState<IProduct2[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('wishList')
    if (stored) {
      setProducts(JSON.parse(stored))
    }
  }, [])

  
  
  return (
    <div className="w-full bg-white ">
      <div className="container mx-auto px-4 h-14 gap-[30px] flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 border rounded-md px-3 py-1.5">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-sm outline-none border-none w-48"
          />
          <Search className="h-4 w-4 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex items-center gap-6">
          <Link href="/wishlist" className="text-gray-700 relative">
            <Heart className="h-5 w-5" />
            { products?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {products?.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="text-gray-700 relative">
            <ShoppingCart className="h-5 w-5" />
            {data?.data[0]?.totalProducts > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {data?.data[0]?.totalProducts}
              </span>
            )}
          </Link>

          <Link href="/account" className="text-gray-700">
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
