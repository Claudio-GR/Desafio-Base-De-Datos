import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({
  setError,
  Set_Filtered_Data,
  SetRendering_Data_Base,
  Rendering_Data_Base,
  Filtered_Data_Base,
}) => {
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const enviar = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      edad.trim() === "" ||
      cargo.trim() === "" ||
      telefono.trim() === ""
    ) {
      setError({
        error: true,
        msg: "Todos los campos son obligatorios, favor rellenar todos los campos solicitados",
        color: "warning"
      });
    } else {
      setError({
        error: false,
        msg: "Datos ingresados exitosamente",
        color: "success"
      });Set_Filtered_Data([
        ...Filtered_Data_Base,
        {
          id: uuidv4(),
          nombre: nombre,
          correo: correo,
          edad: edad,
          cargo: cargo,
          telefono: telefono,
        },
      ]);
      SetRendering_Data_Base([
        ...Rendering_Data_Base,
        {
          id: uuidv4(),
          nombre: nombre,
          correo: correo,
          edad: edad,
          cargo: cargo,
          telefono: telefono,
        },
      ])
    }

    ;

    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <>
    <div className="container">
    <div className='form-text'>
      <h1 className="text-center mb-2">Agregar colaborador</h1>
      </div>
      <Form className="formulario" onSubmit={enviar}>
        <div className="form-group">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre del colaborador"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
          />
        </div>

        <div className="form-group">
          <Form.Control
            type="email"
            name="correo"
            placeholder="Email de colaborador"
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
            value={correo}
          />
        </div>
        <div className="form-group">
          <Form.Control
            type="number"
            name="edad"
            placeholder="Edad de colaborador"
            onChange={(e) => {
              setEdad(e.target.value)
            }}
            value={edad}
          />
        </div>

        <div className="form-group">
          <Form.Control
            type="text"
            name="cargo"
            placeholder="Cargo del colaborador"
            onChange={(e) => {
              setCargo(e.target.value)
            }}
            value={cargo}
          />
        </div>

        <div className="form-group">
          <Form.Control
            type="number"
            name="telefono"
            placeholder="Teléfono del colaborador"
            onChange={(e) => {
              setTelefono(e.target.value)
            }}
            value={telefono}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-1">
          Agregar colaborador
        </button>
      </Form>
      </div>
    </>
  );
};

export default Formulario;
