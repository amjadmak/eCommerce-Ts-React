import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "react-query";
import { useState } from "react";
import axios, { AxiosPromise } from "axios";
import {CartProduct} from "../ProductModel"
import "../style.css";
interface Props {
  id: number;
  title: string;
  price: number;
  image: string;

}

const OneCard: React.FC<Props> = ({  title, price, image, id }) => {
  const [addedPopup, setaddedPopup] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  //Reacg query and axios along with handlePopup function should be explained properly in the future. From Line 31 to 45
  const handlePopup = (): any => {
    setaddedPopup(true);
    setTimeout(() => setaddedPopup(false), 4000);
  };

  const postData = useMutation((Addproduct: CartProduct): AxiosPromise => {
    return axios
      .post("https://abanon-cart.herokuapp.com/cart", Addproduct)
      .catch((): void => {
        axios.patch(`https://abanon-cart.herokuapp.com/cart/${Addproduct.id}`, {
          quantity: Addproduct.quantity,
        });
      })
      .then(handlePopup());
  });
  return (
    <Card sx={{ maxWidth: 345, p: "15" }} style={{ height: "" }}>
      <CardActionArea href={`allproducts/${id}`}>
        {" "}
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={title}
          className="css-o69gx8-MuiCardMedia-root"
        />
        <CardContent>
          <Typography sx={{ color: "#494949" }} component="div">
            {title}
          </Typography>
          <Typography
            sx={{ color: "#494949" }}
            gutterBottom
            // variant=""
            component="div"
          >
            Price: {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-between" }}>
        <TextField
          sx={{ width: "20%", mr: "40%" }}
          type="number"
          value={quantity}
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuantity(parseInt(e.target.value));
          }}
        ></TextField>
        <Button
          sx={{ background: "#1976d2", color: "#ffffff" }}
          onClick={() => {
            postData.mutate({
              id: id,
              title: title,
              price: price,
              image: image,
              quantity: quantity,
              total: price * quantity,
            });
          }}
          size="small"
          color="primary"
          // background="ff9e80"
        >
          Add to Cart
        </Button>
      </CardActions>

      {addedPopup ? (
        <div id="addedPopup">The product was added to the cart!!</div>
      ) : null}
    </Card>
  );
};
export default OneCard;
