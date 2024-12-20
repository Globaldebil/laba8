import React from 'react';
import styles from '../styles/MovieList.module.css';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
          <li 
            key={movie.imdbID} 
            className={styles.movieItem}
            onClick={() => onSelectMovie(movie)}
            >
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}
              alt={movie.Title}
              className={styles.moviePoster}
            />
            <h3 className={styles.movieTitle}>{movie.Title}</h3>
            <p className={styles.movieYear}>{movie.Year}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;