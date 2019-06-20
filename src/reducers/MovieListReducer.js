const MovieListReducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "SEARCH_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload
        };
      case "SEARCH_MOVIES_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
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

  export default MovieListReducer;