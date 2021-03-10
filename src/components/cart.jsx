import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
}));

export const Cart = ({
  ProductsInCart,
  HandleIncrementCartQuantity,
  HandledecrementCartQuantity,
}) => {
  const classes = useStyles();

  return (
    <div>
      {" "}
      <Grid
        container
        direction="column"
        wrap="wrap"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {ProductsInCart?.map((data) => (
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="220"
                  image={data.img[0]}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}{" "}
                </Typography>
                <Typography component="h2" variant="h6">
                  {data.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.description.slice(0, 215) + "........"}
                </Typography>

                <CardActions>
                  <button onClick={() => HandleIncrementCartQuantity(data)}>
                    <AddIcon />
                  </button>
                  <span>{data.Quantity}</span>
                  <button
                    disabled={data.Quantity > 1 ? false : true}
                    onClick={() => HandledecrementCartQuantity(data)}
                  >
                    <RemoveIcon />
                  </button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
