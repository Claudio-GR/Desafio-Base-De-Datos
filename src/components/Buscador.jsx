import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BaseColaboradores } from '../Lista';

const Search_Person = ({filter, setFilter}) => {

    const Searching=(e)=>{
        e.preventDefault()
        setFilter(true)
        Filtered_Data_Base=BaseColaboradores.filter(
            (Person) => Person.nombre==e.Search_Text
            )
    }

    return(
        <Form inline onSubmit={(e)=>Searching(e)}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={Search_Text}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    )
}

export default Search_Person