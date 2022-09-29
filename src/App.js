import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import ProductsContextProvider from "./Global/ProductsContext";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <div className="container">
          <Products />
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
