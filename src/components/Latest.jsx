import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const Latest = () => {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md-text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur iciendis neque facilis, consequatur blanditiis.
        </p>
      </div>

    {/* Rendering products  */}

   <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
      latestProducts.map((item,index)=>(
<ProductItems key={index} id={item.id} image={item.image} name={item.name}  price={item.price} />
      ))
    }
   </div>
    </div>
  );
};

export default Latest;
