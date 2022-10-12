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
    {
      id: 9,
      name: "watch",
      Price: 1000,
      image: watch,
      status: "hot",
    },
    {
      id: 10,
      name: "watch",
      Price: 9000,
      image: watch,
      status: "new",
    },
    {
      id: 11,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 12,
      name: "Iphone",
      Price: 90000,
      image: iphone,
      status: "new",
    },
    {
      id: 14,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 15,
      name: "Iphone",
      Price: 90000,
      image: iphone,
      status: "new",
    },
    {
      id: 16,
      name: "Rings",
      Price: 300,
      image: rings,
      status: "hot",
    },
    {
      id: 17,
      name: "Watch",
      Price: 900,
      image: watch,
      status: "hot",
    },
    {
      id: 18,
      name: "Shoes",
      Price: 9000,
      image: shoes,
      status: "hot",
    },
    {
      id: 19,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 20,
      name: "Iphone",
      Price: 90000,
      image: iphone,
      status: "new",
    },
    {
      id: 21,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 17,
      name: "Watch",
      Price: 900,
      image: watch,
      status: "hot",
    },
    {
      id: 18,
      name: "Shoes",
      Price: 9000,
      image: shoes,
      status: "hot",
    },
    {
      id: 19,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 20,
      name: "Iphone",
      Price: 90000,
      image: iphone,
      status: "new",
    },
    {
      id: 21,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 22,
      name: "Perfume",
      Price: 2000,
      image: perfume,
      status: "hot",
    },
    {
      id: 23,
      name: "Watch",
      Price: 900,
      image: watch,
      status: "hot",
    },
    {
      id: 24,
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
