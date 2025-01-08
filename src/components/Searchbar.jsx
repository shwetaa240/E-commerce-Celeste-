import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'

const Searchbar = () => {
    const {search,setsearch,showsearch,setShowsearch}=useContext(Shopcontext);
  return showsearch ? ( 
    <div className='border-t border-b bg-gray-50 text-center'>
    <div className='inline-flex'>
        kklv
    </div>
    </div>
  ):null
}

export default Searchbar