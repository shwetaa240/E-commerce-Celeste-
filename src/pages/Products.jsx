import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Related from "../components/Related";

const Products = () => {
  const { products, curr ,addCart} = useContext(Shopcontext);
  const { productId } = useParams();
  const [productdata, setProductdata] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductdata(item)
        setImage(item.image[0]);
        return null;
      }

    })
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  

  return productdata ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productdata.image.map((item, index) => (
              <img src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" onClick={() => setImage(item)}
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
          <div className="flex-1">
            <h1 className="text-3xl font-medium">{productdata.name}</h1>
            <div className="flex items-center gap-1 mt-3">
              <img src={assets.star} className="w-4 h-4" />
              <img src={assets.star} className="w-4 h-4" />
              <img src={assets.star} className="w-4 h-4"/>
              <img src={assets.star} className="w-4 h-4"/>
              <img src={assets.stardull} className="w-4 h-4"/>
              <p className="pl-2">(122)</p>
            </div>
            <p className="font-bold text-2xl mt-2">{curr} {productdata.price}</p>
            <p className="text-gray-500 text-md md:w-4/5 mt-5">{productdata.description}</p>
            <div className="text-md my-8 gap-4 flex flex-col">
              <p className="font-medium text-gray-700 mt-5">Select Size</p>
              <div className="flex gap-4">
                {
                  productdata.sizes.map((item, index) => 
                    (<button onClick={()=>setSize(item)} className={`bg-gray-400 font-medium text-white py-1 px-3
                       border border-gray-400 rounded ${item === size ?'bg-gray-900':''}`} key={index}>{item}</button>))
                }
              </div>
            </div>
            <button onClick={()=>addCart(productdata.id,size)} className="font-medium text-white border border-gray-900 py-1 px-6 active:bg-gray-900 bg-purple-700 mb-6">ADD TO CART</button>
            <hr className="mt-10 sm:w-4/5 bg-gray-400 h-[1px] border-0"></hr>
            <div className="text-sm text-gray-500 mt-4">
              <p>100% Original quality product</p>
              <p>Exchange and 7 days Return available</p>
              <p>Cash on delivery also available on this product</p>
            </div>
          </div>
      </div>
        
        <div className="mt-10">
          <div className="flex">
           <b  className="border px-5 py-3 text-sm ">Description</b>
           <p className="border px-5 py-3 text-sm ">Reviews (102)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Our e-commerce platform offers a seamless shopping experience, allowing you to browse and purchase products effortlessly. Elevate your shopping journey with our cutting-edge image classification feature, which helps you find the perfect size with precision. Experience the future of online shopping with our innovative virtual trial room, enabling you to visualize your selections before making a purchase. Shop smarter, shop with confidence!</p>
          </div>
        </div>

<Related category={productdata.category} subcat={productdata.subcat}></Related>

    </div>
  ) : <div className="opacity-0"></div>
};

export default Products;
