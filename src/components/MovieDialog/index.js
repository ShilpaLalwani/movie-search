import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: 100,
    left: 450
  },
  poster: {
    width: 340,
    height: 130
  },

}));

const MovieDialog = (props) => {
  const { onClose, moviedetail, open, errorMessage } = props;
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      {!errorMessage ?
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {moviedetail.Title}
          </Typography>
          <img alt={moviedetail.Title} src={moviedetail.Poster} className={classes.poster} />
          <Typography variant="body1" id="simple-modal-description">
            {moviedetail.Plot}
          </Typography>
          <Typography variant="caption" display="block">Year - {moviedetail.Year}</Typography>
          <Typography variant="caption" display="block">Rating - {moviedetail.imdbRating}</Typography>
          <Typography variant="caption">Votes - {moviedetail.imdbVotes}</Typography>
        </div> :
        <div className="errorMessage">{errorMessage}</div>
      }
    </Modal>
  );
}

export default MovieDialog;