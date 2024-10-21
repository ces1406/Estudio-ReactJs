import reactLogo from './assets/react.svg'
import './App.css'
import CompoClase from './compoClass'
import CompoHook from './compoHook'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <hr/>
      <h2>Componente tipo class</h2>
      <CompoClase propA='soy una prop->A'>
        <h4>children-1</h4>
        <h4>children-2</h4>
      </CompoClase>
      <hr/>
      <h2>Componente tipo Hook</h2>
      <CompoHook propA='soy una prop->A'>
        <h4>children-1</h4>
        <h4>children-2</h4>
        </CompoHook>
    </>
  )
}

export default App
