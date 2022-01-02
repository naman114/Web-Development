import { ADD_MOVIES } from "../actions";

export default function movies(state = [], action) {
  // state is a list of movies - empty if undefined
  // express an intent to change state
  if (action.type === ADD_MOVIES) return action.movies;
  return state;
}
