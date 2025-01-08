import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
 <div className='p-5 flex flex-col sm:flex-row border border-gray-400'>
    {/* left side */}
     <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='pl-8 text-[#414141] myfont'>
       <div className='flex items-center gap-2'>
        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
        <p className='w-8 md:w-11 h-[3px] bg-[#414141]'></p>
       </div>
       <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed font1'>LATEST ARRIVALS</h1>
       <div className='flex items-center gap-2'>
        <p className='w-8 md:w-11 h-[3px] bg-[#414141]'></p>
        <p className='font-medium text-sm md:text-base'>SHOP NOW</p>
       </div>
      </div>
     </div>
{/* right side */}
<img className='w-full sm:w-1/2' style={{ height: '360px', width: 'auto' }} src={assets.hero} alt=""></img>
 </div>
  )
}

export default Hero