import React, { useContext, useState ,useEffect} from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
const Cart = () => {
  const {products,curr,cart,updateQuantity}=useContext(Shopcontext);
  const [cartData,setcartData]=useState([]);
  useEffect(()=>{
    const tempData =[];
    for(const items in cart){
      for(const item in cart[items])
      {
        if(cart[items][item]>0){
           tempData.push({
            id:items,
            size:item,
            quantity:cart[items][item],

           })
        }
      }
    }
    setcartData(tempData);
  },[cart])
  return (
    <div className='border-t pt-5'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      {cartData.length === 0 ? (
        <div>
      <p className="text-center text-gray-500 text-lg mt-5">
     OOPS! Your cart is empty. It looks like you haven't added any products yet.</p>
     <p className="text-center text-gray-500 text-lg mt-5"> Start shopping now!
      </p>
     </div>
    ) : (
      <div>
        <div>
          {
            cartData.map((item,index)=>{
              const productData=products.find((product)=>product.id==item.id);
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap'>
                  <div className='flex items-start gap'>
                   <img className='w-16 sm:w-20' src={productData.image[0]} alt=""></img>
                 <div className="pl-4">
                  <p className='txt-xs sm:text-lg font-medium '>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{curr} {productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border text-white bg-purple-700'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=>e.target.value ==='' || e.target.value==='0'? null: updateQuantity(item.id,item.size,Number(e.target.value))} className="border max-w-8 sm:max-w-10 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}></input>
               <img onClick={()=>updateQuantity(item.id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.dust}/>
              </div>
              
            )
            })
          }
        </div>
      </div>
)}


<div className='flex justify-start mt-7'>

<div className='w-full sm:w-[450px]'>

<CartTotal/>

</div>

</div>
    </div>
  )
}

export default Cart;