import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AiOutlineShoppingCart, AiOutlineUsergroupAdd, AiOutlineDollar } from 'react-icons/ai'
import { TbDiscount } from 'react-icons/tb'
import ServicesSection from '@/components/serviceSection'

const About = () => {
  return <>
  <div className="px-6 lg:px-20 py-10 space-y-12">
      <div className="text-sm text-gray-500">
        <span>Home</span> / <span className="text-black font-medium">About</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600 text-[1.3rem]">
            Launched in 2010, Exclusive is premier online shopping platform. Supported by wide range of student marketing solutions, Exclusive has $2M share over 2024 brands and serves 3 million+ customers across the region.
          </p>
          <p className="text-gray-600 text-[1.3rem]">
            Exclusive has more than 1 billion products to offer, growing at a rapid pace. We provide diverse customer solutions in categories ranging from consumer goods.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src='/Side Image.png' alt="Our Story" className="rounded-md w-full" width={800} height={600} />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center border p-6 rounded hover:text-red-500  hover:bg-red-200">
          <AiOutlineShoppingCart className="text-3xl mx-auto mb-2" />
          <h3 className="text-xl font-semibold">10.5k</h3>
          <p className="text-sm text-gray-500">Stefan cottwo our site</p>
        </div>
        <div className="text-center border p-6 rounded hover:text-red-500 hover:bg-red-200">
          <TbDiscount className="text-3xl mx-auto mb-2 " />
          <h3 className="text-xl font-semibold ">33k</h3>
          <p className="text-sm text-gray-500">Margretty / Frescillado 1256b</p>
        </div>
        <div className="text-center border p-6 rounded hover:text-red-500  hover:bg-red-200">
          <AiOutlineUsergroupAdd className="text-3xl mx-auto mb-2" />
          <h3 className="text-xl font-semibold">45.5k</h3>
          <p className="text-sm text-gray-500">Customer action in our site</p>
        </div>
        <div className="text-center border p-6 rounded hover:text-red-500  hover:bg-red-200">
          <AiOutlineDollar className="text-3xl mx-auto mb-2" />
          <h3 className="text-xl font-semibold">25k</h3>
          <p className="text-sm text-gray-500">Annal gross side in our site</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {[{
          name: 'Tom Cruise',
          role: 'Founder & Chairman',
          img: '/Frame 874.png' 
        }, {
          name: 'Emma Watson',
          role: 'Managing Director',
          img: '/Frame 875.png' 
        }, {
          name: 'Will Smith',
          role: 'Product Designer',
          img:'/Frame 876.png' 
        }].map(({ name, role, img }, index) => (
          <div key={index} className="text-center space-y-2">
            <Image src={img} alt={name} className="mx-auto rounded-md" width={400} height={500} />
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
            <div className="flex justify-center gap-2 text-gray-600">
              <FaInstagram size={40} />
              <FaLinkedin  size={40}/>
            </div>
          </div>
        ))}
      </div>
      <ServicesSection/>
    </div>
  </>
}

export default About