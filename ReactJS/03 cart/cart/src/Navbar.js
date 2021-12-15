import React from "react";
import { Icon } from "@iconify/react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <Icon
          icon="ant-design:shopping-cart-outlined"
          style={styles.cartIcon}
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    height: 40,
    width: "70%",
    background: "orange",
    display: "flex",
    justifyContent: "flex-end",
  },
  cartIconContainer: {
    display: "flex",
    alignItems: "center",
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  cartCount: {
    fontSize: 20,
    background: "cyan",
    borderRadius: "50%",
    padding: 5,
  },
};

export default Navbar;
