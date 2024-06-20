import React from 'react';
import Papa from 'papaparse';
import './App.css';

// Define the App component
function App() {
  // Define a state variable to store the CSV data
  const [csvData, setCsvData] = React.useState([]);

  // Use the useEffect hook to perform side effects
  React.useEffect(() => {
    // Parse the CSV file using PapaParse when the component mounts
    Papa.parse('./MoviesTest.csv', {
      download: true, // Download the CSV file
      header: true, // Treat the first row as the header
      complete: function(results) {
        // Set the CSV data to the parsed results when parsing is complete
        setCsvData(results.data);
      }
    });
  }, []); // Run the effect only once, on component mount

  // Render the App component
  return (
    <div className="center-container">
      {/* Display the Liberty Hall logo */}
      <div>
        <a href="https://www.libertyhall.net/" target="_blank">
          <img src="/LibertyHall.svg" className="logo" alt="React logo" /> 
        </a>
      </div>
      {/* Display the CSV data in a table */}
      <div>
        <table>
          <thead>
            <tr>
              {/* Display the header row */}
              <th>Title</th>
              <th>Director</th>
              <th>Year</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the CSV data and display each row */}
            {csvData.map((row) => (
              <tr key={row.title}>
                <td>{row.title}</td>
                <td>{row.director}</td>
                <td>{row.year}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
