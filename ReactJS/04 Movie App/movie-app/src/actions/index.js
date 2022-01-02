// Action creators and action types are conventions

// These are called action types.
export const ADD_MOVIES = "ADD_MOVIES";

// These functions are called action creators
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
