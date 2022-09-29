import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import ProductsContextProvider from "./Global/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import NotFound from "./component/NotFound";
import CartContextProvider from "./Global/CartContext";
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
