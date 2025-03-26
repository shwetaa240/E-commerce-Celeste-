import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
  const curr = "$";
  const fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setShowsearch] = useState(true);
  const [cart, setcart] = useState({});
  const [cartUpdated, setCartUpdated] = useState(false);
  const navigate= useNavigate();

  const addCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    setcart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        [size]: (prevCart[itemId]?.[size] || 0) + 1,
      },
    }));

    setCartUpdated((prev) => !prev);
  };

  const getcart = () => {
    let tc = 0;
    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) tc += cart[items][item];
        } catch (error) {
          console.error("Error calculating cart quantity:", error);
        }
      }
    }
    return tc;
  };

  const updateQuantity = (itemId, size, quantity) => {
    setcart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        [size]: quantity,
      },
    }));
    setCartUpdated((prev) => !prev);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cart) {
      const itemInfo = products.find((product) => product.id === itemId);
      if (!itemInfo) continue;

      for (const size in cart[itemId]) {
        try {
          if (cart[itemId][size] > 0) {
            totalAmount += itemInfo.price * cart[itemId][size];
          }
        } catch (error) {
          console.error("Error calculating cart total:", error);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    curr,
    fee,
    setShowsearch,
    showsearch,
    search,
    setsearch,
    addCart,
    getcart,
    cartUpdated,
    cart,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
