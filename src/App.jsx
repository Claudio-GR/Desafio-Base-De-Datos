import { useState } from 'react'
import './App.css'
import List_Rendering from './components/Listado'
import Search_Person from './components/Buscador'
import Alert from './components/Alerta.JSX'
import { BaseColaboradores } from './Lista'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [error, setError] = useState("")
  const [filter, setFilter] = useState(false)
  const Rendering_Data_Base=[]
  const Filtered_Data_Base=[]
  if(filter==true){
    Rendering_Data_Base=Filtered_Data_Base
  }
  else{
    Rendering_Data_Base=BaseColaboradores
  }

  return (
    <>
      <body>
        <Search_Person filer={filter} setFilter={setFilter}/>
        <List_Rendering Data_Base={Rendering_Data_Base} />
        <Formulario 
        setError={setError}
        error={error}/>
        <Alert error={error}/>
      </body>
    </>
  )
}

export default App
