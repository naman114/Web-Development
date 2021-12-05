class LikeButton extends React.Component {
  render() {
    return React.createElement("button", null, "Like");
  }
}

const app = document.getElementById("app");
ReactDOM.render(React.createElement(LikeButton), app);
// We ask ReactDOM to render the LikeButton inside the app

// For complex UIs, this function based approach makes code harder to read
// Solution is JSX: Javascript XML which is similar to HTML syntax
