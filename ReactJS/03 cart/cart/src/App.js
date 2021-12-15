import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { myFirebaseApp } from "./index";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

class App extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR");
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = getFirestore(myFirebaseApp);
    this.productsCol = collection(this.db, "products");
  }

  componentDidMount() {
    // Make API calls, attach event listeners, start timers etc
    console.log("componentDidMount");

    /* getDocs(productsCol).then((productSnapshot) => {
      console.log(productSnapshot);
      productSnapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = productSnapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({ products, loading: false });
    }); */

    const foo = onSnapshot(this.productsCol, (productSnapshot) => {
      productSnapshot.docs.map((doc) => {
        console.log("Current data: ", doc.data());
      });

      const products = productSnapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({ products, loading: false });
    });
    console.log({ foo });
  }

  componentDidUpdate(prevProps, prevState) {
    //  Called immediately after updating occurs. Not called for the initial render.
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("props", this.props);
    console.log("state", this.state);

    // setState without condition here will cause infinite loop
  }

  componentWillUnmount() {
    // Just before component is unmounted from DOM. Used for cleanup of eventlistener, stop some timers, cancel pending API calls
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // We don't need to increment the qty locally. Doing that on firebase is sufficient
    // products[index].qty++;

    // this.setState({
    //   products,
    // });

    const docRef = doc(this.db, "products", products[index].id);

    updateDoc(docRef, { qty: products[index].qty + 1 })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;
    // products[index].qty--;

    // this.setState({
    //   products,
    // });

    const docRef = doc(this.db, "products", products[index].id);

    updateDoc(docRef, { qty: products[index].qty - 1 })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({ products: items });

    const docRef = doc(this.db, "products", id);

    deleteDoc(docRef)
      .then(() => {
        console.log("Document deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  getCartCount() {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  getCartTotal() {
    const { products } = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal += product.qty * product.price;
    });
    return cartTotal;
  }
  addProduct() {
    // Binding was required since this function is not an arrow function
    addDoc(this.productsCol, {
      img: "",
      price: 900,
      qty: 12,
      title: "Washing machine",
    })
      .then((docRef) => {
        // The above data will be converted into a document and added to our products collection
        console.log(docRef);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log("RENDER");
    const { products, loading } = this.state;
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <button onClick={this.addProduct.bind(this)}>Add Product</button>
        <div
          style={{
            padding: 10,
            fontSize: 20,
          }}
        >
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

/*
{
          price: 9999,
          title: "Phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1782&q=80",
          id: 1,
        },
        {
          price: 199,
          title: "Wallet",
          qty: 11,
          img: "https://images.unsplash.com/photo-1612023395494-1c4050b68647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          id: 2,
        },
        {
          price: 999,
          title: "Watch",
          qty: 10,
          img: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          id: 3,
        },
*/
