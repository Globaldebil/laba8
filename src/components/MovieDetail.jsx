// src/components/MovieDetails.jsx

import React from 'react';
import styles from '../styles/MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieHeader}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
          alt={movie.Title}
          className={styles.moviePoster}
        />
        <div className={styles.movieInfo}>
          <h2 className={styles.movieTitle}>{movie.Title}</h2>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
        </div>
      </div>
      
      <div className={styles.moviePlot}>
        <h3>Plot</h3>
        <p>{movie.Plot}</p>
      </div>

      <div className={styles.movieExtras}>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
      </div>
    </div>
  );
};

export default MovieDetails;
