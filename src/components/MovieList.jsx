import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
const fetchData = async () => {
    const response = await axios.get('./MoviesTest.csv');
    const parsedMovies = parseCsvData(response.data);
    setMovies(parsedMovies);
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

return (
<div>
    <h2>Liberty Hall Movie Rentals</h2>
    <ul>
    {movies.map((movie) => (
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