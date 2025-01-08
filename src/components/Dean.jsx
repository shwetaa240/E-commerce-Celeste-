import React from "react";
import { assets } from "../assets/assets";

const Dean = () => {
  return (
    <div className="flex flex-row text-md text-gray-800 mb-5 mt-5 w-full h-full px-5 py-2">
      <div className="flex flex-col items-center w-1/3">
        <div className="border-2 flex justify-content items-center border-gray-700 p-3">
          <img className="transition-transform duration-300 hover:scale-105" src={assets.download}></img>
        </div>
        {/* <h4>DEAN</h4> */}
        <p className="text-gray-700 mt-3 font-semibold text-lg">
          Honourable Dean Sir
        </p>
      </div>
      <div className="w-3/4 pr-2 pl-4">
        <h1 className="text-gray-900 mb-5 font3">Meet our Dean</h1>
        <p className="tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          nobis aperiam sit at fu Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis, culpa. Magni quibusdam voluptas
          mollitia incidunt eius ut hvoiwjhvjhv wdnvhjvhlx ocsjow xvjhv nesciunt deserunt ea odio odit. Nesciunt
          minus vitae ducimus tempora incidunt aliquid. Eligendi?giat qui
          laborum provident, nostrum minima similique! Eligendi repellat
          voluptatem repellendus dolorem deleniti sequi exercitationem
          architecto quisquam?
        </p>
        <div className="flex justify-center items-center mt-10">
        <p className="font2 mt-5 tex-center text-xl text-gray-500">"Valuable words by Dean . (mission/ goal/quote/)"</p>
        </div>
      </div>
    </div>
  );
};

export default Dean;
