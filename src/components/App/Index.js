import React, { useReducer, useEffect } from 'react';

import './App.css';
import Reducer from '../../Reducer';
import Header from '../Header';
import Movies from '../Movies';
import spinner from '../../ajax-loader.gif';
import Search from '../Search';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=harry potter&apikey=4a3b711b';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=7338c9af`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header/>
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Movies movies={movies}/>
        )}
      </div>
    </div>
  );
};

export default App;
