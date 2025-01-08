import React from "react";
import { assets } from "../assets/assets";

const Exchange = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-12 sm:gap-2 justify-around text-center text-gray-700 text-xs sm:text-sm pl-25 pr-25 md:text-base pt-5 pb-10">
      <div >
        <img className="w-12 m-auto mb-5" src={assets.retrn} />
        <p className="text-center font-semibold">Exchange Policy</p>
        <p className="text-center text-gray-500">lorem ipdksnm knvws klwknfcws kndf</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.customer} />
        <p className="text-center font-semibold">Customer Support</p>
        <p className="text-center text-gray-500">lorem ipdksnm knvws klwknfcws kndf</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange} />
        <p className="text-center font-semibold">7 Days Return Policy</p>
        <p className="text-center text-gray-500">lorem ipdksnm knvws klwknfcws kndf</p>
      </div>
    </div>
  );
};

export default Exchange;
