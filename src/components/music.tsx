import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MusicExperience() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date (3 days from now for example)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col sm:w-[85%] m-auto bg-[#000000] md:flex-row items-center justify-between p-[30px]  mx-auto mt-[50px]">
      {/* Left side - Info */}
      <aside className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <p className="text-[#00FF66] mb-2 text-sm font-medium">Categories</p>
        <h2 className="text-4xl text-[#FAFAFA] md:text-5xl font-bold mb-6 leading-tight">
          Enhance Your <br /> Music Experience
        </h2>

        {/* Timer circles */}
        <div className="flex gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <h3 className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</h3>
            </div>
            <p className="text-sm text-white">days</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <h3 className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</h3>
            </div>
            <p className="text-sm text-white">hours</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <h3 className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</h3>
            </div>
            <p className="text-sm text-white">minute</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <h3 className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</h3>
            </div>
            <p className="text-sm text-white">seconds</p>
          </div>
        </div>

        <button className=" bg-[#00FF66] text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Buy now
        </button>
      </aside>

      {/* Right side - Images */}
      <aside className="w-full  md:w-1/2 relative">
        <div className="relative z-20">
          {/* Replace with your actual image paths */}
          <Image
            src="/Frame 694 (2).png"
            alt="Music experience"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="absolute top-[50px] right-10 z-10">
          <Image
            src="/Ellipse 23 (1).png"
            alt="Background decoration"
            width={700}
            height={300}

          />
        </div>
      </aside>
    </section>

	 
  );
}