import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";

const CartTotal = () => {
  const { curr, fee, getCartAmount, cart } = useContext(Shopcontext);

  // Dynamically compute cart total when cart changes
  const cartTotal = getCartAmount();

  return (
    <div className="w-full">
      <div className="text-2xl mb-3">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {curr} {cartTotal}.00
          </p>
        </div>

        <hr />

        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {curr} {fee}
          </p>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <b>Total</b>
          <b>
            {curr} {cartTotal === 0 ? 0 : cartTotal + fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
