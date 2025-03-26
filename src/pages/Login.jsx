import React, { useState } from 'react'

const Login = () => {

const[currState,setcurrState]=useState('Sign Up');
const SubmitHandle=async(event)=>{
     event.preventDefault();
}

  return (
    <form onSubmit={SubmitHandle} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
     <div className='inline-flex items-center gap-2 mb2 mt-6'>
      <p className='font-serif text-3xl'>{currState}</p>
      <hr className='border-none h-[2.5px] w-8 bg-gray-800'/>
     </div>
     {currState==='Login' ? '':<input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />} 
      <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:text-blue-500 '>Forgot your password?</p>
        {
currState==='Login'?<p onClick={()=>setcurrState('Sign Up')} className='cursor-pointer hover:text-blue-500'>Create account</p>:
<p onClick={()=>setcurrState('Login')} className='cursor-pointer hover:text-blue-500'>Login Here</p>
        }
      </div>
      <button className='text-white hover:bg-purple-700 bg-black mt-3 py-2 px-8'>{currState==='Login'? <p>Sign In</p> : <p>Sign Up</p>}</button>
    </form>
  )
}

export default Login;