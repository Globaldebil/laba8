import React from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search movies..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
