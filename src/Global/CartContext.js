import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContexts = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <>
      <CartContexts.Provider value={{ ...cart, dispatch }}>
        {props.children}
      </CartContexts.Provider>
    </>
  );
};

export default CartContextProvider;
