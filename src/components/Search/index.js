import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    width: 100,
    height: 40,
    marginLeft: 20,
  }
}));

const Search = ({ search }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <Button variant="contained" onClick={callSearchFunction} type="submit" color="primary" className={classes.button}>
        SEARCH
      </Button>
    </form>
  );
};

export default Search;
