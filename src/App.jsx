import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Papa.parse('./MoviesTest.csv', {
      download: true,
      header: true,
      complete: ({ data }) => setData(data),
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <div className="top-container">
        <div className="logo-container">
          <a href="https://www.libertyhall.net/" target="_blank">
            <img
              src="/LibertyHall.svg"
              className="logo bigger-logo"
              alt="React logo"
            />
          </a>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="data-container">
          <div className="scrollable-data-container">
            <div className="scrollable-container">
              <table>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr key={index}>
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
      </div>
    </div>
  );
}

export default App;

