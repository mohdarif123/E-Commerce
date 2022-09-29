import React, { createContext, useState } from "react";
import dslr from "../assests/dslr.jpg";
import headphones from "../assests/headphones.jpg";
import iphone from "../assests/iphone.jpg";
import microphone from "../assests/microphone.jpg";
import perfume from "../assests/perfume.jpg";
import rings from "../assests/rings.jpg";
import watch from "../assests/watch.jpg";
import shoes from "../assests/shoes.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dslr",
      Price: 300,
      image: dslr,
      status: "hot",
    },
    {
      id: 2,
      name: "Head Phones",
      Price: 350,
      image: headphones,
      status: "new",
    },
    {
      id: 3,
      name: "Iphone",
      Price: 400,
      image: iphone,
      status: "hot",
    },
    {
      id: 4,
      name: "Blue Yetti",
      Price: 6500,
      image: microphone,
      status: "hot",
    },
    {
      id: 5,
      name: "Perfume",
      Price: 800,
      image: perfume,
      status: "new",
    },
    {
      id: 6,
      name: "Rings",
      Price: 300,
      image: rings,
      status: "hot",
    },
    {
      id: 7,
      name: "Watch",
      Price: 900,
      image: watch,
      status: "hot",
    },
    {
      id: 8,
      name: "Shoes",
      Price: 9000,
      image: shoes,
      status: "hot",
    },
  ]);
  return (
    <>
      <ProductsContext.Provider value={{ products: [...products] }}>
        {props.children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
