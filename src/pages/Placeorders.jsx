import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { Shopcontext } from '../context/Shopcontext';

const Placeorders = () => {
  const [method, setMethod] = useState('cod');
const {navigate}= useContext(Shopcontext);
  return (
    <div className="border-t pt-4">
      {/* Title */}
      <div className="mt-1 text-2xl font-semibold">
        <Title text1="DELIVERY" text2="INFORMATION" />
      </div>

      {/* Form & Cart Total Container */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 mt-4">
        
        {/* Form Section */}
        <form className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <input
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* Last Name */}
          <input
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* Email */}
          <input
            name="email"
            id="email"
            placeholder="Email"
            className="border p-2 w-full rounded-md col-span-2"
            required
          />

          {/* Address */}
          <input
            name="address"
            id="address"
            placeholder="Address"
            className="border p-2 w-full rounded-md col-span-2"
            required
          />

          {/* City */}
          <input
            name="city"
            id="city"
            placeholder="City"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* State */}
          <input
            name="state"
            id="state"
            placeholder="State"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* Country */}
          <input
            name="country"
            id="country"
            placeholder="Country"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* Zip Code */}
          <input
            name="zipCode"
            id="zipCode"
            placeholder="Zip Code"
            type="number"
            className="border p-2 w-full rounded-md"
            required
          />

          {/* Phone Number */}
          <input
            name="phone"
            id="phone"
            placeholder="Phone Number"
            type="tel"
            className="border p-2 w-full rounded-md col-span-2"
            required
          />

          {/* Submit Button */}
          <button
            type="submit" onClick={()=>navigate('/orders')}
            className="bg-purple-700 hover:bg-black text-white text-md py-2 mx-auto px-9 col-span-2">
            Place Order
          </button>
        </form>

        {/* Cart Total Section */}
        <div className="mt-7 w-full sm:w-2/5 sm:mt-0 bg-gray-200 p-5">
          <div className="ml-5">
            <CartTotal />
            <hr className="border-black mt-5 mb-3" />
          </div>

          {/* Payment Method Section */}
          <div className="mt-4 font-semibold text-2xl ml-5">
            <Title text1="PAYMENT" text2="METHOD" />
            <div className="mt-3 flex flex-col gap-3 ">
              
              {/* Stripe */}
              <label 
                className={`border rounded-md p-2 flex items-center cursor-pointer  ${
                  method === 'stripe' ? 'border-purple-700' : 'border-black'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={method === 'stripe'}
                  onChange={() => setMethod('stripe')}
                  className='mr-4'
                />
                <img className="h-[22px] ml-2" src={assets.stripe} alt="Stripe" />
              </label>

              {/* Razorpay */}
              <label 
                className={`border rounded-md p-2 flex items-center cursor-pointer ${
                  method === 'razorpay' ? 'border-purple-700' : 'border-black'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="razorpay"
                  checked={method === 'razorpay'}
                  onChange={() => setMethod('razorpay')}
                className='mr-4'
                />
                <img className="h-[22px] ml-2" src={assets.rzpay} alt="Razorpay" />
              </label>

              {/* Cash on Delivery */}
              <label 
                className={`border rounded-md p-2 flex items-center cursor-pointer ${
                  method === 'cod' ? 'border-purple-700' : 'border-black'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={method === 'cod'}
                  onChange={() => setMethod('cod')}
                  className='mr-4'
                />
                <img className="h-[23px] ml-2" src={assets.cdpay} alt="Cash on Delivery" />
              </label>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Placeorders;
