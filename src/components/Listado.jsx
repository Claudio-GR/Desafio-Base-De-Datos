import Table from 'react-bootstrap/Table';


const List_Rendering= ({Data_Base}) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
            {Data_Base.map((Person) =>(
                <tr>
                    <td>{Person.nombre}</td>
                    <td>{Person.correo}</td>
                    <td>{Person.edad}</td>
                    <td>{Person.cargo}</td>
                    <td>{Person.telefono}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    );
  }
  
  export default List_Rendering;