// Contact.jsx
import React from 'react'

const Contact = () => {
	return (
		<div className='p-4 w-[85%]   m-auto  md:p-10'>
			<h1 className='text-xl font-semibold mb-6'>Contact</h1>

			<div className='flex flex-col md:flex-row justify-between gap-6'>
				{/* Contact Info */}
				<div className='w-full md:w-[35%] bg-white shadow-md p-6 rounded space-y-6'>
					{/* Call */}
					<div className='space-y-3'>
						<h2 className='font-semibold text-lg flex items-center text-red-500'>
							Call To Us
						</h2>
						<p>We are available 24/7, 7 days a week.</p>
						<p className='font-medium'>Phone: +8801611112222</p>
					</div>

					{/* Write */}
					<div className='space-y-2'>
						<h2 className='font-semibold text-lg flex items-center text-red-500'>
							Write To Us
						</h2>
						<p>Fill out our form and we will contact you within 24 hours.</p>
						<p className='font-medium'>customer@exclusive.com</p>
						<p className='font-medium'>support@exclusive.com</p>
					</div>
				</div>

				{/* Contact Form */}
				<div className='w-full md:w-[60%] bg-white shadow-md p-6 rounded space-y-4'>
					<div className='flex flex-col md:flex-row gap-4'>
						<input
							type='text'
							placeholder='Name'
							className='w-full border p-2 rounded'
						/>
						<input
							type='email'
							placeholder='Email'
							className='w-full border p-2 rounded'
						/>
						<input
							type='text'
							placeholder='Phone'
							className='w-full border p-2 rounded'
						/>
					</div>
					<textarea
						placeholder='Your Message'
						className='w-full border p-2 rounded h-32 resize-none'
					></textarea>
					<button className='bg-red-500 text-white px-6 py-3 rounded w-full md:w-auto'>
						Send Message
					</button>
				</div>
			</div>
		</div>
	)
}

export default Contact
