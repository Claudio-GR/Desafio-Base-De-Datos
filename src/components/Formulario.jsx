import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = () => {
        const [baseColaboradores, setBaseColaboradores] = useState({
            id: "",
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: "",
        })
        const [error, setError] = useState(false);

        const enviarForm = (e) =>{
            e.preventDefault()
            const {nombre, correo, edad, cargo, telefono}= baseData
            if (nombre.trim()=='' || correo.trim()=='' || edad.trim()=='' || cargo.trim()=='' || telefono.trim()==''){
                setError(true)
                return
            }
        }
    
  return (
    <div>
        <h1 className="text-center mb-5">Agregar colaborador</h1>
    <Form onSubmit={enviarForm}> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Control type="text" name="nombre" placeholder="Nombre del colaborador" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="correo" placeholder="Email de colaborador" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="edad" placeholder="Edad de colaborador" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="cargo" placeholder="Cargo del colaborador" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" name="telefono" placeholder="Teléfono del colaborador" />
      </Form.Group>
      <button type="submit" className="btn btn-primary mt-1">
          Agregar colaborador
        </button>

    </Form>
    </div>
  )
}

export default Formulario