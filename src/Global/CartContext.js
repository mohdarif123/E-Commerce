import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContexts = createContext();

const CartContextProvider = (props) => {
  const [cartProduct, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <>
      <CartContexts.Provider value={{ cartProduct, dispatch }}>
        {props.children}
      </CartContexts.Provider>
    </>
  );
};

export default CartContextProvider;
