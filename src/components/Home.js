import React from "react";
import { Grid } from "@material-ui/core";
import Item from "./Item";
import { makeStyles } from "@material-ui/styles";
import itemDetails from "../data/itemDetails";


const useStyles = makeStyles({
  root: {
    marginTop: "10px",
  },
  items: {
    margin: "5px 0 5px 0",
  },
});

function Home(props) {
  const classes = useStyles();

  const getItem = (itemObj) => {
    return (
      <React.Fragment key={itemObj.id}>
        <Grid className={classes.items} item={true} sm={6} xs={12}>
            <Item {...itemObj} id={itemObj.id}/>
        </Grid>
      </React.Fragment>
    );
  };

  const itemList = itemDetails.filter((data)=>{
    if(props.search == '')
        return data
    else if(data.title.toLowerCase().includes(props.search.toLowerCase()) || data.title.toLowerCase().includes(props.search.toLowerCase())){
        return data
    }
  }).map((itemObj) => getItem(itemObj))

  return (
    <div>
      <Grid className={classes.root} container spacing={1}>
        <Grid container item={true} sm={2} xs={false}></Grid>
        <Grid container item={true} sm={8} xs={12}>
          {itemList}
        </Grid>
        <Grid container item={true} sm={2} xs={false}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
