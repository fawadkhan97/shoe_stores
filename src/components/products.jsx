import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FetchData from "../fetchdata";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: "100%",
  },
}));

export const Products = ({ HandleAddToCart }) => {
  const classes = useStyles();

  const [Product, setProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProduct(await FetchData());
    };
    fetchApi();
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-h1"> Buy all the products that you need </h1>
      <Grid container direction="row" wrap="wrap" justify="center" spacing={3}>
        {Product.map((data) => (
          <React.Fragment key={data.id}>
            <Grid item xs={12} sm={6} md={4} xl={3}>
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
                    {data.name}
                  </Typography>
                  <Typography component="h2" variant="h6">
                    {data.price}
                  </Typography>
                  <Typography component="h2" variant="h6">
                    {data.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.description.slice(0, 215) + "........"}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => HandleAddToCart(data)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
};
