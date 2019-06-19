import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minHeight: 250,
    maxHeight: 250
  }
});

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const classes = useStyles();
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`The movie titled: ${movie.Title}`}
          image={poster}
          height="140"
          title={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ({movie.Year})
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;
