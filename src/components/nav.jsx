import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 7,
    top: -1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const Nav = ({ ProductsInCart, CartQuantity }) => {
  const navstyle = {
    backgroundColor: "Black",
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const linkstyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  };

  const liststyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav style={navstyle}>
        <ul style={linkstyle}>
          <li>
            <Link style={liststyle} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link style={liststyle} to="/products">
              Products
            </Link>
          </li>

          <li>
            <Link style={liststyle} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={liststyle} to="/cart">
              Cart
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={CartQuantity} color="Secondary">
                  <ShoppingCartIcon color="secondary" fontSize="large" />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};
