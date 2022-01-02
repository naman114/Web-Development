import React from "react";
class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.posterUrl} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.title}</div>
          <div className="plot">{movie.plot}</div>
          <div className="footer">
            <div className="rating">{movie.id}</div>
            <button className="favourite-btn">Favourite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
