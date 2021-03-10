import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Nav } from "./components/nav";
import { About } from "./components/about";
import { Cart } from "./components/cart";
import { Home } from "./components/home";
import { Products } from "./components/products";

function App() {
  const [AddToCart, setAddToCart] = useState([]);
  const ProductQuantityInCart = (Product) => {
    if (AddToCart.indexOf(Product) === -1) {
      Product.Quantity++;
      return setAddToCart([...AddToCart, Product]);
    } else {
      let newarr = [...AddToCart];

      newarr?.map((arr) => (arr.id === Product.id ? (arr.Quantity += 1) : ""));

      console.log(
        "product quantity is",
        Product.Quantity,
        " new arr is ",
        newarr
      );

      return setAddToCart(newarr);
    }
  };
  const HandleAddToCart = (Product) => {
    if (AddToCart.length === 0) {
      Product.Quantity++;
      setAddToCart([...AddToCart, Product]);
    } else {
      ProductQuantityInCart(Product);
    }
  };

  const CartQuantity = AddToCart?.reduce((a, b) => {
    console.log("reduce is", a + b.Quantity);
    return a + b.Quantity;
  }, 0);

  const HandleIncrementCartQuantity = (product) => {
    let newarr = [...AddToCart];

    newarr?.map((arr) => (arr.id === product.id ? (arr.Quantity += 1) : ""));
    return setAddToCart(newarr);
  };

  const HandledecrementCartQuantity = (product) => {
    let newarr = [...AddToCart];

    newarr?.map((arr) => (arr.id === product.id ? (arr.Quantity += -1) : ""));
    return setAddToCart(newarr);
  };

  return (
    <>
      <Router>
        <Nav ProductsInCart={AddToCart} CartQuantity={CartQuantity} />
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/about" component={About} />{" "}
          <Route path="/products">
            <Products HandleAddToCart={HandleAddToCart} />{" "}
          </Route>{" "}
          <Route path="/cart">
            <Cart
              ProductsInCart={AddToCart}
              HandleIncrementCartQuantity={HandleIncrementCartQuantity}
              HandledecrementCartQuantity={HandledecrementCartQuantity}
            />{" "}
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
