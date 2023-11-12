import { useState } from 'react'
import './App.css'
import List_Rendering from './components/Listado'
import Search_Person from './components/Buscador'
import Alert from './components/Alerta.JSX'
import { BaseColaboradores } from './Lista'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";


function App() {
  const [error, setError] = useState('')
  const [Rendering_Data_Base, SetRendering_Data_Base]=useState(BaseColaboradores)
  const [Filtered_Data_Base, Set_Filtered_Data]=useState(Rendering_Data_Base)
console.log(Rendering_Data_Base)
    
  return (
    <>
    <Container>
     
      <Row>
        
        <Col><Search_Person 
          Rendering_Data_Base={Rendering_Data_Base} 
          Set_Filtered_Data={Set_Filtered_Data}
        />
        <List_Rendering  
          Filtered_Data={Filtered_Data_Base} 
        /></Col>


        <Col>
        <Formulario 
        error={error}
        setError={setError}
        nuevaBase={Rendering_Data_Base}
        Set_Filtered_Data={Set_Filtered_Data}
        SetRendering_Data_Base={SetRendering_Data_Base}
        Rendering_Data_Base={Rendering_Data_Base}
        Filtered_Data_Base={Filtered_Data_Base}
        />
        <Alert error={error}

        /></Col>
      </Row>
    </Container>
        
        
        
      
    </>
  )
}

export default App
