import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Item(props) {
  const classes = useStyles();
  const { title, price, description, imgSrc } = props;
  const cartCount = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <Link to={`/items/${props.id}`}>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          style={{ height: "80px" }}
          title={title}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
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
    </Card>
  );
}

export default Item;
