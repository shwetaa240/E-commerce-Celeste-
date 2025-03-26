import React, { useContext } from 'react';
import Title from '../components/Title';
import { Shopcontext } from '../context/Shopcontext';

const Orders = () => {
  const { products = [], curr = '$' } = useContext(Shopcontext); // Prevent errors if empty

  return (
    <div className='border-t pt-7'>
      <div className='text-2xl'>
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {products.slice(0, 4).map((item, index) => (
          <div 
            key={index} 
            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
            {/* Image */}
            <div className='flex gap-6'>
            <img 
              className='w-16 sm:w-20 md:w-24 rounded-md' 
              src={item.image?.[0] || '/placeholder.jpg'} 
              alt={item.name || 'Product'} 
            />

            {/* Product Details (Stacked Name, Size, Quantity, Price, Date) */}
            <div className='flex flex-col'>
              <p className='text-sm sm:text-base font-semibold mb-4'>{item.name || 'Unnamed Product'}</p>
              <div className='text-sm flex items-center gap-2 sm:text-base text-gray-600 mt-1'>
                <p>Size: {item.size || 'N/A'}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <p>Price: <span className='font-medium'>{curr}{item.price || 'N/A'}</span></p>
              </div>
              <p className='text-xs sm:text-sm text-gray-400 mt-1'>
              <span className='text-black'> Date:</span> {24072025 || 'Not Available'}
              </p>
            </div>
            </div>
            {/* "Ready to Ship" Section */}
            <p className='text-green-600 font-medium text-xs sm:text-sm '>Ready to Ship</p>

            {/* "Track Order" Button */}
            <button className='border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100'>
              Track Order
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

