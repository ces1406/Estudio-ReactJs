import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CompoClase from './compoClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CompoClase propA='soy una prop'>
        <h3>children-1</h3>
        <h3>children-2</h3>
      </CompoClase>
    </>
  )
}

export default App
