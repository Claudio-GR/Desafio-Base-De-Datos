import Table from 'react-bootstrap/Table';


const List_Rendering = ({Data_Base}) => {
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
                    <td key={Person.id}>{Person.nombre}</td>
                    <td key={Person.id}>{Person.correo}</td>
                    <td key={Person.id}>{Person.edad}</td>
                    <td key={Person.id}>{Person.cargo}</td>
                    <td key={Person.id}>{Person.telefono}</td>
                </tr>
            ))}
        </tbody>
      </Table>
    );
  }
  
  export default List_Rendering;