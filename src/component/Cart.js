import React, { useContext } from "react";
import { CartContexts } from "../Global/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContexts);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  {<img src={cart.image} alt="not found" />}
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">${cart.price}.00</span>
                <span className="inc">
                  <AddIcon />
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span className="dec">
                  <RemoveIcon />
                </span>
                <span className="product-total-price">500.00</span>
                <span className="delete-product">
                  <DeleteIcon />
                </span>
              </div>
            ))
          : "Sorry your cart is currently empty"}
      </div>
    </div>
  );
};

export default Cart;
