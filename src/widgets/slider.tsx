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
	<SwiperSlide><Image src='/6778e82eb04194173cfc18208453ea58.jpg' width={1000} height={1000} alt='image'/></SwiperSlide>
	<SwiperSlide>
	<Image src='/77ebc0b9876fa4427d8e52a2b62de082.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/c21303db05008457e27be30318f809a1.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/81ad6a2f1135f5586ac2c0ffd114c53f.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/66e74c18abaf5ee575544fcc8a9f7df7.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/8f86b261ed9a58e521ecafe640ea9bcc.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>
	<SwiperSlide>
	<Image src='/65eeff4c209bf9c7badcd8a688136363.jpg' width={800} height={800} alt='image'/>
	</SwiperSlide>

 </Swiper>
  )
}

export default Slider