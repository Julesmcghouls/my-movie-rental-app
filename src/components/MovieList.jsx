import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = ({ searchTerm }) => { // Accept searchTerm prop
const [movies, setMovies] = useState([]);
const [filteredMovies, setFilteredMovies] = useState([]); // Store filtered movies

useEffect(() => {
const fetchData = async () => {
    const response = await axios.get('./MoviesTest.csv');
    const parsedMovies = parseCsvData(response.data);
    setMovies(parsedMovies);
    setFilteredMovies(parsedMovies); // Initially set all movies as filtered
};

fetchData();
}, []);

const parseCsvData = (csvData) => {
const rows = csvData.split('\n');
const headers = rows[0].split(',');

return rows.slice(1).map((row) => {
    const movieData = row.split(',');
    const movieObject = {};
    headers.forEach((header, index) => {
    movieObject[header.trim()] = movieData[index].trim();
    });
    return movieObject;
});
};

useEffect(() => {
// Filter movies based on searchTerm
const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilteredMovies(filtered);
}, [movies, searchTerm]); // Update filteredMovies on movie or searchTerm change

return (
<div>
    <h2>Liberty Hall Movie Rentals</h2>
    <input type="text" placeholder="Search Movies" onChange={(e) => setSearchTerm(e.target.value)} /> {/* Add search input */}
    <ul>
    {filteredMovies.map((movie) => (
        <li key={movie.title}>
        <h3>{movie.title}</h3>
        <p>Genre: {movie.genre}</p>
        {/* Add details button/link if using MovieDetails component */}
        </li>
    ))}
    </ul>
</div>
);
};

export default MovieList;