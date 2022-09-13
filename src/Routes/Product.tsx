import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneProduct from "../components/OneProduct";
import { ProductModel } from "../ProductModel";
const Product = () => {
  const { productId } = useParams();
  const [ProductInfo, setProductInfo] =  useState<ProductModel>();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data);
      });
  }, [productId]);

  return (
    <>
      <OneProduct ProductInfo={ProductInfo} />
    </>
  );
};
export default Product;
