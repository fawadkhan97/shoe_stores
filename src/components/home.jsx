import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import shoeimage from "../images/hero.png";
import Button from "@material-ui/core/Button";
import "../App.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: "#7832b1",
  },
}));

export function Home() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={`${classes.root} `}>
      <div className="shoe-container">
        <div className="landingpage-div ">
          <h1 className="big-heading heading-color "> Welcome to Shoe Store</h1>
          <p className="landingpage-p margin-botom-small">
            {" "}
            Shoes at Amazing price
          </p>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => history.push("/products")}
          >
            {" "}
            Browse{" "}
          </Button>
        </div>
        <img src={shoeimage} alt="Shoe" style={{ width: "60%" }} />
      </div>
    </div>
  );
}
