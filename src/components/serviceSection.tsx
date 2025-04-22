import Image from 'next/image';
import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      image: "/Services (1).png"
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      image: "/Services (1).png"
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      image: "/Services (1).png"
    }
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white p-6 rounded-lg transition-shadow text-center"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={service.image}
                alt="Service icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}