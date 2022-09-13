import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ProductModel } from "../ProductModel";
const defaultValues = {
  name: "",
};
interface Props{
  filteredInfo: ProductModel[];
  setFilteredInfo: React.Dispatch<React.SetStateAction<ProductModel[]>>;
}

const Search:React.FC<Props> = ({ setFilteredInfo, filteredInfo }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e: any) => { //It should be React.ChangeEvent<HTMLInputElement> but it doesn't work
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) :void => {
    event.preventDefault();
    let searching = filteredInfo.filter((product) => {
      return !formValues.name
        ? product
        : product.title.toLowerCase().includes(formValues.name.toLowerCase());
    });
    setFilteredInfo(searching);
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: "1px 2px", display: "flex", alignItems: "end", width: 250 }}
      >
        <InputBase
          name="name"
          type="text"
          onChange={handleInputChange}
          value={formValues.name}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
export default Search;
