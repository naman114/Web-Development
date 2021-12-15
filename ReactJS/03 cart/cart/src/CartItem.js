import React from "react";
import { Icon } from "@iconify/react";

const CartItem = (props) => {
  const { price, title, qty, img, id } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <Icon
            icon="akar-icons:circle-plus"
            className="action-icons"
            onClick={() => onIncreaseQuantity(product)}
          />
          <Icon
            icon="akar-icons:circle-minus"
            className="action-icons"
            onClick={() => onDecreaseQuantity(product)}
          />
          <Icon
            icon="carbon:delete"
            className="action-icons"
            onClick={() => onDeleteProduct(id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default CartItem;
