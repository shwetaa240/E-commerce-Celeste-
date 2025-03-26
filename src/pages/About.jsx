import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="mx-auto py-10 px-5 border-t max-w-5xl">
      {/* Title Section */}
      <div className="mb-6 text-3xl">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <img 
          alt="Store" 
          className="w-full md:w-2/5 rounded-lg object-cover" 
          src={assets.store} 
        />

        {/* Text Content */}
        <div className="w-full md:w-3/5 text-md">
          <h1 className="text-black font-semibold text-xl mb-4">
            Welcome to Our Store !
          </h1>
          <p className="text-gray-600 mb-4">
            We are dedicated to providing the best quality products at affordable prices. 
            Our goal is to ensure customer satisfaction with a seamless shopping experience.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 2023, we have served thousands of happy customers with a wide variety of products, 
            ranging from fashion to electronics. We believe in quality, trust, and customer-first service.
          </p>

          <hr className="my-6" />

          {/* Why Choose Us Section */}
          <h1 className="text-black font-semibold text-xl mb-4">
            Why Choose Us ?
          </h1>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li><span className="font-medium">Quality Assurance</span> – We handpick every product to ensure top-tier quality.</li>
            <li><span className="font-medium">Affordable Prices</span> – Premium products without the hefty price tag.</li>
            <li><span className="font-medium">Customer Satisfaction</span> – A dedicated team ready to assist you.</li>
            <li><span className="font-medium">Fast & Secure Shipping</span> – Your orders delivered safely and on time.</li>
          </ul>

          {/* Contact Link */}
          <p className="text-gray-600 mt-6">
            Have questions? Visit our 
            <a href="/contact" className="text-blue-500 underline ml-1">Contact</a> page to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

