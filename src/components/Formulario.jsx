import { useState } from "react";


const Formulario = ({setError}) => {
    const [formData, SetFormData] = useState({
        name:"",
        email:"",
        password:"",
        confPass:"",
    })

    const DataValidating=(e)=>{
        e.preventDefault()
        const {name, email, password, confPass} =formData
        const DataValidation = !name || !email || !password|| !confPass
        const PassValidation = password !== confPass
        

DataValidation ? 

setError({
        error: true,
        msg: "Todos los campos son obligatorios, favor rellenar todos los campos solicitados",
        color: "warning"
}) 
:setError({ 
        error: false,
        msg: "Datos ingresados exitosamente",
        color: "success"
});

if (PassValidation){
    setError({
        error: true,
        msg: "Contraseñas no coinciden, por favor intentelo de nuevo",
        color: "danger"
    });
    return
}
SetFormData({
        name:"",
        email:"",
        password:"",
        confPass:"",
});

    }
 
    
const handleChange = (e)=>{
    SetFormData({...formData, [e.target.name] : e.target.value})

}

  return (
    <>
      <form className="formulario" onSubmit={(e)=>DataValidating(e)} >

        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Correo"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confPass"
            className="form-control"
            placeholder="confirmar contraseña"
            onChange={handleChange}
            value={formData.confPass}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Registrarse
        </button>
      </form>

    </>
  )
}

export default Formulario