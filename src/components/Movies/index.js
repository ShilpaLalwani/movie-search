import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Movie from './Movie';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center"
    }
}));

const Movies = ({ movies }) => {
    const classes = useStyles();
    return (
        <Grid container
            className={classes.root} spacing={3}>
                {movies.map((movie, index) => (
                    <Grid item xs={3} key={`${index}-${movie.Title}`}>
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    </Grid>
                ))}
        </Grid>
    )
}

export default Movies;