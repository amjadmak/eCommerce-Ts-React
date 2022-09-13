import React from "react";
import Filter from "../components/Filter";
import ListOfProducts from "../components/ListOfProducts";
import { ProductModel } from "../ProductModel";
interface Props{
  info: ProductModel[];
  filteredInfo: ProductModel[];
  setFilteredInfo: React.Dispatch<React.SetStateAction<ProductModel[]>>;
}

const AllProducts: React.FC<Props> = ({ info, filteredInfo, setFilteredInfo}) => {

  return (
    <>
   
      <Filter  info={info} setFilteredInfo={setFilteredInfo}  />
      <ListOfProducts filteredInfo={filteredInfo}/>
    </>
  );
};
export default AllProducts;
