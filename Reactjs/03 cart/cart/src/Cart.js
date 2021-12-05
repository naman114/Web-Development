import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 199,
          title: "Wallet",
          qty: 11,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Watch",
          qty: 10,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
