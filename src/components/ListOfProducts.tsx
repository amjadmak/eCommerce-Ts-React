import React from "react";
import OneCard from "./Card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ProductModel } from "../ProductModel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1976d2" : "#1976d2",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
interface Props{
  filteredInfo: ProductModel[];
}

const ListOfProducts: React.FC<Props> = ({ filteredInfo }) => {
  return (
    <>
      <Box padding={5} sx={{ background: "#fafafa" }}>
        <Grid
          style={{ padding: "5" }}
          sx={{ background: "#fafafa", flexGrow: 1 }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredInfo.map((product: ProductModel) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={product.id}>
                <OneCard
                  id={product.id}
                  image={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default ListOfProducts;
