import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './Lista'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [error, setError] = useState("")

  return (
    <>
      <body>
        <Formulario 
        setError={setError}
        error={error}/>
      </body>
    </>
  )
}

export default App
