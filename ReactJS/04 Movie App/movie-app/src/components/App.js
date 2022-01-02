import React from "react";

import "../App.css";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./Moviecard";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    // subscribe to store changes
    store.subscribe(() => {
      console.log("UPDATED");
      // Avoid using this method
      this.forceUpdate();
    });

    // make api call
    // dispatch action

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("STATE", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, idx) => {
              return <MovieCard movie={movie} key={idx} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
