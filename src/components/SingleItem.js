import { Typography, Grid, Button, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import itemDetails from "../data/itemDetails";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { addToCart } from "../redux/index";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
  },
  button: {
    margin: theme.spacing(1),
  },
  desc: {
    padding: "0px 10px 0px 10px"
  }
}));

const SingleItem = ({ match }) => {
  const classes = useStyles();
  const { itemId } = match.params;
  const item = itemDetails.find((item) => item.id === itemId);
  const dispatch = useDispatch();

  if (!item) {
    return (
      <Typography align="center" variant="h2">
        Item not found!
      </Typography>
    );
  }

  return (
    <div>
      <Grid className={classes.container} container>
        <Grid item sm={2} xs={false} />
        <Grid item sm={8} xs={12}>
          <Typography align="center" variant="h3">
            {item.title}
          </Typography>
          <Typography align="center" variant="subtitle1">
            {item.price}
          </Typography>
          <Typography align="center" variant="h3">
            <img src={item.imgSrc} />
          </Typography>
          <Typography className={classes.desc} align="justify" variant="body1">
            {item.description}
          </Typography>
          <Typography align="center" variant="div">
            <CardActions disableSpacing>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddShoppingCartIcon />}
                onClick={() => dispatch(addToCart())}
              >
                Add To Cart
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Buy
              </Button>
            </CardActions>
          </Typography>
        </Grid>
        <Grid item sm={2} xs={false} />
      </Grid>
    </div>
  );
};

export default SingleItem;
