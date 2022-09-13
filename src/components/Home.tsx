import React from "react";
import Button from "@mui/material/Button";
const Home:React.FC = () => {
  return (
    <div className="Home">
      <div className="heading">
        <h1 style={{ textAlign: "center" }}>Welcome to Abanon</h1>
      </div>
      <div className="content">
        <div className="hero1">
          <p>
            <h4>Everything you need is just one click away!</h4>
            <br />
            Our site is a one-stop shop for all your needs.
            <br />
            Using our shop could be the best choice you do this week since we
            have <br />
            the best prices for high quality products
            <br />
            Here, you can find anything you are looking for including:
            <br />
          </p>

          <p>
            Furniture
            <br />
            Shoes
            <br />
            Electronics
            <br />
            Other cool stuff!
          </p>
        </div>
        <div className="hero2">
          <h4 style={{ margin: "20" }}>
            {" "}
            Don't lose your valuable time and get started!
          </h4>
          <Button
            href="/allProducts"
            style={{ margin: "10" }}
            variant="contained"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
