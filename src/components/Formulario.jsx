import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Alert from './Alerta';
import { v4 as uuidv4 } from "uuid"

const Formulario = ({setError, nuevaBase }) => {
  
  const [listaPersona, setListaPersona] = useState(nuevaBase) 
  const [nombre, setNombre]=useState('')
  const [correo, setCorreo]=useState('')
  const [edad, setEdad]=useState('')
  const [cargo, setCargo]=useState('')
  const [telefono, setTelefono]=useState('') 
  console.log(listaPersona)
  const capturaNombre= (e)=>{
    setNombre(e.target.value)
  }
  const capturaCorreo= (e)=>{
    setCorreo(e.target.value)
  }
  const capturaEdad= (e)=>{
    setEdad(e.target.value)
  }
  const capturaCargo= (e)=>{
    setCargo(e.target.value)
  }
  const capturaTelefono= (e)=>{
    setTelefono(e.target.value)
  }
  const enviar =(e)=>{
    e.preventDefault()
    if(nombre.trim()===''||correo.trim()===''||edad.trim()===''||cargo.trim()===''||telefono.trim()===''){
      setError({
        error: true,
        msg: "Todos los campos son obligatorios, favor rellenar todos los campos solicitados",
}) 
    }else{
      setError({ 
        error: false,
        msg: "Datos ingresados exitosamente",
});
    }

    setListaPersona([
      ...listaPersona, {
      id:uuidv4(),
      nombre:nombre,
      correo:correo,
      edad:edad,
      cargo:cargo,
      telefono:telefono,
    } ])
    
        }
       
    
  return (
  <>
        <h1 className="text-center mb-5">Agregar colaborador</h1>

        <form className="formulario" onSubmit={(e)=>enviar(e)} >
     <div className="form-group">
     <input
        type="text" 
        name="nombre" 
        placeholder="Nombre del colaborador"
        onChange={capturaNombre} 
        value={nombre}
        />
        </div>

        <div className="form-group">
     <input
        type="email" 
        name="correo" 
        placeholder="Email de colaborador"
        onChange={capturaCorreo}
        value={correo}
        />

        </div>
        <div className="form-group">
     <input
        type="number" 
        name="edad" 
        placeholder="Edad de colaborador"
        onChange={capturaEdad}
        value={edad}
        />
        </div>

        <div className="form-group">
     <input
        type="text" 
        name="cargo" 
        placeholder="Cargo del colaborador"
        onChange={capturaCargo}
        value={cargo}
        />
        </div>

        <div className="form-group">
     <input
        type="number" 
        name="telefono" 
        placeholder="Teléfono del colaborador"
        onChange={capturaTelefono}
        value={telefono}
        />
        </div>



        <button type="submit" className="btn btn-primary mt-1">
          Agregar colaborador
        </button>

      </form>

      </>
  )
}

export default Formulario