import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
const Slider = () => {
  return (
	<Swiper
	spaceBetween={30}
	centeredSlides={true}
	autoplay={{
	  delay: 2500,
	  disableOnInteraction: false,
	}}
	pagination={{
	  clickable: true,
	}}
	navigation={true}
	modules={[Autoplay, Pagination, Navigation]}
	className="mySwiper"
 >
	
	<SwiperSlide>
	<Image src='/b74fdd3cb4f7af8d17bfb3451c0e947b.jpg' width={1000} height={1000} alt='image'/>
	</SwiperSlide>
	<SwiperSlide><Image src='/8d95ac4350c0a45243a5bfa96d0284a9.jpg' width={1000} height={1000} alt='image'/></SwiperSlide>
	<SwiperSlide>
	<Image src='/f3759df705f20413b9911252cc263cb9.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/e8b74238880bd9d67ec728cff79415e0.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/65eeff4c209bf9c7badcd8a688136363.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>

 </Swiper>
  )
}

export default Slider