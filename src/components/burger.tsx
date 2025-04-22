import Image from 'next/image'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet"
import Link from 'next/link'
const Burger = () => {
  return <>
  
  <Sheet>
      <SheetTrigger asChild>
		<Image src='/material-symbols-light_menu (1).png' width={30} height={30} alt='burger'/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Routing</SheetTitle>
        </SheetHeader>
		  <div className=' flex flex-col px-[30px] gap-[30px] text-black'>
		  <Link href={'/'}>Home</Link>
		<Link href={'/contact'}>Contact</Link>
		<Link href={'/about'}>About</Link>
		<Link href={'/register'}>Sign Up</Link>
		  </div>
      </SheetContent>
    </Sheet>
  </>
}

export default Burger