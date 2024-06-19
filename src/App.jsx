import React, { useState } from 'react';
import MovieList from './MovieList';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Manage search term in App

  return (
    <div className="App">
      <h1>Liberty Hall Movie Rentals</h1>
      <input type="text" placeholder="Search Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <MovieList searchTerm={searchTerm} /> {/* Pass searchTerm prop */}
      {/* Other elements for your app */}
    </div>
  );
}
