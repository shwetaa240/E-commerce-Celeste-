import React from "react";

const Newsletter = () => {

const onSubmitHandle =(event)=>{
  event.preventDefault();
}

  return (
    <div className="text-center mt-9 ">
      <h1 className="text-gray-600 text-2xl">Subscribe now & get 20% off</h1>
      <p className="text-gray-400 font-small">
        leiejn vn dckwnd kdn kcbskj kdnckjsd kdcnnkacwk kwnck lkek erkrckje
        ncekj kwndckjd
      </p>
      <form onSubmit={onSubmitHandle} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto">
        <input
          className="w-full sm:flex-1 border-2 border-gray-400 mt-8 mb-4 py-1 pl-2"
          type="email"
          placeholder="Enter your email"
        ></input>
        <button type="submit" className='bg-black text-white ff px-8 py-2 mt-4'>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
