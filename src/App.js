// src/App.jsx

import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';
import styles from './App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const apiKey = 'bf275f6';
  const keywords = ['batman', 'matrix', 'harry', 'lord', 'star', 'pirates'];
  const totalPages = 1;

  async function fetchSelectedMovie(movie) {
    setLoadingDetail(true);
    const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
    const data = await response.json();
    if (data.Response === 'True') {
      setSelectedMovie(data);
    }
    setLoadingDetail(false);
  }


  async function fetchRandomMovies() {
    setLoading(true);
    let allMovies = [];
    for (const keyword of keywords) {
      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(`https://www.omdbapi.com/?s=${keyword}&page=${page}&apikey=${apiKey}`);
        const data = await response.json();
        if (data.Response === 'True') {
          allMovies = allMovies.concat(data.Search);
          setMovies(allMovies);
        }
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRandomMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <div>
        <h1>Movie List</h1>
        <div className={styles.searchBarContainer}>
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className={styles.movieListContainer}>
          {loading ? (
            <div className={styles.skeletonContainer}>
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className={styles.skeleton}></div>
              ))}
            </div>
          ) : (
            <MovieList movies={filteredMovies} onSelectMovie={fetchSelectedMovie} />
          )}
        </div>
      </div>

      <div className={styles.movieDetailContainer}>
        {loadingDetail ? (
          <div className={styles.skeleton}></div> // Skeleton loader for Movie Detail
        ) : (
          selectedMovie && <MovieDetail movie={selectedMovie} />
        )}
      </div>
    </div>
  );
};

export default App;
