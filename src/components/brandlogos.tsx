import Image from 'next/image'
import React from 'react'
import imh1 from '../../public/Frame 684 (2).png'
import imh2 from '../../public/Frame 685 (2).png'
import imh3 from '../../public/Frame 686 (1).png'
import imh4 from '../../public/Frame 687 (1).png'
const Arival = () => {
  return (
   <div className='flex flex-col  sm:flex-row sm:gap-[0px] gap-[30px] justify-between w-[85%] m-auto mt-[40px]'>
    <Image src={imh1} alt=''/>
    <div className='flex flex-col gap-[30px] sm:gap-[0px] justify-between'>
      <Image src={imh2} alt="" />
      <div className='flex gap-[30px] sm:gap-[0px] justify-between'>
      <Image src={imh3} alt="" />
      <Image src={imh4} alt="" />
      </div>
    </div>
   </div>
  )
}

export default Arival