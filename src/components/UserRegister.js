import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../styles/UserRegister.css";

const URI = "http://localhost:8000/comapp/register";

const UserRegister = () => {
  const [nombreusuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const navigate = useNavigate();

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault();

    if (contraseña === contraseña2) {
      // await axios.post(URI, {
      //   nombreusuario,
      //   contraseña,
      //   correo,
      //   telefono,
      // });
      alert("Se ha registrado de forma exitosa. Por favor, inicie sesión.");
      navigate("/login");
    } else {
      alert("Sus contraseñas no coinciden. Por favor verifique.");
    }
  };

  return (
    <div className="register">
      <div className="logo-register-container"></div>
      <div className="register-container-form">
        <h2 id="register-text">Regístrate</h2>
        <form onSubmit={store}>
          <div className="register-input-background">
            <input
              placeholder="Nombre de usuario"
              value={nombreusuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Contraseña"
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={contraseña2}
              onChange={(e) => setContraseña2(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="register-input-background">
            <input
              placeholder="Número de teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="gologin-text-container">
            <h2 id="gologin-text">
              <Link to="/login">¿Posees ya una cuenta? Inicia sesión</Link>
            </h2>
          </div>
          <button className="register-btn" type="submit">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
