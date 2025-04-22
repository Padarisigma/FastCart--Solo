import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'
import SearchNavbar from './searchNavbar'
import Link from 'next/link'
const Header = async () => {
	const t = await getTranslations('HomePage');
  return (
	<header className='border-b-1 fixed z-80 w-[100%] bg-white border-solid border-gray-300 shadow-sm'>
	<nav className='flex justify-between w-[85%] items-center py-[10px] m-auto'>
		<Image src={'/Group 1116606595 (1).png'} width={180} height={60} alt='logo fastcart '/>
	  <ul className=' text-[16px] text-black list-none flex gap-[40px] items-center'>
		<Link href={'/'}><li className='hover:text-red-500'>{t('navbar.home')}</li></Link>
		<Link href={'/contact'}><li className='hover:text-red-500'>{t('navbar.contact')}</li></Link>
		<Link href={'/about'}><li className='hover:text-red-500'>{t('navbar.about')}</li></Link>
		<Link href={'/register'}><li className='hover:text-red-500'>{t('navbar.signup')}</li></Link>
	  </ul>

	  <div>
		<SearchNavbar/>
	  </div>
	</nav>
 </header>
  )
}

export default Header