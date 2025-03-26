import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="border-t text-center mx-auto py-10 px-5 max-w-5xl">
      {/* Title Section */}
      <div className="mb-6 text-3xl">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img className="w-full max-w-sm mx-auto md:max-w-[480px] rounded-lg" 
            src={assets.appoint} 
            alt="Contact Us" 
          />
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center items-start gap-4 text-left w-full md:w-1/2">
          {/* Store Address */}
          <div>
            <p className="font-semibold text-xl text-gray-700 mb-2">📍 Our Store:</p>
            <p className="text-gray-600">Celeste Headquarters</p>
            <p className="text-gray-600">123 Elegance Street, Suite 456</p>
            <p className="text-gray-600">New Delhi, ND 10001, India</p>
          </div>

          <hr className="w-full border-gray-300 my-4" />

          {/* Phone Contact */}
          <div>
            <p className="font-semibold text-xl text-gray-700 mb-2">📞 Phone:</p>
            <p className="text-gray-600">+91 9555XXXXX1</p>
          </div>

          <hr className="w-full border-gray-300 my-4" />

          {/* Email Contact */}
          <div>
            <p className="font-semibold text-xl text-gray-700 mb-2">📧 Get In Touch:</p>
            <p>
              <a href="mailto:support@celestebrand.com" className="text-blue-500 underline">
                support@celestebrand.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
