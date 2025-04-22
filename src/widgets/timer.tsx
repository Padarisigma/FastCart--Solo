'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function FlashSalesTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const resetDailyTimer = () => {
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0
    );
    
    return tomorrow.getTime() - now.getTime();
  };

  const calculateTimeLeft = (distance: number): TimeLeft => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const updateTimer = () => {
      const distance = resetDailyTimer();
      setTimeLeft(calculateTimeLeft(distance));
    };

    // Initial call
    updateTimer();

    // Update every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return <>
  <div className='pt-[100px] flex flex-col gap-[10px] w-[85%] m-auto'>
	<div className='flex gap-[10px] items-center'>
		<div className='w-[30px] rounded-[10px] bg-[#DB4444]  h-[60px]'></div>
		<p className='text-[#DB4444] text-[16px]'>Today’s</p>
	</div>
	<div className='flex items-center justify-between'>
		<div className='flex items-center gap-[30px] '>
			<p className="text-gray-800 font-semibold text-[45px]  ">Flash Sales</p>
<div className="bg-white  w-[400px]  text-center">
      
      <div className="flex justify-between items-center ">
        <div className="flex-1 text-center">
          <span className="block mt-1 text-sm text-gray-600">Days</span>
          <span className="text-[30px] font-bold text-black py-2 px-0 rounded-md inline-block w-[70px]">
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
        </div>
        
        <span className="text-2xl text-gray-800 px-1">:</span>
        
        <div className="flex-1 text-center">
          <span className="block mt-1 text-sm text-gray-600">Hours</span>
          <span className="text-[30px] font-bold text-black py-2 px-0 rounded-md inline-block w-[70px]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
        </div>
        
        <span className="text-2xl text-gray-800 px-1">:</span>
        
        <div className="flex-1 text-center">
          <span className="block mt-1 text-sm text-gray-600">Minutes</span>
          <span className="text-[30px] font-bold text-black py-2 px-0 rounded-md inline-block w-[70px]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
        </div>
        
        <span className="text-2xl text-gray-800 px-1">:</span>
        
        <div className="flex-1 text-center">
          <span className="block mt-1 text-sm text-gray-600">Seconds</span>
          <span className="text-[30px] font-bold  text-black py-2 px-0  inline-block w-[70px]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
		</div>
  
	 <div className='flex gap-[10px]'> 
		<Image src="/Fill With Left Arrow.png" width={50} height={50} alt="arrow left" />
		<Image src="/Fill with Right Arrow.png" width={50} height={50} alt="arrow right"/>
	 </div>
  </div>
  </div>  
  </>
    
  
}