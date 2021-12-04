import React from "react";
import { Icon } from "@iconify/react";
import "./index.css";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 9999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    console.log("this", this);
    console.log("this.state", this.state);
  };

  // Should return JSX
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <Icon
              icon="akar-icons:circle-plus"
              className="action-icons"
              onClick={this.increaseQuantity}
            />
            <Icon icon="akar-icons:circle-minus" className="action-icons" />
            <Icon icon="carbon:delete" className="action-icons" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "black",
  },
};

export default CartItem;
