import React, { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Title from './Title';

const CartTotal = () => {
  const { curr, fee, getCartAmount } = useContext(Shopcontext);

  return (
    <div className='w-full'>
      <div className='text-2xl mb-3'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{curr} {getCartAmount()}.00</p>
        </div>
        
        <hr />

        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{curr} {fee}</p>
        </div>

        <hr />

        <div className='flex justify-between font-semibold'>
          <b>Total</b>
          <b>{curr} {getCartAmount() === 0 ? 0 : getCartAmount() + fee}</b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
