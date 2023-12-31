import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search_Person = ({Rendering_Data_Base, Set_Filtered_Data}) => {

    const Searching=(e)=>{
        const Text_Search=e.target.value.toLowerCase()
        const result=Rendering_Data_Base.filter(
            (Person) => 
            Person.nombre.toLowerCase().includes(Text_Search) || 
            Person.correo.toLowerCase().includes(Text_Search) ||
            Person.edad.includes(Text_Search) ||
            Person.cargo.toLowerCase().includes(Text_Search) ||
            Person.telefono.toLowerCase().includes(Text_Search)
            );
          Set_Filtered_Data(result)
        
    }

    return(
        <Form inline>
        <Row>
          <Col xs="auto mb-3">
            <div><h1> Lista Colaboradores</h1></div>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={Searching}
            />
          </Col>
        </Row>
      </Form>
    )
}

export default Search_Person