import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "./Search";
import { Link } from "react-router-dom";
import {ProductModel} from '../ProductModel'

interface Props {
  setFilteredInfo: React.Dispatch<React.SetStateAction<ProductModel[]>>; 
  filteredInfo: ProductModel[];
}
const NavBar: React.FC<Props> = ({ setFilteredInfo, filteredInfo }) => {
  return (
    <AppBar position="static" style={{ background: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: "1", cursor: "pointer" }}>
          ABANON
        </Typography>
        <Button href="/" sx={{ mr: 6, color: "#ffffff" }}>
          Home
        </Button>
        <Button href="/allProducts" sx={{ mr: 6, color: "#ffffff" }}>
          Products
        </Button>
        <Button href="/About" sx={{ mr: 6, color: "#ffffff" }}>
          About us
        </Button>
        <Search setFilteredInfo={setFilteredInfo} filteredInfo={filteredInfo} />
        <Link
          to="/Cart"
          className=".css-1h0b4bo-MuiSvgIcon-root"
          style={{ color: "#fffff" }}
        >
          <ShoppingCartIcon sx={{ fontSize: "30", cursor: "pointer", ml: 3 }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
