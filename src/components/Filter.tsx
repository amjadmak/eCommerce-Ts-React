import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ProductModel } from "../ProductModel";
const defaultValues = {
  name: "",
  price: 0,
  category: "all",
};
interface Props{
  setFilteredInfo: React.Dispatch<React.SetStateAction<ProductModel[]>>;
  info: ProductModel[];
}

const Filter: React.FC<Props> = ({ setFilteredInfo, info }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e: any):void => {  //The best type for this one. I googled this issue and best practice was to use "any"
    // const { name, value }= e.target;
    const name:string = e.target.name
    const value:string| number = e.target.value
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent ):void => {
    event.preventDefault();
    let filtering = info
      ?.filter((product?: ProductModel) => {
        return !formValues?.name
          ? product
          : product?.title.toLowerCase().includes(formValues.name.toLowerCase());
      })
      .filter((product: ProductModel) => {
        return !formValues.price ? product: product.price <= formValues.price;
      })
      ?.filter((product?: ProductModel) => {
        return formValues.category === "all"
          ? product
          : product?.category.name === formValues.category;
      });
    setFilteredInfo(filtering);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        sx={{ alignItems: 'center',  justifyContent: 'center', m:3 , flexDirection: 'row'}}
      >
        <Grid margin={2} item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid margin={2} item>
          <TextField
            id="price-input"
            name="price"
            label="Maximum price"
            type="number"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid margin={2} item>
          <FormControl>
            <Select
              name="category"
              value={formValues?.category || "all"}
              onChange={handleInputChange}
            >
              <MenuItem key="All" value="all">
                All
              </MenuItem>
              <MenuItem key="Clothes" value="Clothes">
                Clothes
              </MenuItem>
              <MenuItem key="Furniture" value="Furniture">
                Furniture
              </MenuItem>V
              <MenuItem key="Electronics " value="Electronics">
                Electronics
              </MenuItem>
              <MenuItem key="Shoes " value="Shoes">
                Shoes
              </MenuItem>
              <MenuItem key="Others " value="Others">
                Others
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          sx={{ background: "#1976d2", color: "#ffffff", width: "10%", ml: 3, m:2 }}
          variant="contained"
          type="submit"
        >
          Filter
        </Button>
      </Grid>
    </form>
  );
};
export default Filter;
