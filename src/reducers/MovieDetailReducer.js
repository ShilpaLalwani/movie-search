const MovieDetailReducer = (state, action) => {
  switch (action.type) {

    case "SEARCH_MOVIE_DETAIL":
      return {
        ...state,
        loading: false,
        moviedetail: action.payload
      };
    case "SEARCH_MOVIE_DETAIL_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default MovieDetailReducer;