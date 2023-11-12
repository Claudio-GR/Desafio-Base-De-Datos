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
  const [nuevaBase, setNuevaBase]=useState(BaseColaboradores)
  const [Rendering_Data_Base, SetRendering_Data_Base]=useState(nuevaBase)
  const [Filtered_Data_Base, Set_Filtered_Data]=useState(Rendering_Data_Base)
console.log(Rendering_Data_Base)
    
  return (
    <>
    
        <Search_Person 
          Rendering_Data_Base={Rendering_Data_Base} 
          Set_Filtered_Data={Set_Filtered_Data}
        />
        <List_Rendering 
          Data_Base={Rendering_Data_Base}  
          Filtered_Data={Filtered_Data_Base} 
          nuevaBase={nuevaBase}
          
        />
        <Formulario 
        setError={setError}
        error={error}
        nuevaBase={Rendering_Data_Base}
        setNuevaBase={setNuevaBase}
        />
        <Alert error={error}/>
      
    </>
  )
}

export default App
