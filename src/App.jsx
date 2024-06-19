import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src="/LibertyHall.svg" className="logo" alt="React logo" /> 
        </a>
      </div>
      <div>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          Rent ME!
        </button>
    </div>
    </>
  )
};    
    

export default App;
