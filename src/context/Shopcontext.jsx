import { createContext, useState } from "react";
import {products} from "../assets/assets";
export const Shopcontext = createContext();

const ShopcontextProvider = (props)=>{
    const curr='$';
    const fee=10;
    const[search,setsearch]=useState('')
    const[showsearch,setShowsearch]=useState(true);

    const value={
  products,curr,fee,setShowsearch,showsearch,search,setsearch
    }
  return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default ShopcontextProvider;