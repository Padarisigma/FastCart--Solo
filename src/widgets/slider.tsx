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
	  <Image src='/Group 1116606595 (1).png' width={100} height={100} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	</SwiperSlide>
	<SwiperSlide>Slide 3</SwiperSlide>
	<SwiperSlide>Slide 4</SwiperSlide>

 </Swiper>
  )
}

export default Slider