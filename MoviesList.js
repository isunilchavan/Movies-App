import React from "react";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  const deleteMovieHandler = (movieId) => {
    props.onDeleteMovie(movieId);
  };

  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDeleteMovie={deleteMovieHandler}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
