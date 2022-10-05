import React, { useContext } from "react";
import { CartContexts } from "../Global/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContexts);

  const handleTokenStripe = async (token) => {
    const product = { name: "All Products", price: totalPrice };
    const response = await axios.post("http://localhost:8080/checkout", {
      product,
      token,
    });
    console.log(response,"resp")
  };
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
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">Total Item</div>
              <div className="items-count">{qty}</div>
            </div>

            <div className="total-price-section">
              <div className="just-title">Total Price</div>
              <div className="items-price">${totalPrice}.00</div>
            </div>

            {/* stripe  */}
            <div className="stripe-section">
              <StripeCheckout
                token={handleTokenStripe}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name="ALL PRODUCTS"
                stripeKey="pk_test_51KZAdcSEXD4l31rsr2pG1L8OhHiGxzozDPdF92VdQeJ0LsTX2zmMn0ovpNHO9ZWtiAdqadPdPnTEccX4UhXOJdVN00So9UBksB"
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
