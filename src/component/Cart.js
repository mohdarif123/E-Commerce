import React, { useContext } from "react";
import { CartContexts } from "../Global/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContexts);
  console.log(shoppingCart, "shoppingCart");
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
                <span className="cart-product-price">${cart.Price}.00</span>
                <span
                  className="inc"
                  onClick={() =>
                    dispatch({ type: "INC", id: cart.id, cart: cart })
                  }
                >
                  <AddIcon />
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span className="dec">
                  <RemoveIcon
                    onClick={() =>
                      dispatch({ type: "DEC", id: cart.id, cart: cart })
                    }
                  />
                </span>
                <span className="product-total-price">
                  ${cart.Price * cart.qty}.00
                </span>
                <span className="delete-product">
                  <DeleteIcon
                    onClick={() =>
                      dispatch({ type: "DELETE", id: cart.id, cart: cart })
                    }
                  />
                </span>
              </div>
            ))
          : "Sorry your cart is currently empty"}
      </div>
    </div>
  );
};

export default Cart;
