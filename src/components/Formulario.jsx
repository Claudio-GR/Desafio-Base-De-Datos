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
        // const [error, setError] = useState(false);

        const enviarForm = (e) =>{
            e.preventDefault()
            
            setBaseColaboradores({...baseColaboradores, [e.target.name] : e.target.value})
            console.log(baseColaboradores)
            // const {nombre, correo, edad, cargo, telefono}= baseData
            // if (nombre.trim()=='' || correo.trim()=='' || edad.trim()=='' || cargo.trim()=='' || telefono.trim()==''){
            //     setError(true)
            //     return
            // }
        }
    
  return (
  <>
        <h1 className="text-center mb-5">Agregar colaborador</h1>

        <form className="formulario" onSubmit={(e)=>enviarForm(e)} >
     <div className="form-group">
     <input
        type="text" 
        name="nombre" 
        placeholder="Nombre del colaborador"
        onChange={enviarForm} 
        value={baseColaboradores.nombre}
        />
        </div>

        <div className="form-group">
     <input
        type="email" 
        name="correo" 
        placeholder="Email de colaborador"
        onChange={enviarForm}
        value={baseColaboradores.correo}
        />

        </div>
        <div className="form-group">
     <input
        type="number" 
        name="edad" 
        placeholder="Edad de colaborador"
        onChange={enviarForm}
        value={baseColaboradores.edad}
        />
        </div>

        <div className="form-group">
     <input
        type="text" 
        name="cargo" 
        placeholder="Cargo del colaborador"
        onChange={enviarForm}
        value={baseColaboradores.cargo}
        />
        </div>

        <div className="form-group">
     <input
        type="number" 
        name="telefono" 
        placeholder="Teléfono del colaborador"
        onChange={enviarForm}
        value={baseColaboradores.telefono}
        />
        </div>



        <button type="submit" className="btn btn-primary mt-1">
          Agregar colaborador
        </button>

        
        
{/* 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control 
        type="email" 
        name="correo" 
        placeholder="Email de colaborador" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control 
        type="text" 
        name="edad" 
        placeholder="Edad de colaborador" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control 
        type="text" 
        name="cargo" 
        placeholder="Cargo del colaborador" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control 
        type="number" 
        name="telefono" 
        placeholder="Teléfono del colaborador" />
      </Form.Group> */}
      </form>
      </>
  )
}

export default Formulario