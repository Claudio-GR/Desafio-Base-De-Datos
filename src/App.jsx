import { useState } from 'react'
import './App.css'
import List_Rendering from './components/Listado'
import { BaseColaboradores } from './Lista'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [error, setError] = useState("")

  return (
    <>
      <body>
        <List_Rendering Data_Base={BaseColaboradores}/>
        {/* <Formulario 
        setError={setError}
        error={error}/> */}
      </body>
    </>
  )
}

export default App
