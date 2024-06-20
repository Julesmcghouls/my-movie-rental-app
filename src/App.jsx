import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

// Define a functional component named "App"
function App() {
  // Declare a state variable named "data" using the useState hook
  // The initial value of the state is an empty array
  const [data, setData] = useState([]);

  // useEffect hook is used for side effects in functional components
  // The second argument is an empty array, which means this effect will only run once (on mount)
  useEffect(() => {
    // Call the Papa.parse function to parse a CSV file
    // The first argument is the URL of the CSV file
    // The second argument is an options object
    //   - The "download" property is set to true, which means the file will be downloaded before parsing
    //   - The "header" property is set to true, which means the first row of the CSV file will be treated as the header
    //   - The "complete" property is a callback function that will be called when parsing is complete
    //     - The callback function takes an object as an argument with a "data" property containing the parsed data
    //     - The callback function calls the setData function to update the state with the parsed data
    Papa.parse('./MoviesTest.csv', {
      download: true,
      header: true,
      complete: ({ data }) => setData(data),
    });
  }, []);

  // The component returns JSX that will be rendered to the page
  return (
    // The root element is a div with the class name "center-container"
    // This div is used to center the content of the page
    <div className="center-container">
      <div className="data-container">
        <div>
          {/* An anchor (link) element with the href attribute set to the Liberty Hall website */}
          {/* The link contains an image with the src attribute set to the Liberty Hall logo */}
          <a href="https://www.libertyhall.net/" target="_blank">
            <img src="/LibertyHall.svg" className="logo" alt="React logo" />
          </a>
        </div>
        {/* A div element with the class name "data-box" */}
        {/* This div contains a table element */}
        <div className="data-box">
          <table>
            <thead>
              {/* The header row of the table */}
              <tr>
                {/* Map over the keys of the first object in the data array */}
                {/* Render a table header cell (th) for each key */}
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Map over each object in the data array */}
              {/* Render a table row (tr) for each object */}
              {data.map((row) => (
                <tr key={row.title}>
                  {/* Map over the values of the current object */}
                  {/* Render a table data cell (td) for each value */}
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