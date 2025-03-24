import { createContext, useEffect, useState } from "react";
import {products} from "../assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Shopcontext = createContext();

const ShopcontextProvider = (props)=>{
    const curr='$';
    const fee=10;
    const[search,setsearch]=useState('')
    const[showsearch,setShowsearch]=useState(true);
    const[cart,setcart]=useState({});
    const [cartUpdated, setCartUpdated] = useState(false);

const addCart=(itemId,size)=>
  {

if(!size)
{
  toast.error('Select product size');
  return;
}

setcart((prevCart) => {
  return {
    ...prevCart, // Create a new object reference
    [itemId]: {
      ...prevCart[itemId], // Preserve existing sizes
      [size]: (prevCart[itemId]?.[size] || 0) + 1, // Increment count
    },
  };
});
  setCartUpdated((prev) => !prev); 

}
 const getcart=()=>{
  let tc=0;
  for(const items in cart)
  {
    for(const item in cart[items])
    {
      try{
         if(cart[items][item]>0)
          tc+=cart[items][item];
      }
      catch (error){

      }
    }
  }
  return tc;
 }

const updateQuantity =async(itemId,size,quantity)=>
{
  let cartData=structuredClone(cart);
  cartData[itemId][size]=quantity;
  setcart(cartData);
}
const getCartAmount = async => {

  let totalAmount = 0;
  
  for(const items in cart){
  
  let itemInfo = products.find((product) => product.id === items);
  
  for(const item in cart[items]){
  
  try {
  
  if (cart[items][item] > 0) {
  
  totalAmount += itemInfo.price * cart[items][item]
  
  }
  
  } catch (error) {
  
  }
  
  }
  }  
}

    const value={
  products,curr,fee,setShowsearch,showsearch,search,setsearch,addCart,getcart,cartUpdated,cart,updateQuantity,getCartAmount
    }
  return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default ShopcontextProvider;