import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFilter,  faFilterCircleXmark,} from "@fortawesome/free-solid-svg-icons"; // Import the filter icon
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(true);
  const [isactive, Setisactive] = useState(false);
 const[filterProducts,setFilterProducts]=useState([]);  //([])
 const [category,setcategory]=useState([]);
 const[subcat,setsubcat]=useState([]);


 const handleSortChange = (e) => {
  const sortValue = e.target.value;
  let sortedProducts = [...filterProducts];

  if (sortValue === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
  }
  setFilterProducts(sortedProducts);
};


 const toggleCategory=(e)=>{
  if(category.includes(e.target.value))
  {
    setcategory(prev=>prev.filter(item=> item !== e.target.value))
  }
  else
  {
    setcategory(prev=>[...prev,e.target.value]  )
  }
 }

 useEffect(() => {
  if(products.length > 0){
  setFilterProducts(products);}
}, [products]);

  const changefilter = () => {
    setShowFilter(!showFilter);
    Setisactive(!isactive);
  };
  const toggleSubCategory=(e)=>{
    if(subcat.includes(e.target.value))
      {
        setsubcat(prev=>prev.filter(item=> item !== e.target.value))
      }
      else
      {
        setsubcat(prev=>[...prev,e.target.value]  )
      }
  }
  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subcat.length>0){
      productsCopy=productsCopy.filter(item=>subcat.includes(item.subcat));
    }
    setFilterProducts(productsCopy);
  }

  useEffect(()=>{
    applyFilter();
  },[category,subcat])



  return (
    <>
    <div className="flex back5 flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* filter options */}
      <div className="min-w-60 back4">
        <p className="mt-5 sm:mt-20 mb-3 text-xl flex items-center cursor-pointer gap-2 text-gray-700">
          FILTERS
          <FontAwesomeIcon
            onClick={changefilter}
            icon={isactive ? faFilter : faFilterCircleXmark}
            className="h-4 move sm:hidden"
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-2 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
          </div>
        </div>
        {/* subcategories */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">Choices</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Dress"} onChange={toggleSubCategory}/>
              Dresses
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Ethnic"} onChange={toggleSubCategory}/>
              Ethnic
            </p>
          </div>
        </div>
        </div>


      <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-between text-3xl w-full mt-5 sm:mt-6 mb-5 sm:pt-0">
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <select className="text-xs border-2 borderr " onChange={handleSortChange}>
          <option>Sort By</option>
          <option>Relevant</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {filterProducts.map((item, index) => (
          <ProductItems
            key={index}
            name={item.name}
            id={item.id}
            price={item.price}
            image={item.image}
          />
        ))
        }
      </div> 
      </div>

      </div>
    </>
  );
};

export default Collection;
