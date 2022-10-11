export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty;
        updatedPrice = totalPrice + product.Price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;
    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.Price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.Price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = product;
      } else {
        return state;
      }
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product - qty;
      updatedQty = totalPrice - product.Price * product.qty;

      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "EMPTY":
      return { shoppingCart: [], totalPrice: 0, qty: 0 };
    default:
      return state;
  }
};
