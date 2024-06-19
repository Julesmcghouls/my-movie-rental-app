import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="center-container">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src="/LibertyHall.svg" className="logo" alt="React logo" /> 
        </a>
      </div>
      <div>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          RENTED {count} TIMES!
        </button>
      </div>
    </div>
  )
}

export default App;