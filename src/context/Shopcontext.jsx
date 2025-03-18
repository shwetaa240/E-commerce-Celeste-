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

const addCart= async(itemId,size)=>
  {

if(!size)
{
  toast.error('Select product size');
  return;
}

  let cart=structuredClone(cart);
 if(cart[itemId])
 {
   if(cart[itemId][size])
   {
    cart[itemId][size]+=1;
   }
   else{
    cart[itemId][size]
   }
 }
  else{
    cart[itemId]={};
    cart[itemId][size]=1;
  } 

  setcart(cart);


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


    const value={
  products,curr,fee,setShowsearch,showsearch,search,setsearch,addCart,getcart
    }
  return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default ShopcontextProvider;