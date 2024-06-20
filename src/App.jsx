import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

/**
 * The main App component that fetches and displays data from a CSV file.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
function App() {
  // State hooks to store the data and search term
  const [data, setData] = useState([]); // The data from the CSV file
  const [searchTerm, setSearchTerm] = useState(''); // The search term entered by the user

  /**
   * Fetches the data from the CSV file using PapaParse and updates the state.
   */
  useEffect(() => {
    // Fetch the CSV file
    fetch('./MoviesTest.csv')
      .then((response) => response.text())
      .then((text) => {
        // Parse the CSV data using PapaParse
        const { data } = Papa.parse(text, { header: true });
        // Update the state with the parsed data
        setData(data);
      });
  }, []); // Run this effect only once, when the component mounts

  /**
   * Filters the data based on the search term.
   * @returns {Array} The filtered data.
   */
  const filteredData = data.filter((row) => {
    // Convert the row data to lowercase and join them with spaces
    const rowData = Object.values(row).join(' ').toLowerCase();
    // Check if the search term is present in the row data
    return rowData.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app-container">
      {/* Top container with logo and search input */}
      <div className="top-container">
        <div className="logo-container">
          {/* Link to the Liberty Hall website */}
          <a href="https://www.libertyhall.net/" target="_blank">
            <img src="/LibertyHall.svg" className="logo" alt="React logo" />
          </a>
        </div>
        {/* Search input to filter the data */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="data-container">
        <div className="table-container">
          {/* Table to display the data */}
          <table className="table">
            <thead>
              <tr>
                {/* Header row with column names */}
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Body rows with filtered data */}
              {filteredData.map((row) => (
                <tr key={row.Title}>
                  {/* Data cells for each column */}
                  {Object.values(row).map((value) => (
                    <td key={value}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

