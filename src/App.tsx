import React from 'react';
import "./style.css";
import NavBar from "./components/NavBar";
import AllProducts from "./Routes/AllProducts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./Routes/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Routes/Cart";
import { useState, useEffect } from "react";
import About from "./components/About";
import { ProductModel } from "./ProductModel";
const  App : React.FC= () => {   // with arrow it worked, but if we wrote default App, it would not work.

  const [info, setInfo] = useState<ProductModel[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<ProductModel[]>([]);
  useEffect(():void => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=30")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setFilteredInfo(data);
      });
  }, []);

  return (
    <div style={{ background: "#fafafa", height:"500px" }}>
      <NavBar setFilteredInfo={setFilteredInfo} filteredInfo={filteredInfo} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/allProducts"
          element={
            <AllProducts
              info={info}
              filteredInfo={filteredInfo}
              setFilteredInfo={setFilteredInfo}
            />
          }
        />
        <Route path="/allproducts/:productId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App
