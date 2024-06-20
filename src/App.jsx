import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('./MoviesTest.csv', {
      download: true,
      header: true,
      complete: ({ data }) => setData(data),
    });
  }, []);

  return (
    <div className="center-container">
      <div className="data-container">
        <div>
          <a href="https://www.libertyhall.net/" target="_blank">
            <img src="/LibertyHall.svg" className="logo" alt="React logo" />
          </a>
        </div>
        <div className="data-box">
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.title}>
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